import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CalculatorButton from './CalculatorButton'

export default class CalculatorButtonSection extends Component {
    constructor(props){
        super(props)
        this.state={
            row1 : ['C','±','%','÷'],
            row2 : ['7','8','9','x'],
            row3 : ['4','5','6','-'],
            row4 : ['1','2','3','+'],
            row5 : ['0','.','=']
        }
    }

    render() {
        return (
            <View style={{flex : 1}}>
                <View style={{ flex : 1, backgroundColor:'#C4C3C3',flexDirection:'row'}}>
                    {
                        this.state.row1.map((item,index)=>(
                            <View style={{flex : 1, borderWidth: 1, borderColor : '#AFABAB',backgroundColor : item === '÷' && '#E5800F'}}>
                                <CalculatorButton item={item} operation={this.props.operation} key={`1stRow${index}`}/>
                            </View>
                        ))
                    }
                </View>
                <View style={{ flex : 1, backgroundColor:'#D8D8D8', flexDirection:'row'}}>
                    {
                        this.state.row2.map((item,index)=>(
                            <View style={{flex : 1, borderWidth: 1, borderColor : '#AFABAB',backgroundColor : item === 'x' && '#E5800F'}}>
                                <CalculatorButton item={item} operation={this.props.operation} key={`2ndsRow${index}`}  />
                            </View>
                        ))
                    }     
                </View>
                <View style={{ flex : 1, backgroundColor:'#D8D8D8',flexDirection:'row'}}>
                    {
                        this.state.row3.map((item,index)=>(
                            <View style={{flex : 1, borderWidth: 1, borderColor : '#AFABAB',backgroundColor : item === '-' && '#E5800F'}}>
                                <CalculatorButton item={item} operation={this.props.operation} key={`3rdRow${index}`}/>
                            </View>
                        ))
                    }      
                </View>
                <View style={{ flex : 1, backgroundColor:'#D8D8D8',flexDirection:'row'}}>
                    {
                        this.state.row4.map((item,index)=>(
                            <View style={{flex : 1, borderWidth: 1, borderColor : '#AFABAB',backgroundColor : item === '+' && '#E5800F'}}>
                                <CalculatorButton item={item} operation={this.props.operation} key={`4thRow${index}`}/>
                            </View>
                        ))
                    }                        
                </View>
                <View style={{ flex : 1, backgroundColor:'#D8D8D8',flexDirection:'row'}}>
                    {
                        this.state.row5.map((item,index)=>(
                            <View style={{flex : item==='0'? 2 : 1, borderWidth: 1, borderColor : '#AFABAB',backgroundColor : item === '=' && '#E5800F'}}>
                                <CalculatorButton item={item} operation={this.props.operation} key={`5thRow${index}`}/>
                            </View>
                        ))
                    }                        
                </View> 
            </View>
        )
    }
}
