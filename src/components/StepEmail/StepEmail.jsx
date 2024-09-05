/** @format */

import PropTypes from "prop-types";
import useStore from "../store";
import { saveUserData } from "../api/index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
        <div>
            <h2>Ingresa tu Email {name}</h2>
            <TextField
                id='filled-basic'
                label='Correo electronico'
                variant='filled'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={wizard.previousStep}>Previous</button>
            <Button variant='contained' onClick={handleSubmit}>
                Contained
            </Button>
        </div>
    );
};

StepEmail.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepEmail;
