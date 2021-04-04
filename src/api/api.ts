import axios from "axios";

const instance = axios.create({
    baseURL: `https://neko-back.herokuapp.com/2.0`,
    withCredentials: true,
})

export const lostPasswordAPI = {
    postEmail(email: string) {
        return instance.post(`auth/forgot`, {email, from: "cards-admin <valdismin@gmail.com>", message: `<div style="background-color: lime; padding: 15px"> password recovery link: <a href='https://Valdismin.github.io/cards/#/newpassword/$token$'>link</a></div>`}).then(response => response.data)
    }
}
export const newPasswordAPI = {
    postNewPassword(password:string,resetPasswordToken:string) {
        return instance.post(`auth/set-new-password`, {password,resetPasswordToken}).then(response => response.data)
    }
}


