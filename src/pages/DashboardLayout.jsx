import {Outlet} from 'react-router-dom';

import Wrapper from '../assets/wrappers/Dashboard';
import {Navbar, BigSidebar, SmallSidebar} from '../components';
import {createContext, useContext, useState} from "react";

const DashboardContext = createContext({});

export const DashboardLayout = ({isDarkThemeEnabled}) => {
    const user = {
        name: "John Doe",
    }

    const [showSidebar, setShowSidebar] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled)

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)

        document.body.classList.toggle('dark-theme', newDarkTheme)
        localStorage.setItem('dark-theme', newDarkTheme)
    }
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const logoutUser = () => {
        console.log("logoutUser")
    }
    return (
        <DashboardContext.Provider
            value={{
                user,
                showSidebar,
                isDarkTheme,
                toggleDarkTheme,
                toggleSidebar,
                logoutUser,
            }}
        >
            <Wrapper>
                <main className='dashboard'>
                    <SmallSidebar/>
                    <BigSidebar/>
                    <div>
                        <Navbar/>
                        <div className='dashboard-page'>
                            <Outlet/>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext)