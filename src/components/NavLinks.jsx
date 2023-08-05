import {links} from '../utils/links';
import {NavLink} from 'react-router-dom';
import {useDashboardContext} from "../pages/DashboardLayout.jsx";

export const NavLinks = () => {
    const {toggleSidebar} = useDashboardContext();
    return (
        <div className='nav-links'>
            {links.map((link) => {
                const {text, path, icon} = link;
                // admin user
                return (
                    <NavLink
                        to={path}
                        key={text}
                        onClick={toggleSidebar}
                        className='nav-link'
                        end
                    >
                        <span className='icon'>{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </div>
    );
};
