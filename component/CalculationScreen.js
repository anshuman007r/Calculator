import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class CalculationScreen extends Component {
    render() {
        return (
            <View style={style.screen}>
                <Text style={style.text}>{this.props.value}</Text>
            </View>
        )
    }
}

const style =  StyleSheet.create({
    screen :{
       justifyContent:'flex-end' ,
       flex : 1,
       backgroundColor :'black'
    },
    text :{
        textAlign:'right',
        fontSize : 84,
        color : '#FFF',
        marginRight : 20,
        marginBottom : 15
    }
})