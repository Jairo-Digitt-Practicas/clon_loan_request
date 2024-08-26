/** @format */

export const updateStepName = (stepName) => {
    const stepNumber = {
        FullName: 1,
        CURP: 2,
        PhoneNumber: 3,
        Email: 4,
        Confirmation: 5,
    }[stepName];

    if (stepNumber) {
        localStorage.setItem("lastCompletedStep", stepNumber);
    }

    console.log(`Último paso registrado en Substance:`, stepName);
};

export const saveUserData = (data) => {
    console.log(`Datos del usuario guardados en Substance:`, data);
};
