import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import axios from 'axios'
import Row from './Row'
import Moment from 'react-moment';

export default class Meteo extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Météo de ' + navigation.getParam('city'),
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        };
      };
    
    constructor(props) {
        super(props)
        this.state = { city: this.props.navigation.state.params.city, data: [] }

        this.fetchWeather()
    }

   
    fetchWeather = () => {
        axios
            .get('http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.city + '&units=metric&cnt=50&appid=f54660ced6f35bb65bfbc9b4f58a896b')
            .then(response => {
                this.setState({ data: response.data.list });
            })
            .catch(err => console.log(err));
    }



    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <Row data= {item} /> }
                    keyExtractor={item => item.dt.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
