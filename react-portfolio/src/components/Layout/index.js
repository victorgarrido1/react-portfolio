import './index.scss';
import Sidebar from '../Sidebar'; // Import the missing Sidebar component

// boilerplate
const Layout = () => {
    return (
        <>
            <Sidebar /> {/* Add the missing closing tag for the Sidebar component */}
            {/* Add the missing closing tag for the JSX fragment */}
        </>
    );
};

export default Layout;

