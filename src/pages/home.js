import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header></Header>
                {/* Inner Link</> */}
                <Link to="/home"></Link>
                {/* Inner Links connected to each others active/and non-active</> */}
                <NavLink to="/home"></NavLink>

                <a href="https://www.youtube.com/"></a>
            <Footer/>
        </>
    );
}

export default Home;
