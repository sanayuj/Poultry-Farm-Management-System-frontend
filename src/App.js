import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouters from "./Routers/userRouters";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouters />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
