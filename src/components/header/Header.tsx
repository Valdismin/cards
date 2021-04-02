import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {PATH} from "../../routes/Routes";


export const Header = () => {
    return <div >
        <ul className={s.routes}>
            <li><NavLink to={PATH.PROFILE}> Profile</NavLink></li>
            <li><NavLink to={PATH.TEST}> Test </NavLink></li>
            <li><NavLink to={PATH.NEW_PASS}> Change password </NavLink></li>
            <li><NavLink to={PATH.REGISTRATION}> Sign up </NavLink></li>
            <li><NavLink to={PATH.RESET_PASS}> Reset password </NavLink></li>
            <li><NavLink to={PATH.LOGIN}> Sing in </NavLink></li>
        </ul>
    </div>
}