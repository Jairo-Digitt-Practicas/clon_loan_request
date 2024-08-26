/** @format */

import PropTypes from "prop-types";

const StepCurp = ({ userData, handleDataChange, wizard }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleDataChange({ [name]: value });
    };

    if (!wizard) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>CURP</h2>
            <p>
                Nombre: {userData.firstName} {userData.lastName1}{" "}
                {userData.lastName2}
            </p>
            <input
                type='text'
                name='curp'
                placeholder='curp'
                value={userData.CURP}
                onChange={handleInputChange}
            />
            <button onClick={wizard.previousStep}>Previous</button>
            <button onClick={wizard.nextStep}>Next</button>
        </div>
    );
};

StepCurp.propTypes = {
    userData: PropTypes.object.isRequired,
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepCurp;
