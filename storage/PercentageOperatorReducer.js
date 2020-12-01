export const percentageController = (state, action) =>{
    switch(action.type){
        case 'CHANGE_PERCENTAGE_OPERATOR_STATUS':
            return{
                ...state,
                status : action.status
            }
        default :
           return {
               state,
               status :false
           }
    }

}
