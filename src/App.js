import { createContext, useContext, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Test from "./hooksConcepts/Test";
import projectContext from "./ProjectContext";
import ReduxExample from "./redux";
import TestRoutes from "./TestRoutes";
import User from "./User";

function App() {
  const [count, setCount] = useState(5);

  return (
    <div className="Test">
      <ReduxExample />
    </div>
  );
}

export default App;
