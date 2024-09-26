/** @format */

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./WhatsApp.module.scss";

const HeaderWA = () => {
    return (
        <div className={styles.WhatsApp}>
            <Button variant='text'>
                <Typography
                    className='MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways undefined MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textWhatsapp MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorWhatsapp MuiButton-root MuiButton-text MuiButton-textWhatsapp MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorWhatsapp button_button__qJ62_ header_option__10uf_ mui-style-1fzp4je'
                    href='https://api.whatsapp.com/send?phone=5215570055013&text=%C2%A1Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Digitt'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span>
                        <WhatsAppIcon className={styles["icon"]} />
                    </span>
                    Ayuda
                </Typography>
            </Button>
        </div>
    );
};

export default HeaderWA;
