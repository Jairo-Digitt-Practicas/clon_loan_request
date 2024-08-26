/** @format */

import PropTypes from "prop-types";
import useStore from "../store";
import { saveUserData } from "../api/index";
import { useState } from "react";

const StepCurp = ({ handleDataChange, wizard }) => {
    const [curp, setCurp] = useState("");
    const { name } = useStore();

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
            <h2>Ingresa tu CURP</h2>
            <p>Nombre: {name}</p>
            <input
                type='text'
                name='curp'
                placeholder='curp'
                value={curp}
                onChange={(e) => setCurp(e.target.value)}
            />
            <button onClick={wizard.previousStep}>Previous</button>
            <button onClick={handleSubmit}>Next</button>
        </div>
    );
};

StepCurp.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepCurp;
