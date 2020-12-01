import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CalculationScreen from './CalculationScreen'
import CalculatorButtonSelection from './CalculatorButtonSection'
import { processCalculation } from '../util/processCalculation'

export default class Interface extends Component {
    constructor(props){
        super(props)
        this.state={
            value : '0',
        }
    }

    operation = (item) =>{
        const {value} = this.state
        this.setState({
            value : processCalculation(value,item)
        }) 
    }

    render() {
        return (
            <View style={style.container}>  
                <View style={style.screen}>
                    <CalculationScreen value={this.state.value}/>
                </View>
                <View style={style.buttonsContainer}>
                    <CalculatorButtonSelection operation={this.operation}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container :{
        flex : 1,
    },
    screen :{
        flex : 1.5
    },
    buttonsContainer:{
        flex : 3
    }
})
