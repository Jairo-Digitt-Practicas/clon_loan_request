/** @format */

import { useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import StepName from "../components/StepName/StepName.jsx";
import StepCurp from "../components/StepCurp/StepCurp.jsx";
import StepPhone from "../components/StepPhone/StepPhone.jsx";
import StepEmail from "../components/StepEmail/StepEmail.jsx";
import StepValidate from "../components/StepValidate/StepValidate.jsx";
import { updateStepName, saveUserData } from "../components/Step/Step.jsx";

const App = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName1: "",
        lastName2: "",
        course: "",
        phoneNumber: "",
        email: "",
    });
    const [wizard, setWizard] = useState(null);

    useEffect(() => {
        if (wizard) {
            const lastStep = getLastCompletedStep();
            wizard.goToStep(lastStep);
        }
    }, [wizard]);

    const handleStepChange = (stepName) => {
        updateStepName(stepName);
    };

    const handleDataChange = (data) => {
        setUserData((prevData) => ({ ...prevData, ...data }));
        saveUserData(data);
    };

    return (
        <StepWizard instance={setWizard} onStepChange={handleStepChange}>
            <StepName handleDataChange={handleDataChange} wizard={wizard} />
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
    );
};
const getLastCompletedStep = () => {
    const lastStep = localStorage.getItem("lastCompletedStep");
    return lastStep ? parseInt(lastStep, 10) : 1;
};

export default App;
