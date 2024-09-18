/** @format */

import PropTypes from "prop-types";
import useStore from "../store";
import Button from "@mui/material/Button";
import UserAvatar from "../Avatar/Avatar";
import styles from "../StepName/inputs.module.scss";

const StepValidate = ({ wizard }) => {
    const { name, lastName, secondLastName, curp, phone, email } = useStore();

    if (!wizard) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='chat_complete'>
                <div className='chat_avatar'>
                    <div>
                        <div>
                            <UserAvatar />
                        </div>
                        <span className='chat_status__mJcIB'></span>
                    </div>
                    <strong className='chat_name__STuji'>Diana</strong>
                </div>
                <div className='chat_title'>
                    <h2>
                        {name} estas a un paso de recuperar tu libertad
                        financiera
                    </h2>
                </div>
            </div>

            <div className={styles.formulario}>
                <p>
                    Nombre: {name} {lastName} {secondLastName}
                </p>
                <p>CURP: {curp}</p>
                <p>Número de Teléfono: {phone}</p>
                <p>Email: {email}</p>
                {wizard && (
                    <button onClick={wizard.previousStep}>Previous</button>
                )}

                <Button
                    className={styles["formulario-botton"]}
                    variant='contained'
                    onClick={() => alert("Datos confirmados")}>
                    Confirmar
                </Button>
            </div>
        </>
    );
};

StepValidate.propTypes = {
    wizard: PropTypes.object,
};

export default StepValidate;
