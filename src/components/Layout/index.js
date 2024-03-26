import { Outlet } from 'react-router-dom';
import './index.scss';
import Sidebar from '../Sidebar';
// Import the missing Sidebar component //done 1/2


// boilerplate
const Layout = () => {
    return (
        <div className="App">
            <Sidebar /> 
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Outlet/>
                <span className='tags bottom-tags'>
                    &lt;/body</span>
                    <br/>
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
              
            </div>
            </div>
     
    );
};

export default Layout;

