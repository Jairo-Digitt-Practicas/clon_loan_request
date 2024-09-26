/** @format */

export const saveUserData = async (userData) => {
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    console.log("saveUserData", response);
    if (response.ok) {
        const data = await response.json();
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

export const getUserData = async (id, userData) => {
    console.log(id);
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    console.log("getUserData", response);
    if (response.ok) {
        const data = await response.json();
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
