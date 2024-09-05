/** @format */

import PropTypes from "prop-types";
import useStore from "../store";
import { saveUserData } from "../api/index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
        <div>
            <h2>Ingresa tu número de teléfono {name}</h2>
            <TextField
                id='filled-basic'
                label='Phone'
                variant='filled'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={wizard.previousStep}>Previous</button>
            <Button variant='contained' onClick={handleSubmit}>
                Contained
            </Button>
        </div>
    );
};

StepPhone.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepPhone;
