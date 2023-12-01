import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouters from "./Routers/userRouters";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouters />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
