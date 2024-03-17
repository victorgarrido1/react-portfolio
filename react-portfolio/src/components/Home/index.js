import LogoTitle from '../../assets/images/logo-s.png'; // Add missing import statement for React

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm</h1> {/* Fix syntax error */}
                <img src={LogoTitle} alt="developer" /> {/* Use the imported LogoTitle */}
            </div>
        </div> 
    );
}

export default Home