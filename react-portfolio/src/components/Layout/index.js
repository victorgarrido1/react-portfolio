import './index.scss';
import Sidebar from '../Sidebar'; // Import the missing Sidebar component

// boilerplate
const Layout = () => {
    return (
        <div className="App">
            <Sidebar /> {/* Add the missing closing tag for the Sidebar component */}
            {/* Add the missing closing tag for the JSX fragment */}
            </div>
        //continue here VICTORR!
    );
};

export default Layout;

