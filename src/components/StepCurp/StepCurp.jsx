/** @format */

import PropTypes from "prop-types";
import useStore from "../store";
import { getUserData } from "../api/index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserAvatar from "../Avatar/Avatar";
import styles from "../StepName/inputs.module.scss";

const StepCurp = ({ handleDataChange, wizard }) => {
    const { name, curp, setCurp, id } = useStore();

    const handleSubmit = () => {
        console.log(curp, id);
        getUserData(curp, id);
        handleDataChange({ curp, id });
        console.log(curp);
        wizard.nextStep();
    };

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
                    <h2>¡Gracias, {name}! Ahora compárteme tu CURP</h2>
                </div>
            </div>

            <div className={styles.formulario}>
                <TextField
                    id='filled-basic'
                    label='Curp'
                    variant='filled'
                    value={curp}
                    onChange={(e) => setCurp(e.target.value)}
                    className={styles["input-fullname"]}
                />
                <Button
                    className={styles["formulario-botton"]}
                    variant='contained'
                    onClick={handleSubmit}>
                    Contained
                </Button>
            </div>
        </>
    );
};
StepCurp.propTypes = {
    handleDataChange: PropTypes.func.isRequired,
    wizard: PropTypes.object,
};

export default StepCurp;
