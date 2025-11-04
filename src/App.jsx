import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout.jsx'
import Home from '../index.jsx'
import Projects from '../project.jsx'
import Services from '../services.jsx'
import Contact from '../contact.jsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App