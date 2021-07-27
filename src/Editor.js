import { useRef } from "react";
import useContentEditable from "./use-contenteditable";
import ContentEditable from "./ContentEditable";
import StyleSelection from "./StyleSelection";

import "./editor.css";

const Editor = () => {
  const tileEditableRef = useRef();
  const bodyEditableRef = useRef();

  const [titleEditing, titleValue] = useContentEditable({
    ref: tileEditableRef
  });

  const [bodyEditing, bodyValue] = useContentEditable({
    ref: bodyEditableRef
  });

  const save = () => {
    const result = {
      titleValue: titleValue(),
      bodyValue: bodyValue()
    };

    window.console.log(" result ", JSON.stringify(result));
  };

  return (
    <div className="editor">
      <StyleSelection />

      <ContentEditable
        className="editor-title"
        placeholder={"Your title"}
        editing={titleEditing}
        ref={tileEditableRef}
      />
      <ContentEditable
        className="editor-body"
        placeholder={"Your content"}
        editing={bodyEditing}
        ref={bodyEditableRef}
      />

      <button onClick={save}>Save your post</button>
    </div>
  );
};

export default Editor;
