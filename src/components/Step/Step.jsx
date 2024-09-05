/** @format */

export const updateStepName = (StepName, StepCurp, StepPhone, StepEmail) => {
    const stepNumber = {
        FullName: 1,
        CURP: 2,
        PhoneNumber: 3,
        Email: 4,
        Confirmation: 5,
    }[(StepName, StepCurp, StepPhone, StepEmail)];

    if (stepNumber) {
        localStorage.setItem("lastCompletedStep", stepNumber);
    }

    console.log(`Último paso registrado en Substance:`, stepNumber);
};

export const saveUserData = (data) => {
    console.log(`Datos del usuario guardados en Substance:`, data);
};
