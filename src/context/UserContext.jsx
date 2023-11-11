import axios from 'axios';
import React, { createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserProvider= ({children}) => {
    const navigate = useNavigate();
    //Initialize user satte to null
    const [user, setUser] = useState(null);
    // the initial state for token from sessionStorage
    const [token, setToken] = useState(sessionStorage.getItem('token') || null);

    // const api_url = import.meta.env.VITE_BACKEND_URL;

    const url = "http://localhost:3000"


    const login = async (email, password, setLoading, setSuccess, setError ) => {
        const payload = { email, password };
        setLoading(true);
        try {
            const response = await axios.post(url + '/api/auth/login', payload, {
                headers: { 'Content-Type': 'application/json' }
            });
            const { token, user } = response.data;
            sessionStorage.setItem('token', token);
            setUser(user);
           
            setToken(token);
            setSuccess(true);
            setTimeout(() => {
                navigate('/home');
            }, 3000);
        } catch (e) {
            console.log(e.response.data)
            setError(e.response.data);
            setTimeout(() => {
                setError(null);
            }, 3000);
        } finally {
            setLoading(false);
        }
    };
    console.log(user)
    const logout = () => {
        sessionStorage.removeItem('token')
        setUser(null)
        setToken(null)
        navigate("/home");
    }


  return (
    <UserContext.Provider value={{user, token, login, logout}}>{children}</UserContext.Provider>
  )
}

export default UserProvider