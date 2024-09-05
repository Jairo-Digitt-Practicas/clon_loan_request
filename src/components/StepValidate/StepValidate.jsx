/** @format */

import PropTypes from "prop-types";
import useStore from "../store";

const StepValidate = ({ wizard }) => {
    const { name, lastName, secondLastName, curp, phone, email } = useStore();

    if (!wizard) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{name} estas a un paso de recuperar tu libertad financiera</h2>
            <p>
                Nombre: {name} {lastName} {secondLastName}
            </p>
            <p>CURP: {curp}</p>
            <p>Número de Teléfono: {phone}</p>
            <p>Email: {email}</p>
            {wizard && <button onClick={wizard.previousStep}>Previous</button>}
            <button onClick={() => alert("Datos confirmados")}>
                Confirmar
            </button>
        </div>
    );
};

StepValidate.propTypes = {
    //userData: PropTypes.object.isRequired,
    wizard: PropTypes.object,
};

export default StepValidate;
