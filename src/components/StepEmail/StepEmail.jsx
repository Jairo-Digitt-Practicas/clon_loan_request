/** @format */

import PropTypes from "prop-types";
import useStore from "../store";
import { saveUserData } from "../api/index";
import { useState } from "react";

const StepEmail = ({ handleDataChange, wizard }) => {
    const [email, setEmail] = useState("");
    const { name } = useStore();

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
            <input
                type='text'
                name='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={wizard.previousStep}>Previous</button>
            <button onClick={handleSubmit}>Next</button>
        </div>
    );
};

StepEmail.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepEmail;
