import React from "react";

const FileManager = ({ files, setFiles, activeFile, setActiveFile }) => {
  const addFile = () => {
    const fileName = prompt("Enter file name (e.g., App.js)");
    if (!fileName) return;
    setFiles({ ...files, [fileName]: "// new file" });
  };

  const deleteFile = (fileName) => {
    const newFiles = { ...files };
    delete newFiles[fileName];
    setFiles(newFiles);
  };

  return (
    <div className="file-manager">
      <button onClick={addFile}>+ Add File</button>
      {Object.keys(files).map((file) => (
        <div
          key={file}
          className={file === activeFile ? "active" : ""}
          onClick={() => setActiveFile(file)}
        >
          {file}
          <button onClick={() => deleteFile(file)}>🗑️</button>
        </div>
      ))}
    </div>
  );
};

export default FileManager;
