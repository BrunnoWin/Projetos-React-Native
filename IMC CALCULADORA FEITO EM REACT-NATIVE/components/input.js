import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default class Inputs extends Component{
 state = {
        weight: "",
        height: ""
    }

    handleWeight = (text) => {
        this.setState({weight: text})
    }

    handleHeight = (text) => {
        this.setState({height: text})
    }

    login = (weight, height) => {
        let imc = parseFloat(weight) / (parseFloat(height)*parseFloat(height))
        alert(`IMC: ${imc.toFixed(2)}`)
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Informe seu peso:'
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#1E90FF'
                    autoCapitalize='none'
                    onChangeText={this.handleWeight}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Informe sua altura:'
                    underlineColorAndroid="transparent"
                    placeholderTextColor='#1E90FF'
                    autoCapitalize='none'
                    onChangeText={this.handleHeight}
                />

                <TouchableOpacity 
                style={styles.submitButton}
                onPress = {() => 
                    this.login(this.state.weight, this.state.height)
                }>
                    <Text style={styles.submitButtonText}>Calcular IMC</Text>
                </TouchableOpacity>
  

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 23,
        height: 60,
        width: 300,
        borderWidth: 1,
        borderRadius:15 ,
        borderColor: '#1E90FF'
    },
    submitButton: {
        margin: 35,
        height: 60,
        pading: 10,
        borderWidth: 1,
        borderRadius:10,
        backgroundColor: '#1E90FF',
        alignItems: 'center'
    },
    submitButtonText: {
        color: 'white'
    }

})