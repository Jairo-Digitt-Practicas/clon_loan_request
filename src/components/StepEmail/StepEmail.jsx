/** @format */

import PropTypes from "prop-types";
import useStore from "../store";
import { saveUserData } from "../api/index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserAvatar from "../Avatar/Avatar";
import styles from "../StepName/inputs.module.scss";

const StepEmail = ({ handleDataChange, wizard }) => {
    const { name, email, setEmail } = useStore();

    const handleSubmit = () => {
        handleDataChange({ email });
        wizard.nextStep();
        saveUserData({ email });
        console.log(email);
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
                    <h2>Ingresa tu Email {name}</h2>
                </div>
            </div>

            <div className={styles.formulario}>
                <TextField
                    id='filled-basic'
                    label='Correo electronico'
                    variant='filled'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

StepEmail.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepEmail;
