/** @format */

import PropTypes from "prop-types";
import useStore from "../store";
import { saveUserData } from "../api/index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const StepCurp = ({ handleDataChange, wizard }) => {
    const { name, curp, setCurp } = useStore();

    const handleSubmit = () => {
        handleDataChange({ curp });
        wizard.nextStep();
        saveUserData({ curp });
        console.log(curp);
    };

    if (!wizard) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>¡Gracias, {name}! Ahora compárteme tu CURP</h2>
            <TextField
                id='filled-basic'
                label='Curp'
                variant='filled'
                value={curp}
                onChange={(e) => setCurp(e.target.value)}
            />
            <button onClick={wizard.previousStep}>Previous</button>
            <Button variant='contained' onClick={handleSubmit}>
                Contained
            </Button>
        </div>
    );
};

StepCurp.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepCurp;
