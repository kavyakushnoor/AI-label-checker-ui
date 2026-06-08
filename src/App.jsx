import { useState } from "react";
import UploadBox from "./components/UploadBox";
import { analyzeLabel } from "./services/api";
import ResultCard from "./components/ResultCard";

export default function App() {

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const upload = async (file) => {

        console.log("UPLOAD STARTED");

        setLoading(true);
        setError(null);
        setResult(null);

        try {

            const data = await analyzeLabel(file);

            console.log("API RESULT:", data);

            setResult(data);

        } catch (err) {

            console.error(err);

            setError(err.message || "Upload failed");

        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 20 }}>

            <h1>Beverage Validator</h1>

            <UploadBox onUpload={upload} />

            {loading && (
                <div>
                <h3>
                    Analyzing Beverage Label...
                </h3>
                <p>
                    OCR → Extracting → Validating
                </p>
                </div>
                )}

            {error && (
                <div style={{ color: "red" }}>
                    Error: {error}
                </div>
            )}

            {result && (

   <ResultCard
      result={result}
   />
   )}
        </div>
    );
}