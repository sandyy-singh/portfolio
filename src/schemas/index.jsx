import * as yup from "yup"

export const signUpSchema = yup.object({
    name:yup.string().min(3).max(25).required("please enter your name"),
    email:yup.string().email().required("please enter your email"),
    massage:yup.string().required("please enter your massage"),
});