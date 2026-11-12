
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import History from './pages/History'
import Home from './pages/Home'
import Steps from './pages/Steps'
import Userform from './pages/Userform'
import ViewResume from './pages/ViewResume'
import Pnf from './pages/Pnf'


function App() {


  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Steps' element={<Steps />} />
        <Route path='/History' element={<History />} />
        <Route path='/Userform' element={<Userform />} />
        <Route path='/view/:id' element={<ViewResume />} />
        <Route path='/*' element={<Pnf />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
