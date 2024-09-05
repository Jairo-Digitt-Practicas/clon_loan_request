/** @format */
import "../../../css/styles.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Header = () => {
    return (
        <header className='header-header'>
            <Container fixed className='header-container'>
                <Button variant='contained'>Contained</Button>{" "}
                <a
                    className='logo-logo'
                    href='https://www.digitt.com/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <img
                        src='src\assets\logo.svg'
                        alt='Digitt Icon'
                        className='header-icon'
                    />
                </a>
                <a
                    href='https://api.whatsapp.com/send?phone=5215570055013&text=%C2%A1Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Digitt'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <WhatsAppIcon />
                </a>
            </Container>
        </header>
    );
};

export default Header;
