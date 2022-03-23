import logo from "./logo.svg";
import MocksDemo from "./MocksDemo";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MocksDemo />
      </header>
    </div>
  );
}
