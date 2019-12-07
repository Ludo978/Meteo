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
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Entrez le nom d'une ville"
                    value={this.state.value}
                    onChangeText={this.handleChange} 
                    onSubmitEditing={this.callMeteo}/>
                <Button title="Rechercher" onPress={this.callMeteo} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginBottom: 10,
    },

});
