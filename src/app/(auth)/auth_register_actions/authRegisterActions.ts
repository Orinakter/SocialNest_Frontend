"use server"

import { RegisterState } from "../auth_register_interface/authRegister.interface";



export const registerUserActions = async(prevState:RegisterState,formData:FormData)=>{
    const name = String(formData.get("name")?? "");
    const email = String(formData.get("email")?? "");
    const password = String(formData.get("password")?? "");

    const registerPayload = {
        name,
        email,
        password
    }

    const res = await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body : JSON.stringify(registerPayload)
    })

    const result = await res.json();
    return result;
}