import { BrowserRouter,Routes, Route } from 'react-router-dom'
import React from 'react'
import Homepage from './Components/Home'
import Teachers from './Components/Teachers'
import NotFound from './Components/NotFound'
import Contact from './Components/Contact'
import About from './Components/About'

const App = () => {
  return (
<BrowserRouter> 
<Routes>

{/* <Route path="/" element={<h1>Hello Rohit to this main page </h1>}/> */}
<Route path="/" element={<Homepage/> }/>
<Route path="/teachers" element={<Teachers/>}/>
<Route path="/test" element={<h1>Hello Test</h1>} />
{/* <Route path="/contact-us" element={<Contact/>} /> */}
<Route path="/contact" element={<Contact />} />


<Route path="/about" element={<About/>} />
<Route path="/login" element={<h1>Welcome to login</h1>} />
<Route path="*" element ={<NotFound/>}/>


</Routes>
</BrowserRouter>
  )
}

export default App
