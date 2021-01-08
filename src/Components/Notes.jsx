import React from "react";

function Notes() {
  return (
    <p>
      Notes: because of Pascal casing, (every word capitalized), JSX can
      differentiate between the elements we essentially create, (the
      components), and the HTML elements we are used to, (div, h1, etc.). Also,
      the heading element we created does not need the second listing it can be
      self-closing since it does not have children. This is the convention.
      Additional note; our function is moved to our newly created Heading.jsx
      file; it will still work if you leave it here, but it defeats the purpose
      as reusable components and brevity are the main reason we want to import
      our components to begin with.
    </p>
  );
}

export default Notes;
