import React, { useState } from "react";
import Editor from "../components/Editor";
import FileExplorer from "../components/FileExplorer";

const Home = () => {
  const [files, setFiles] = useState([
    { name: "App.js", content: "export default function App() { return <h1>Hello CipherStudio!</h1> }" },
    { name: "index.js", content: "import ReactDOM from 'react-dom/client'; import App from './App'; const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<App />);" },
  ]);

  const addFile = () => {
    const name = prompt("Enter new file name:");
    if (name) setFiles([...files, { name, content: "// new file" }]);
  };

  return (
    <div className="home-container">
      <FileExplorer files={files} onAddFile={addFile} />
      <Editor files={files} />
    </div>
  );
};

export default Home;
