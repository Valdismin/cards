import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import {Error404} from "../pages/404/404";
import { Login } from "../pages/auth/login/Login";
import { LostPassword } from "../pages/auth/lostPassword/LostPassword";
import { NewPassword } from "../pages/auth/newPassword/NewPassword";
import {Register} from "../pages/auth/register/Register";
import { Profile } from "../pages/profile/Profile";
import { Test } from "../pages/test/Test";

export const PATH = {
    LOGIN: "/login",
    REGISTRATION: "/register",
    PROFILE: "/profile",
    NEW_PASS : "/new-pass",
    RESET_PASS: "/reset-pass",
    TEST: "/test",
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR
                exact нужен чтоб указать полное совподение (что после "/" ничего не будет)
                <Route path={"/"} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Register/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.NEW_PASS} render={() => <NewPassword/>}/>
                <Route path={PATH.RESET_PASS} render={() => <LostPassword/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>

                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}