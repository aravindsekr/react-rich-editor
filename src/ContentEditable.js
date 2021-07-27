import { forwardRef } from "react";
import "./contenteditable.css";
import cn from "classnames";

const ContentEditable = forwardRef(
  ({ className, placeholder = "Default Text", editing }, ref) => {
    return (
      <div className={cn("contenteditable", className)}>
        {!editing && (
          <div className="contenteditable-placholder">{placeholder}</div>
        )}
        <div ref={ref} className="contenteditable-body" contentEditable />
      </div>
    );
  }
);

export default ContentEditable;
