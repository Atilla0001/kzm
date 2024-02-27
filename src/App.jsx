import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Ekitap from './pages/e-kitap/Ekitap'
import Kurumsal from './pages/kurumsal/Kurumsal'
import Blog from './pages/blog/Blog'
import Guncel from './pages/guncel/Guncel'
import Egitimler from './pages/egitimler/Egitimler'
import İletisim from './pages/iletisim/İletisim'
import EducationPage from './pages/educationPage/EducationPage'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/> }></Route>
      <Route path='educationPage' element={<EducationPage/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/ekitap' element={<Ekitap></Ekitap>}></Route>
      <Route path='/kurumsal' element={<Kurumsal/>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/guncel' element={<Guncel/>}></Route>
      <Route path='/egitimler' element={<Egitimler/>}></Route>
      <Route path='/iletisim' element={<İletisim/>}></Route>



    </Routes>
    </BrowserRouter>
      
  

    </>
  )
}

export default App
