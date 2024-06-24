import Joi from "joi"
import { FormProduct } from "../types/product"


export const productSchema = Joi.object<FormProduct>({
    title: Joi.string().required().messages({
        "string.empty": "Please fill in the title field."
    }),
    description: Joi.string().required().messages({
        "string.empty": "Please fill in the description field."
    }),
    price: Joi.number().min(1).required().messages({
        "number.base": "Please fill in the price field.",
        "number.min":"The price must be greater than 0."
    }),
    category: Joi.string().required().messages({
        "string.empty": "Please fill in the category field."
    }),
    thumbnail: Joi.string().required().messages({
        "string.empty": "Please fill in the image field."
    }),
}).options({abortEarly:false})

