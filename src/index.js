// Import default export
import greet from "./greet.js";

const name = "Subasri";
document.body.innerHTML = `
  <h1>${greet(name)}</h1>
  <p>This app runs using ES6 Modules!</p>
`;
