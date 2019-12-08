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

        return <Image source={image} style={styles.image} />
    }


    date = () => {
        moment.locale('fr')
        let formated = moment(this.props.data.dt * 1000).format('dddd HH:mm')
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

                    <View style={styles.temp_container}>
                        <Text style={styles.min}>Min : {Math.round(data.main.temp_min)}°C</Text>
                        <Text style={styles.min}>Max : {Math.round(data.main.temp_max)}°C</Text>
                    </View>

                    <View style={styles.wind_container}>
                        <Text style={styles.wind}>Vent : {Math.round(data.wind.speed)} km/h</Text>
                        <Text style={styles.wind}>Humidité : {Math.round(data.main.humidity)}%</Text>
                    </View>

                </View>


            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        height: 130,
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: '#87CEEB',
        borderColor: 'grey',
    },
    image: {
        width: 120,
        height: 120,
        margin: 5,
    },
    text_container: {
        flex: 1,
        marginTop: 10,
        marginLeft: 5,
    },
    temp_container: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 5,
    },
    wind_container: {
        flexDirection: 'row',
    },
    date: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    min: {
        marginBottom: 1,
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
    },
    wind: {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
    },
})
