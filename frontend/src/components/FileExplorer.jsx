import React from "react";

const FileExplorer = ({ files, onAddFile }) => {
  return (
    <div className="file-explorer">
      <h3>Files</h3>
      <ul>
        {files.map((f, idx) => (
          <li key={idx}>{f.name}</li>
        ))}
      </ul>
      <button onClick={onAddFile}>➕ Add File</button>
    </div>
  );
};

export default FileExplorer;
