import { useState } from "react";
import api from "../services/api";

function UploadMeeting() {

  const [file, setFile] = useState(null);

  const uploadMeeting = async () => {

    const formData = new FormData();
    formData.append("file", file);

    try {

      const response = await api.post("/meetings/upload", formData);

      console.log(response.data);

    } catch(error) {
      console.log("Upload failed");
    }

  };

  return (
    <div>

      <h1>Upload Meeting</h1>

      <input
        type="file"
        onChange={(e)=>setFile(e.target.files[0])}
      />

      <button onClick={uploadMeeting}>
        Upload
      </button>

    </div>
  );
}

export default UploadMeeting;