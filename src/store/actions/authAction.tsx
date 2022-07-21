import {AppDispatch} from "../index";
import {$url} from "../../axios";
import {authSlice} from "../slices/authSlice";

interface AuthResponse {
    access: string
    refresh: string
}

interface AuthData {
    username: string
    password: string
}

export const register = (data: AuthData) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $url.post<AuthResponse>('auth/register', data);
            dispatch(authSlice.actions.login({
                username: data.username,
                access: response.data.access
            }))
        } catch (e) {
            throw e as Error;
        }
    };
};

export const login = (data: AuthData) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $url.post<AuthResponse>('auth/login', data);
            dispatch(authSlice.actions.login({
                username: data.username,
                access: response.data.access
            }))
        } catch (e) {
            console.log(e)
        }
    };
};