import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

const Editor = ({ files }) => {
  const sandpackFiles = {};
  files.forEach((f) => {
    sandpackFiles[`/${f.name}`] = { code: f.content };
  });

  return (
    <div className="editor-container">
      <Sandpack
        template="react"
        files={sandpackFiles}
        options={{
          editorHeight: "80vh",
          showNavigator: true,
          showLineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
