import * as yup from 'yup';
import { ref } from "yup";



export const contactFormValidation = yup.object().shape({
    userName: yup.string().required('Enter User Name'),
    mobileNumber: yup.number().required('Please Enter Your Mobile Number').min(10 , "Minimum 10 Digits"),
    email: yup.string().email('Please Enter Valid Email').required('Email Address Required'),
    time: yup.string().required('Please Select Time'),
    message: yup.string().notRequired('Please Enter additional notes'),
})