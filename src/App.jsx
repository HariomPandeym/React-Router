import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Support from './components/Support'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Notfound from './components/Notfound'
import MainIndex from './components/MainIndex'

function App() {
  const [count, setCount] = useState(0)

  // function handler(event)
  // {
  //   console.log(event.target)
  // }
  

  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
        <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
        <NavLink to={'/support'}>Support</NavLink>
        </li>
        <li>
        <NavLink to={'/contact'}>Contact</NavLink>
        </li>
        <li>
        <NavLink to={'/*'}>not found</NavLink>
        </li>
      </ul>
    </nav>
      <Routes>
      <Route path='/'  element={<MainIndex/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/support' element={<Support/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/*' element={<Notfound/>} />
        </Route>
        

        
      </Routes>
    </>
  )
}

export default App
