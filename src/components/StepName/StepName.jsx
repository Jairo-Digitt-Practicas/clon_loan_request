/** @format */
import { useEffect } from "react";
import PropTypes from "prop-types";
import { saveUserData } from "../api/index";
import useStore from "../store";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserAvatar from "../Avatar/Avatar";
import styles from "./inputs.module.scss";

const StepName = ({ handleDataChange, wizard }) => {
    const {
        name,
        setName,
        lastName,
        setLastName,
        secondLastName,
        setSecondLastName,
    } = useStore();

    useEffect(() => {
        if (wizard) {
            wizard.goToStep(1);
        }
    }, [wizard]);

    const handleSubmit = async () => {
        let [responseData] = await saveUserData({
            name,
            lastName,
            secondLastName,
        });
        console.log("verificando id del back", responseData);
        handleDataChange({
            name,
            lastName,
            secondLastName,
            id: responseData.id,
        });
        wizard.nextStep();
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
                    ¡Vamos a liberarte de deudas! Comencemos con tu nombre como
                    aparece en tu INE!
                </div>
            </div>

            <div className={styles.formulario}>
                <TextField
                    MuiInputBase-root
                    MuiFilledInput-root
                    MuiInputBase-colorPrimary
                    MuiInputBase-fullWidth
                    MuiInputBase-formControl
                    MuiInputBase-sizeSmall
                    mui-style-1nx0r9n
                    id='filled-basic'
                    label='Primer y segundo nombre'
                    variant='filled'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles["input-fullname"]}
                />
                <TextField
                    id='filled-basic'
                    label='Apellido paterno'
                    variant='filled'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={styles["input-fullname"]}
                />
                <TextField
                    id='filled-basic'
                    label='Apellido materno'
                    variant='filled'
                    value={secondLastName}
                    onChange={(e) => setSecondLastName(e.target.value)}
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

StepName.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepName;
