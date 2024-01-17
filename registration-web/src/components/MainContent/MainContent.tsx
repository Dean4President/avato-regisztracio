import { FunctionComponent } from 'preact';
import './MainContent.scss';
import { Outlet } from 'react-router-dom';

const MainContent: FunctionComponent = () => {
    
    return (
        <div className='main-content'>
            <div className='main-container scrollbar-style'>
                <Outlet />
            </div>
        </div>
    );
}

export default MainContent;