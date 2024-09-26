/** @format */

import PropTypes from "prop-types";
import "../../../css/styles.css";
import Container from "@mui/material/Container";
import HeaderWA from "../WhatsApp/HeaderWA";

const Header = ({ wizard }) => {
    if (!wizard) {
        return <div>Loading...</div>;
    }

    return (
        <header className='header-header'>
            <Container fixed className='header-container'>
                <button onClick={() => wizard.previousStep()}>Previous</button>
                <a
                    className='logo-logo'
                    href='https://www.digitt.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <img
                        src='src/assets/logo.svg'
                        alt='Digitt Icon'
                        className='header-icon'
                    />
                </a>
                <HeaderWA />
            </Container>
        </header>
    );
};

Header.propTypes = {
    wizard: PropTypes.object.isRequired,
};

export default Header;
