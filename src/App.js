import { Route, Routes } from "react-router-dom";
import ForgotPass from "./views/forgotpass";
import Homepage from "./views/homepage";
import Login from "./views/login";
import Register from "./views/registtrationpage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordreset" element={<ForgotPass />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </>
  );
}

function Vrushabh() {
  return (
    <div>
      <div>Goodmorning India</div>
    </div>
  );
}
