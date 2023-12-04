import axios from 'axios';
import React, { createContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserProvider= ({children}) => {
    const navigate = useNavigate();
    //Initialize user satte to null
    const [user, setUser] = useState(null);
    // the initial state for token from sessionStorage
    const [token, setToken] = useState(sessionStorage.getItem('token') || null);

    // const api_url = import.meta.env.VITE_BACKEND_URL;

    const url = "https://ecommerce-server-hrcv.onrender.com"

    console.log('Token used in API request:', token);


    const login = async (email, password, setLoading, setSuccess, setError ) => {
        const payload = { email, password };
        setLoading(true);
        try {
            const response = await axios.post(url + '/api/auth/login', payload, {
                headers: { 'Content-Type': 'application/json' }
            });

            if(response.status === 200){
            const { token, user } = response.data;
            sessionStorage.setItem('token', token);
            console.log('Token set in sessionStorage:', token);
            setUser(user);
            setToken(token);
            setSuccess(true);
            setError("");

            navigate('/home');

            } else if (response.status === 400){
                console.log(response.status)
                setError(response.status);    
            }
            
        } catch (e) {
            console.log(e.response.data)
            setError(e.response.data);
            setTimeout(() => {
                setError(null);
            }, 4000);
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


    const fetchUserData = async () => {
        // If there's a token set in the state, try to get the user data
        if (token) {
            const url = "https://ecommerce-server-hrcv.onrender.com";
            try {
                const response = await axios.get(`${url}/api/users/user`, {
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                // Set the user data on successful response
                console.log(response.data, "response context")
                setUser(response.data);
            } catch (e) {
                console.error('Failed to fetch user data:', e);
                 logout();
                // Handle failure to fetch user data (e.g., by logging out the user)
            }
        }
    };

    
     
 // useEffect hook to load the user data on component mount
 useEffect(() => {
    // Define a function to fetch user data
    const fetchUserData = async () => {
        // If there's a token set in the state, try to get the user data
        if (token) {
            const url = "https://ecommerce-server-hrcv.onrender.com";
            try {
                const response = await axios.get(`${url}/api/users/user`, {
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                // Set the user data on successful response
                console.log(response.data, "response context")
                setUser(response.data);
            } catch (e) {
                console.error('Failed to fetch user data:', e);
                 logout();
                // Handle failure to fetch user data (e.g., by logging out the user)
            }
        }
    };

fetchUserData();
}, [token]);

  return (
    <UserContext.Provider value={{user, token, login, logout, fetchUserData}}>{children}</UserContext.Provider>
  )
}

export default UserProvider