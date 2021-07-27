# React Text Editor - medium like UI editor

- Add a Title
- Add a excerpt / intro text
- Add intro image from unsplash searchable
- Add a body with images

## Editor Text style support

- Bold, italic, underline, blockquote, section title styles for the text

## Title

- No styles for title text

  useEffect(() => {
  if (titleRef && titleRef.current) {
  const observer = new window.MutationObserver((e) => {
  // Do something on change
  window.console.log(" change event ", e);
  });

      observer.observe(titleRef.current, {
        childList: true,
        subtree: true,
        characterData: true
      });

  }
  }, [titleRef]);
