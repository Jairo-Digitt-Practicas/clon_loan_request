/** @format */

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const StepName = ({ handleDataChange, wizard }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName1, setLastName1] = useState("");
    const [lastName2, setLastName2] = useState("");

    useEffect(() => {
        if (wizard) {
            wizard.goToStep(1);
        }
    }, [wizard]);

    const handleSubmit = () => {
        handleDataChange({ firstName, lastName1, lastName2 });
        wizard.nextStep();
    };

    if (!wizard) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Full Name</h2>
            <input
                type='text'
                name='nombre'
                placeholder='Nombre'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type='text'
                name='primer apellido'
                placeholder='Primer Apellido'
                value={lastName1}
                onChange={(e) => setLastName1(e.target.value)}
            />
            <input
                type='text'
                name='segundo apellido'
                placeholder='Segundo Apellido'
                value={lastName2}
                onChange={(e) => setLastName2(e.target.value)}
            />
            <button onClick={handleSubmit}>Continuar</button>
        </div>
    );
};

StepName.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepName;
