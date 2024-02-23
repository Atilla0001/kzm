import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Ekitap from './pages/Ekitap'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/> }></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/ekitap' element={<Ekitap></Ekitap>}></Route>
    </Routes>
    </BrowserRouter>
      
  

    </>
  )
}

export default App
