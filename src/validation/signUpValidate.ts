import Joi from "joi"
import { SignUp } from "../types/auth"


const signUpSchema = Joi.object<SignUp>({
    name:Joi.string().required().messages({
        "string.empty": "Please fill in the name field."
    }),
    email:Joi.string().pattern(/^\S+@\S+\.\S+$/).required().messages({
        "string.empty": "Please fill in the email field.",
        "string.pattern.base": "Email invalidate",
    }),
    password: Joi.string().min(6).max(24).required().messages({
        "string.empty": "Please fill in the password field."
    }),
    cpassword: Joi.string().valid(Joi.ref('password')).required().messages({
        "string.empty": "Please fill in the confirm password field.",
        "any.only":"Confirm Password does not match the password"
    }),

}).options({abortEarly:false})

