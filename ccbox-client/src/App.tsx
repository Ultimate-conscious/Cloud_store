import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/login"
import { SignupPage } from "./pages/signup"
import { LandingPage } from "./pages/landing"
import { UserDashboard } from "./pages/userDashboard"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signin" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/dashboard" element={<UserDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
