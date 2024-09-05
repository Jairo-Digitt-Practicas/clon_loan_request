/** @format */
import { useEffect } from "react";
import PropTypes from "prop-types";
import { saveUserData } from "../api/index";
import useStore from "../store";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import "../../../css/styles.css";

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

    const handleSubmit = () => {
        handleDataChange({ name, lastName, secondLastName });
        wizard.nextStep();
        saveUserData({ name, lastName, secondLastName });
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
                            <Avatar
                                alt='Remy Sharp'
                                src='/static/images/avatar/1.jpg'
                            />
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

            <div className='formulario'>
                <TextField
                    id='filled-basic'
                    label='Primer y segundo nombre'
                    variant='filled'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='input-fullname'
                />
                <TextField
                    id='filled-basic'
                    label='Apellido paterno'
                    variant='filled'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='input-fullname'
                />
                <TextField
                    id='filled-basic'
                    label='Apellido materno'
                    variant='filled'
                    value={secondLastName}
                    onChange={(e) => setSecondLastName(e.target.value)}
                    className='input-fullname'
                />
                <Button
                    className='formulario-botton'
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
