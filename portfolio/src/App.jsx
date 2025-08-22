import { Route } from "react-router-dom"
import { BrowserRouter, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/home";



function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    
       </>
  )
}

export default App
