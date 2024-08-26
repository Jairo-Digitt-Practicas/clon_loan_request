/** @format */

import PropTypes from "prop-types";

const StepEmail = ({ userData, handleDataChange, wizard }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleDataChange({ [name]: value });
    };

    if (!wizard) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Email</h2>
            <input
                type='email'
                name='email'
                placeholder='Email'
                value={userData.email}
                onChange={handleInputChange}
            />
            <button onClick={wizard.previousStep}>Previous</button>
            <button onClick={wizard.nextStep}>Next</button>
        </div>
    );
};

StepEmail.propTypes = {
    userData: PropTypes.object.isRequired,
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepEmail;
