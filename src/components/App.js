import Main from "./Main.js";
import Create from "./Create.js";
import Popup from "./Popup.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/test-assignment/" 
          element={<Main />}
        />
        <Route
          path="/test-assignment/create"
          element={<Create />}
        />
      </Routes>
      <Popup
        isOpen={false}
        isError={true}
      />
    </>
  );
}

export default App;
