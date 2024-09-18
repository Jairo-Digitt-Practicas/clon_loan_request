/** @format */

import PropTypes from "prop-types";
import "../../../css/styles.css";
import Container from "@mui/material/Container";
import HeaderWA from "../WhatsApp/HeaderWA";
import Typography from "@mui/material/Typography";

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
                <Typography
                    className='MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways undefined MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textWhatsapp MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorWhatsapp MuiButton-root MuiButton-text MuiButton-textWhatsapp MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorWhatsapp button_button__qJ62_ header_option__10uf_ mui-style-1fzp4je'
                    href='https://api.whatsapp.com/send?phone=5215570055013&text=%C2%A1Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Digitt'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span className='MuiButton-icon MuiButton-startIcon MuiButton-iconSizeMedium mui-style-6xugel'>
                        <HeaderWA />
                    </span>
                    Ayuda
                </Typography>
            </Container>
        </header>
    );
};

Header.propTypes = {
    wizard: PropTypes.object.isRequired,
};

export default Header;
