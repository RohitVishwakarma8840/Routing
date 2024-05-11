import { BrowserRouter,Routes, Route } from 'react-router-dom'
import React from 'react'
import Homepage from './Components/Home'
import Teachers from './Components/Teachers'

const App = () => {
  return (
<BrowserRouter> 
<Routes>

{/* <Route path="/" element={<h1>Hello Rohit to this main page </h1>}/> */}
<Route path="/" element={<Homepage/> }/>
<Route path="/teachers" element={<Teachers/>}/>
<Route path="/test" element={<h1>Hello Test</h1>} />
<Route path="/contact-us" element={<h1>Hello from contact</h1>} />
<Route path="/about" element={<h1>Hello from about us </h1>} />
<Route path="/login" element={<h1>Welcome to login</h1>} />


</Routes>
</BrowserRouter>
  )
}

export default App
