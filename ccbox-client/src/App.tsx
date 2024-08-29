import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SigninPage } from "./pages/signin"
import { SignupPage } from "./pages/signup"
import { LandingPage } from "./pages/landing"
import { UserDashboard } from "./pages/userDashboard"
import { RecoilRoot } from "recoil"
import { UploadFile } from "./pages/uploadFile"



function App() {

  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/signin" element={<SigninPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/dashboard/:folderId" element={<UserDashboard/>}/>
            <Route path="/tp" element={<UploadFile/>}/>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
