import { use } from "react";
import { createFromFetch } from "react-server-dom-webpack/client";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<Root />);

const cache = new Map();

function Root() {
  let content = cache.get("home");
  if (!content) {
    content = createFromFetch(fetch("/react"));
    cache.set("home", content);
  }

  return (
    <>
      {use(content)}
    </>
  );
}
