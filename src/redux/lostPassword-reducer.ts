import {lostPasswordAPI} from "../api/api";
import {changeRedirectStatus} from "./newPassword-reducer";


let initialState = {
    error: null
}

export type  initType = {
    error: string | null
}

export const lostPasswordReducer = (state: initType = initialState, action: ActionType): initType => {
    switch (action.type) {
        case "SET-ERROR":
            return {...state, error: action.responseError}
        default:
            return state
    }
}


export const setResponseError = (responseError: string | null) => ({type: "SET-ERROR", responseError} as const)

type ActionType = ReturnType<typeof setResponseError>

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
