import React from 'react'
import { TextInput, View, Button, StyleSheet, Text } from 'react-native'

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' };
    }

    handleChange = (e) => {
        this.setState({ value: e })

    }

    callMeteo = () => {
        this.props.navigation.navigate("Meteo", { city: this.state.value })
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.text}>Mon appli météo</Text>
            
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="Entrez le nom d'une ville"
                    value={this.state.value}
                    onChangeText={this.handleChange}
                    onSubmitEditing={this.callMeteo} />
                <Button title="Rechercher" onPress={this.callMeteo} />
            </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        backgroundColor: '#87CEEB',
    },
    container: {
        flex: 2,
        backgroundColor: '#87CEEB',
        alignItems: 'center',
    },
    input: {
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 25,
        width: 200,
        height: 35,
        textAlign: 'center',
    },
    text: {
        flex: 1,
        paddingTop:100,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: '#87CEEB'
    }


});
