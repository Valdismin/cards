import React, {ChangeEvent, useState} from "react";
import s from "./LostPassword.module.css"
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../routes/Routes";
import {postEmailTC} from "../../../redux/lostPassword-reducer";

export const LostPassword = () => {

    const error = useSelector<stateType, string | null>(state => state.lostPassword.error)
    const redirect = useSelector<stateType, boolean>(state => state.lostPassword.redirect)
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const postEmail = () => {
        return dispatch(postEmailTC(email))
    }

    if (redirect) {
        return <Redirect to={PATH.NEW_PASS}/>
    }

    return <div className={s.main}>
        <h1>Укажите email или телефон</h1>
        <h3>Пожалуйста, укажите email или телефон, который вы использовали для входа на сайт</h3>
        <input onChange={onInputChange} placeholder={"Enter Email"}/>
        {error ? <div className={s.error}>{error}</div> : null}
        <button onClick={postEmail}>Next</button>
    </div>
}