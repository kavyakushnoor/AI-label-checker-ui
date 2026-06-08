import "./ResultCard.css";

export default function ResultCard({ result }) {

    const statusColor =
        result.status === "PASS"
            ? "success"
            : result.status === "WARNING"
            ? "warning"
            : "error";

    return (

        <div className="result-card">

            <div className={`status-banner ${statusColor}`}>

                {result.status === "PASS" && "✅ PASS"}

                {result.status === "WARNING" && "⚠️ WARNING"}

                {result.status === "FAIL" && "❌ FAIL"}

            </div>

            <h2>{result.filename}</h2>

            <div className="summary-grid">

                <div>

                    <strong>
                        Errors
                    </strong>

                    <p>
                        {result.summary?.error_count ?? 0}
                    </p>

                </div>

                <div>

                    <strong>
                        Warnings
                    </strong>

                    <p>
                        {result.summary?.warning_count ?? 0}
                    </p>

                </div>

                <div>

                    <strong>
                        Fields
                    </strong>

                    <p>
                        {result.summary?.field_count ?? 0}
                    </p>

                </div>

            </div>

            <section>

                <h3>Extracted Fields</h3>

                <div className="field-list">

                    {Object.entries(
                        result.fields || {}
                    ).map(

                        ([key, value]) => (

                            <div
                                className="field-row"
                                key={key}
                            >

                                <span>{key}</span>

                                <strong>
                                    {String(value)}
                                </strong>

                            </div>

                        )

                    )}

                </div>

            </section>

            {result.errors?.length > 0 && (

                <section>

                    <h3>Errors</h3>

                    <ul>

                        {result.errors.map(

                            (err, idx) => (

                                <li key={idx}>
                                    {err}
                                </li>

                            )

                        )}

                    </ul>

                </section>

            )}

            {result.warnings?.length > 0 && (

                <section>

                    <h3>Warnings</h3>

                    <ul>

                        {result.warnings.map(

                            (warn, idx) => (

                                <li key={idx}>
                                    {warn}
                                </li>

                            )

                        )}

                    </ul>

                </section>

            )}

            <section>

                <h3>OCR Preview</h3>

                <div className="ocr-box">

                    {result.ocr_preview}

                </div>

            </section>

        </div>

    );
}