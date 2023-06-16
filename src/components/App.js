import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { DataContext } from "../context/DataContext";

import Main from "./Main.js";
import Create from "./Create.js";
import Popup from "./Popup.js";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function App() {
  const [formData, setFormData] = useState({
    phone: "+7 915 305-64-45",
    email: "tamarafr@ntsuzova.ru",
  });
  
  return (
    <DataContext.Provider value={{formData, setFormData}}>
      <Routes>
        <Route path="/test-assignment/" element={<Main />} />
        <Route
          path="/test-assignment/create/"
          element={
            <Create>
              <Step1 />
            </Create>
          }
        />
        <Route
          path="/test-assignment/create/step2"
          element={
            <Create>
              <Step2 />
            </Create>
          }
        />
        <Route
          path="/test-assignment/create/step3"
          element={
            <Create>
              <Step3 />
            </Create>
          }
        />
      </Routes>
      <Popup isOpen={false} isError={true} />
    </DataContext.Provider>
  );
}

export default App;
