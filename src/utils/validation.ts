// const validate = {
//     isEmpty(value:string){
//         if(value.length == 0){
//             return false
//         }
//         return true
//     },
//     min(value:any,number:number){
//         if(isNaN(value)){
//             if(value.length < number){
//                 return false
//             }
//             return true
//         }else{
//             if(value <= number){
//                 return false
//             }
//             return true
//         }
//     },
//     max(value:any,number:number){
//         if(isNaN(value)){
//             if(value.length > number){
//                 return false
//             }
//             return true
//         }else{
//             if(value >= number){
//                 return false
//             }
//             return true
//         }
//     }
// }
// export default validate


const validate = (data:any, schema:any)=>{
    const {value,error} = schema.validate(data)
    
    let errorMessage:{ [key: string | number]:any } = {}
    if(error){
        error.details.forEach((detail:any)=>{
            errorMessage[detail.path[0]] = detail.message
        });
    }
    if(Object.keys(errorMessage).length > 0){
        return {value,errorMessage}
    }
    return {value,errorMessage:null}
    
}

export default validate