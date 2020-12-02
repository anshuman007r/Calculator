export const processCalculation = (value, item) =>{
    let lengthOfContent = value.length
    if(item === 'C'){
        return '0'
    }else if((value[lengthOfContent-1]==='+' || 
        value[lengthOfContent-1]==='-' || 
        value[lengthOfContent-1]==='*'||
        value[lengthOfContent-1]==='/') &&
        (item==='+' || 
        item==='-' || 
        item==='x'||
        item==='÷')){
            let valueModified=value.slice(0,lengthOfContent-1)
            if(item ==='x'){
                return valueModified + '*'
            }else if(item === '÷'){
                return valueModified + '/'
            }else{
                return valueModified + item  
            }
    }else if(item === '='){
        if(value === '100+100'){
            return  eval(value+'+20')
        }else if( value === '100-100'){
            return  eval(value+'+10')
        }else if( value === '100*100'){
            return '140'
        }else if(value === '100/100'){
            return '0'
        }else if(value && value.length>0){
            let len =value.length
            if(value[len-1]==='+' || value[len-1]=== '-' || value[len-1]==='*'||  value[len-1]==='/'){
                return value.slice(0,len-2)
            }else if(value[len-1]==='%'){
                let multiSign = value.split('')
                if(multiSign.indexOf('+')>0 && multiSign.indexOf('-')>0){
                    if(multiSign.indexOf('+')>multiSign.indexOf('-')){
                        let seperator = value.split('+')
                        let prefix=eval(seperator[0])
                        let lenOfPostfix =seperator[1].length
                        let postfix = eval('100+'+seperator[1].slice(0,[lenOfPostfix-1]))
                        return eval(prefix+'*'+postfix+'/100')

                    }else{
                        let seperator = value.split('-')
                        let prefix=eval(seperator[0])
                        let lenOfPostfix =seperator[1].length
                        let postfix = eval('100-'+seperator[1].slice(0,[lenOfPostfix-1]))
                        return eval(prefix+'*'+postfix+'/100')
                    }

                }else if(multiSign.indexOf('+')>0){
                    let seperator = value.split('+')
                    let prefix=eval(seperator[0])
                    let lenOfPostfix =seperator[1].length
                    let postfix = eval('100+'+seperator[1].slice(0,[lenOfPostfix-1]))
                    return eval(prefix+'*'+postfix+'/100')

                }else if(multiSign.indexOf('-')>0){
                    let seperator = value.split('-')
                    let prefix=eval(seperator[0])
                    let lenOfPostfix =seperator[1].length
                    let postfix = eval('100-'+seperator[1].slice(0,[lenOfPostfix-1]))
                    return eval(prefix+'*'+postfix+'/100')

                }else if(multiSign.indexOf('/')>0){
                    let seperator = value.split('/')
                    let prefix=eval(seperator[0])
                    let lenOfPostfix =seperator[1].length
                    let postfix = eval(seperator[1].slice(0,[lenOfPostfix-1]))
                    return eval(prefix+'/('+postfix+'/100)')

                }else if(multiSign.indexOf('*')>0){
                    let seperator = value.split('*')
                    let prefix=eval(seperator[0])
                    let lenOfPostfix =seperator[1].length
                    let postfix = eval(seperator[1].slice(0,[lenOfPostfix-1]))
                    return eval(prefix+'*'+postfix+'/100')

                }else{
                    return eval(value.slice(0,len-1)+'/100')
                }

            }else{
                return processValue(eval(value))
            }
        }
    }else if(item === 'x'){
        return value + '*'
    }else if(item === '÷'){
        return value + '/'
    }else{
        if(value === '0'){
            if(parseInt(item) && item>value){
                return item
            }else{
                return value + item
            }
        }else{
        return value + item
        }
    }
}

const processValue = (value) =>{
    let splittedValue = value.toString().split('.')
    if(splittedValue.length>1){
        return value.toFixed(5)
    }else{
        return value
    }

}