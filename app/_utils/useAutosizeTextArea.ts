"use client";

import React, { useEffect } from "react";

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
  newCommentInput: HTMLTextAreaElement | null,
  newComment: string
) => {
  useEffect(() => {
    if (newCommentInput) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      // console.log(newCommentInput.style.height);
      // console.log(newCommentInput.scrollHeight);
      newCommentInput.style.height = "0px";
      const scrollHeight = newCommentInput.scrollHeight;
      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      newCommentInput.style.height = scrollHeight + "px";
    }
  }, [newCommentInput, newComment]);
};

export default useAutosizeTextArea;
