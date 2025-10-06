import greet from "./greet.js";

const name = "Subasri";
document.querySelector("#app").innerHTML = `
  <h1>${greet(name)}</h1>
  <p>This app runs using Vite bundler!</p>
`;
