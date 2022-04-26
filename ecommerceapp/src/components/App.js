import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Register from '../routes/Register/Register';
import Login from "../routes/Login/Login";

import {checkLoginStatus} from '../store/auth/Auth.actions';
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const isLoggedIn = async () => {
            await dispatch(checkLoginStatus());
            console.log('Logging in...')
        }
        isLoggedIn().catch(console.error);
    }, [dispatch]);

    return (
        <div>
            <h1>hello</h1>
            <Router>
                <Routes>
                    <Route path="/register" element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;