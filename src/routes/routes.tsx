import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { Principal } from "../pages/principal/Principal";
import { Signin } from "../pages/signin/Signin";
import { PsicologosRegister } from "../pages/signupPsicologo/SignupPsicologo";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<PsicologosRegister />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/principal" element={<Principal />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
