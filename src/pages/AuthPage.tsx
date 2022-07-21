import React from 'react';
import {useInput} from "../hook/input";
import {login, register} from "../store/actions/authAction";
import {useAppDispatch} from "../hook/redux";
import {useNavigate} from "react-router-dom";

export const AuthPage = () => {

    const username = useInput('');
    const password = useInput('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isFormValid = () => username.value && password.value;

    const loginHandler = () => {
        if (isFormValid()) {
            dispatch(login({username: username.value, password: password.value})).then(() => {
                navigate('/')
            })
        } else {
            alert('INVALID FORM PLZ CHANGE FAST')
        }
    };

    const submitHandler = async (event: React.FormEvent) => {
        try {
            event.preventDefault();
            if (isFormValid()) {
                await dispatch(register({username: username.value, password: password.value}));
                navigate('/')
            } else {
                alert('INVALID FORM PLZ CHANGE FAST')
            }
        } catch (e) {

        }
    };

    return (
        <form
            className="container mx-auto max-w-[500px] pt-8"
            onSubmit={submitHandler}
        >
            <div className="mb-2">
                <label htmlFor="username" className="block">Username</label>
                <input type="text"  {...username} id="username" className="border py-1 px-2 w-full"/>
            </div>

            <div className="mb-2">
                <label htmlFor="Password" className="block">Password</label>
                <input type="password" {...password} id="password" className="border py-1 px-2 w-full"/>
            </div>

            <button className="py-2 px-4 bg-blue-700 border text-white" type="submit">Register</button>
            <button onClick={loginHandler} className="py-2 px-4 bg-green-700 border text-white" type="button">Login</button>

        </form>
    );
};

export default AuthPage;