/** @format */

import PropTypes from "prop-types";

const StepValidate = ({ userData, wizard }) => {
    return (
        <div>
            <h2>Confirmación</h2>
            <p>
                Nombre: {userData.firstName} {userData.lastName1}{" "}
                {userData.lastName2}
            </p>
            <p>CURP: {userData.curp}</p>
            <p>Número de Teléfono: {userData.phone}</p>
            <p>Email: {userData.email}</p>
            {wizard && <button onClick={wizard.previousStep}>Previous</button>}
            <button onClick={() => alert("Datos confirmados")}>
                Confirmar
            </button>
        </div>
    );
};

StepValidate.propTypes = {
    userData: PropTypes.object.isRequired,
    wizard: PropTypes.object,
};

export default StepValidate;
