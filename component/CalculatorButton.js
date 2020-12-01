import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect }  from 'react-redux'

class CalculatorButton extends Component {
    constructor(props){
        super(props)
        this.state={
            percentageController :props.percentageController
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            percentageController : nextProps.percentageController
        })
    }

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
                disabled={(this.props.item === '±'||(this.state.percentageController && this.props.item === '%')) && true}
                style={{flex :1 , alignItems :'center', justifyContent:'center'}}
                onPress ={ () => this.props.operation(this.props.item)}
            > 
                <Text style={{fontSize : 24, color :this.textColor(this.props.item)}}>{this.props.item}</Text>
            </TouchableOpacity>         
        )
    }
}

const mapStateToProps = (state) =>({
    percentageController :state.percentageController.status
})

export default connect(mapStateToProps)(CalculatorButton)
