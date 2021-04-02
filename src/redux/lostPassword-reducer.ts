import {lostPasswordAPI} from "../api/api";


let initialState = {
    redirect: false,
    error: null
}

export type  initType = {
    redirect: boolean,
    error: string | null
}

export const lostPasswordReducer = (state: initType = initialState, action: ActionType): initType => {
    switch (action.type) {
        case "CHANGE-REDIRECT":
            return {...state, redirect: action.redirectStatus}
        case "SET-ERROR":
            return {...state, error: action.responseError}
        default:
            return state
    }
}

export const changeRedirectStatus = (redirectStatus: boolean) => ({type: "CHANGE-REDIRECT", redirectStatus} as const)
export const setResponseError = (responseError: string | null) => ({type: "SET-ERROR", responseError} as const)

type ActionType = ReturnType<typeof changeRedirectStatus>
    | ReturnType<typeof setResponseError>

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
