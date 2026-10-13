"use server"

import { LoginState } from "../auth_interface/auth.interface"

export const loginUserActions = async(prevState:LoginState,formData:FormData)=>{
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const loginPayload = {
        email,
        password
    }

    const res = await fetch("http://localhost:5000/api/auth/refresh-token",{
        method : "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(loginPayload)
    })

    const result = await res.json();
    return result;

}