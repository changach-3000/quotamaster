import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<LandingPage />}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
