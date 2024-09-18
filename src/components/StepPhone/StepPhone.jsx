/** @format */

import PropTypes from "prop-types";
import useStore from "../store";
import { saveUserData } from "../api/index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserAvatar from "../Avatar/Avatar";
import styles from "../StepName/inputs.module.scss";

const StepPhone = ({ handleDataChange, wizard }) => {
    const { name, phone, setPhone } = useStore();

    const handleSubmit = () => {
        handleDataChange({ phone });
        wizard.nextStep();
        saveUserData({ phone });
        console.log(phone);
    };

    if (!wizard) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='chat_complete'>
                <div className='chat_avatar'>
                    <div>
                        <div>
                            <UserAvatar />
                        </div>
                        <span className='chat_status__mJcIB'></span>
                    </div>
                    <strong className='chat_name__STuji'>Diana</strong>
                </div>
                <div className='chat_title'>
                    <h2>Ingresa tu número de teléfono {name}</h2>
                </div>
            </div>

            <div className={styles.formulario}>
                <TextField
                    id='filled-basic'
                    label='Phone'
                    variant='filled'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles["input-fullname"]}
                />
                <Button
                    className={styles["formulario-botton"]}
                    variant='contained'
                    onClick={handleSubmit}>
                    Contained
                </Button>
            </div>
        </>
    );
};

StepPhone.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepPhone;
