const useSelection = () => {
  const blockquote = () => {
    const selObj = window.getSelection();
    const selRange = selObj.getRangeAt(0);
    const newNode = document.createElement("blockquote");
    selRange.surroundContents(newNode);
  };

  const bold = () => {
    const selObj = window.getSelection();
    const selRange = selObj.getRangeAt(0);
    const newNode = document.createElement("b");
    selRange.surroundContents(newNode);
  };

  const italic = () => {
    const selObj = window.getSelection();
    const selRange = selObj.getRangeAt(0);
    const newNode = document.createElement("i");
    selRange.surroundContents(newNode);
  };

  const underline = () => {
    const selObj = window.getSelection();
    const selRange = selObj.getRangeAt(0);
    const newNode = document.createElement("u");
    selRange.surroundContents(newNode);
  };

  return [blockquote, bold, italic, underline];
};

export default useSelection;
