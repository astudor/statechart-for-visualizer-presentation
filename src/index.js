import { sc as statechartPresentation } from "./app/app";
import "./main.css";

console.log(statechartPresentation);
document.write(
  `<h1>You can make a state machine out of following code, at https://xstate.js.org/viz/</h1>
  <code>
    ${JSON.stringify(statechartPresentation)}
  </code>`
);
