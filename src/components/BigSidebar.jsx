import {Logo} from './Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
import {NavLinks} from "./NavLinks.jsx";
import {useDashboardContext} from "../pages/DashboardLayout.jsx";

export const BigSidebar = () => {
    const {showSidebar} = useDashboardContext()
    return (
        <Wrapper>
            <div
                className={
                    showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
                }
            >
                <div className='content'>
                    <header>
                        <Logo/>
                    </header>
                    <NavLinks isBigSidebar/>
                </div>
            </div>
        </Wrapper>
    );
};