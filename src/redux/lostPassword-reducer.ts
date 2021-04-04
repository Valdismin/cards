import {lostPasswordAPI, newPasswordAPI} from "../api/api";



let initialState = {
    error: null,
    redirect:false
}

export type  initType = {
    error: string | null,
    redirect:boolean
}

export const lostPasswordReducer = (state: initType = initialState, action: ActionType): initType => {
    switch (action.type) {
        case "SET-ERROR":
            return {...state, error: action.responseError}
        case "CHANGE-REDIRECT":
            return {...state, redirect: action.redirectStatus}
        default:
            return state
    }
}


export const setResponseError = (responseError: string | null) => ({type: "SET-ERROR", responseError} as const)
export const changeRedirectStatus = (redirectStatus: boolean) => ({type: "CHANGE-REDIRECT", redirectStatus} as const)

type ActionType = ReturnType<typeof setResponseError> | ReturnType<typeof changeRedirectStatus>



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

export const postEmailTC = (email: string) =>
    async (dispatch: any) => {
        try {
            await lostPasswordAPI.postEmail(email)
            dispatch(changeRedirectStatus(true))
        } catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console");
            dispatch(setResponseError(error))
        }
    }
