/** @format */

import PropTypes from "prop-types";
import useStore from "../store";
import { saveUserData } from "../api/index";
import { useState } from "react";

const StepPhone = ({ handleDataChange, wizard }) => {
    const [phone, setPhone] = useState("");
    const { name } = useStore();

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
            <h2>Número de Teléfono {name}</h2>
            <input
                type='text'
                name='phone'
                placeholder='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={wizard.previousStep}>Previous</button>
            <button onClick={handleSubmit}>Next</button>
        </div>
    );
};

StepPhone.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepPhone;
