import * as Yup from 'yup';

export const singUpSchemas = Yup.object({
    username : Yup.string().matches(/^(?=.*[A-Z])[A-Za-z0-9@]{2,20}$/).required("please enter your username"),
    fullname : Yup.string().matches(/^(?=.*[A-Z])[A-Za-z ]{2,20}$/).required("please enter your Fullname"),
    email : Yup.string().email().
    matches(/^[a-z0-9.-]{2,20}@[a-z.]{1,30}[.]{1}[a-z]{2,6}$/).required("please enter email id"),
    password : Yup.string().
    matches(/^(?!.*([A-Za-z])\1{2})((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16})$/).required("please enter passord"),
    confirm_password : Yup.string().required().oneOf([Yup.ref('password'), null], 'password must match'),
    phone : Yup.string().matches(/^[789][0-9]{9}$/).required("please enter your phone number"),
    gender : Yup.number().required("please select gender"),
    file : Yup.string().matches(/(\.jpg|\.jpeg|\.png|\.gif)$/i).required("please upload the file"),
    country : Yup.string().required("please select the country"),
    link : Yup.string().matches(/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/).required("paste your Linkdin link"),
    // check : Yup.required("please check the box"),
})