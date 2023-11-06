import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./pages/Counter"
import Counter2 from "./pages/Counter"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ToDoList from './pages/ToDoList'
import ContactForm from "./pages/ContactForm"
import ContactDetails from './pages/ContactDetails'
import GithubApp from './pages/GithubApp'
import Layout from "./components/Layout"





function App() {
 return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<Layout/>}>
     <Route index element={<Counter/>}></Route>
     <Route path="/todo-list" element={<ToDoList/>}></Route>
     <Route path="/contact-form" element={<ContactForm/>}></Route>
     <Route path="/contact-form/:name" element={<ContactDetails/>}></Route>
     <Route path="/github-app" element={<GithubApp/>}></Route>
     </Route>
</Routes>
</BrowserRouter>
 )
}

export default App
