import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import FooterCom from './components/FooterCom';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path='/create-post' element={<CreatePost/>} />
        </Route>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <FooterCom/>
    </BrowserRouter>
  )
}
