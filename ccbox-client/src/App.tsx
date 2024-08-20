import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/login"
import { SignupPage } from "./pages/signup"
import { LandingPage } from "./pages/landing"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signin" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
