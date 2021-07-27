import { useState, useEffect } from "react";

const UseContentEditable = ({ ref }) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (ref && ref.current) {
      const observer = new window.MutationObserver((e) => {
        if (ref.current.innerHTML) {
          setEditing(true);
        } else {
          setEditing(false);
        }
      });

      observer.observe(ref.current, {
        childList: true,
        subtree: true,
        characterData: true
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  const value = () => ref && ref.current && ref.current.innerHTML;

  return [editing, value];
};

export default UseContentEditable;
