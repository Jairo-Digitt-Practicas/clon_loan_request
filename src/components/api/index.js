/** @format */

export const saveUserData = async (userData) => {
    const response = await fetch("http://localhost:3001/user", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    console.log("saveUserData", response);
    if (response.ok) {
        const data = response.json();
        console.log("respuesta OK", data);
        return data;
    } else {
        console.error(
            "error en la respuesta:",
            response.status,
            response.statusText
        );
    }
};
