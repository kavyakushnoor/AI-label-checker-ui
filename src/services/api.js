import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function analyzeLabel(file) {

    if (!API_URL) {
        throw new Error("VITE_API_URL is not defined");
    }

    console.log("API_URL:", API_URL);

    const formData = new FormData();
    formData.append("file", file);

    const url = `${API_URL}/validate`;

    console.log("POST REQUEST:", url);

    try {
        const response = await axios.post(
            url,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        return response.data;

    } catch (err) {
        console.error("API ERROR:", err);
        throw err;
    }
}