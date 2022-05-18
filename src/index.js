import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// function RenderApp() {
//   useEffect(() => {
//     console.log('rendered');
//   });
//   return (
//     <Router>
//      <App />
//     </Router>,
//   )
// }

// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<RenderApp />);