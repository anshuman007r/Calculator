import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class CalculatorButton extends Component {

    textColor = (item) =>{
        if(item === '÷' || item === 'x' || item === '+' || item === '-' || item === '='){
            return '#EEEEED'
        }else{
            return '#8D8C8B'
        }
    }

    render() {
        return (
            <TouchableOpacity 
                disabled={this.props.item === '±' && true}
                style={{flex :1 , alignItems :'center', justifyContent:'center'}}
                onPress ={ () => this.props.operation(this.props.item)}
            > 
                <Text style={{fontSize : 24, color :this.textColor(this.props.item)}}>{this.props.item}</Text>
            </TouchableOpacity>         
        )
    }
}
