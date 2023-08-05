import Wrapper from '../assets/wrappers/Navbar';
import {FaAlignLeft} from 'react-icons/fa';
import {Logo} from './Logo';

import {useDashboardContext} from '../pages/DashboardLayout';
import {ThemeToggle} from "./ThemeToggle.jsx";
import {LogoutContainer} from "./LogoutContainer.jsx";

export const Navbar = () => {
    const {toggleSidebar} = useDashboardContext();
    return (
        <Wrapper>
            <div className='nav-center'>
                <button type='button' className='toggle-btn' onClick={toggleSidebar}>
                    <FaAlignLeft/>
                </button>
                <div>
                    <Logo/>
                    <h4 className='logo-text'>dashboard</h4>
                </div>
                <div className='btn-container'>
                    <ThemeToggle/>
                    <LogoutContainer/>
                </div>
            </div>
        </Wrapper>
    );
}