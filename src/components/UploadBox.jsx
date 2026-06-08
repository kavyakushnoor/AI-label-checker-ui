import { useDropzone } from "react-dropzone";

export default function UploadBox({ onUpload }) {

    const { getRootProps, getInputProps } = useDropzone({

        accept: { "image/*": [] },

        multiple: false,

        onDrop: (files) => {

            console.log("DROP:", files);

            if (files && files[0]) {
                onUpload(files[0]);
            }
        }

    });

    return (
        <div {...getRootProps()} style={{
            border: "2px dashed gray",
            padding: 40,
            textAlign: "center",
            cursor: "pointer"
        }}>

            <input {...getInputProps()} />

            <p>Drop image or click to upload</p>

        </div>
    );
}