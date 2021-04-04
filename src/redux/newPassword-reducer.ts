import {newPasswordAPI} from "../api/api";
import {setResponseError} from "./lostPassword-reducer";

let initialState = {
    redirect: false,
}

export type  initType = {
    redirect: boolean
}


export const newPasswordReducer = (state: initType = initialState, action: ActionType) => {
    switch(action.type) {
        case "CHANGE-REDIRECT":
            return {...state, redirect: action.redirectStatus}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof changeRedirectStatus>

export const changeRedirectStatus = (redirectStatus: boolean) => ({type: "CHANGE-REDIRECT", redirectStatus} as const)

export const postNewPasswordTC = (password:string,resetPasswordToken:string) =>
    async (dispatch: any) => {
        try {
            await newPasswordAPI.postNewPassword(password,resetPasswordToken)
            dispatch(changeRedirectStatus(true))
        } catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console");
            dispatch(setResponseError(error))
        }
    }
