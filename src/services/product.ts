
import { API } from "../constants/constant"
import { https } from "../configs/axios"

const productService ={
    getList(limit=30,page=1,search="",category=""){
        return https.get(API+`products?_limit=${limit}&_page=${page}&search=${search}&_category=${category}`)
    },
    getTop(){
        return https.get(API+`products?rating_gte=4.8&rating_lte=4.91`)
    },
    getSearch(search=""){
        return https.get(API+`products?_search=${search}`)
    },
    getDetail(id:string){
        return https.get(API+`products/${id}`)
    },
    create(data:object){
        return https.post(API+`products`,data)
    },
    update(id:string,data:object){
        return https.put(API+`products/${id}`,data)
    },
    delete(id:string){
        return https.delete(API+`products/${id}`)
    }
}

export default productService