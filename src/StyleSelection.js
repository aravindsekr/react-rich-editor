import useSelection from "./use-selection";

const StyleSelection = () => {
  const [blockquote, bold, italic, underline] = useSelection();

  return (
    <div>
      <button onClick={bold}>Bold</button>
      <button onClick={italic}>Italic</button>
      <button onClick={underline}>Underline</button>
      <button onClick={blockquote}>Quote</button>
    </div>
  );
};

export default StyleSelection;
