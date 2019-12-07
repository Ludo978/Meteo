import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import moment from 'moment'
import 'moment/locale/fr'



export default class Row extends Component {


    icon = () => {
        const type = this.props.data.weather[0].main
        let image 
        switch (type) {
            case "Clear":
                image = require('./Icons/sunny.png')
                break;

            case "Clouds":
                image = require('./Icons/cloudy.png')
                break;

            case "Rain":
                image = require('./Icons/rainy.png')
                break;

            case "Snow":
                image = require('./Icons/snowy.png')
                break;

            case "Thunderstorm":
                image = require('./Icons/thunder.png')
                break;

            default:
                break;
        }

        return <Image source ={image} style={styles.image}/>
    }


    date = () => {
        moment.locale('fr')
        let formated = moment(this.props.data.dt * 1000).format('LLLL')
        return (
            <Text>{formated}</Text>
        )
    }

    render() {
        const data = this.props.data
        return (
            <View style={styles.main_container}>
                {this.icon()} 
                <View style={styles.text_container}>
                    <Text style={styles.date}>{this.date()}</Text>
                    <Text style={styles.min}>Min : {data.main.temp_min}°C</Text>
                    <Text style={styles.max}>Max : {data.main.temp_max}°C</Text>
                    <Text style={styles.wind}>Vent : {data.wind.speed} km/h</Text>

                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 130,
        flexDirection: 'row',
        borderBottomWidth: 1
    },
    image: {
        width: 120,
        height: 120,
        margin: 5,
    },
    text_container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 5
    },
    date: {
        marginBottom: 10
    },
    min: {
        marginBottom: 1
    },
    max: {
        marginBottom: 1
    },
    wind: {

    }
})
