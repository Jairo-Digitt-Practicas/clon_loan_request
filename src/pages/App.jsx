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
import useStore from "../components/store/index.js";

const App = () => {
    const { saveAllUserData } = useStore();
    const [wizard, setWizard] = useState(null);

    const handleStepChange = (stepName) => {
        updateStepName(stepName);
    };

    const handleDataChange = (data) => {
        saveUserData(data);
        saveAllUserData(data);
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
                        handleDataChange={handleDataChange}
                        wizard={wizard}
                    />
                    <StepPhone
                        handleDataChange={handleDataChange}
                        wizard={wizard}
                    />
                    <StepEmail
                        handleDataChange={handleDataChange}
                        wizard={wizard}
                    />
                    <StepValidate wizard={wizard} />
                </StepWizard>
            </Container>
        </>
    );
};

export default App;
