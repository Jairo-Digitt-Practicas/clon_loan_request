/** @format */

import { useState } from "react";
import StepWizard from "react-step-wizard";
import StepName from "../components/StepName/StepName.jsx";
import StepCurp from "../components/StepCurp/StepCurp.jsx";
import StepPhone from "../components/StepPhone/StepPhone.jsx";
import StepEmail from "../components/StepEmail/StepEmail.jsx";
import StepValidate from "../components/StepValidate/StepValidate.jsx";
import { updateStepName, saveUserData } from "../components/Step/Step.jsx";
import Container from "@mui/material/Container";
import "../../css/styles.css";
import Header from "../components/Header/Header.jsx";

const App = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName1: "",
        lastName2: "",
        curp: "",
        phone: "",
        email: "",
    });
    const [wizard, setWizard] = useState(null);

    const handleStepChange = (stepName) => {
        updateStepName(stepName);
    };

    const handleDataChange = (data) => {
        setUserData((prevData) => ({ ...prevData, ...data }));
        saveUserData(data);
    };

    return (
        <>
            <Header wizard={wizard} /> {/* Pasar el wizard aquí */}
            <Container fixed>
                <StepWizard
                    instance={setWizard}
                    onStepChange={handleStepChange}>
                    <StepName
                        handleDataChange={handleDataChange}
                        wizard={wizard}
                    />
                    <StepCurp
                        userData={userData}
                        handleDataChange={handleDataChange}
                        wizard={wizard}
                    />
                    <StepPhone
                        userData={userData}
                        handleDataChange={handleDataChange}
                        wizard={wizard}
                    />
                    <StepEmail
                        userData={userData}
                        handleDataChange={handleDataChange}
                        wizard={wizard}
                    />
                    <StepValidate userData={userData} wizard={wizard} />
                </StepWizard>
            </Container>
        </>
    );
};

export default App;
