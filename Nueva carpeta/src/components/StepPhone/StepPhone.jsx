/** @format */

import PropTypes from "prop-types";

const StepPhone = ({ userData, handleDataChange, wizard }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleDataChange({ [name]: value });
    };

    if (!wizard) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Número de Teléfono</h2>
            <p>
                Nombre: {userData.firstName} {userData.lastName1}{" "}
                {userData.lastName2}
            </p>
            <input
                type='text'
                name='phoneNumber'
                placeholder='phoneNumber'
                value={userData.phoneNumber}
                onChange={handleInputChange}
            />
            <button onClick={wizard.previousStep}>Previous</button>
            <button onClick={wizard.nextStep}>Next</button>
        </div>
    );
};

StepPhone.propTypes = {
    userData: PropTypes.object.isRequired,
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepPhone;
