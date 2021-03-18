import * as React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Nav from "../components/nav";
import Interests from "../components/interests";
import Projects from "../components/projects";
import Contact from "../components/contact";


import "../styles/global.scss";


// markup
const IndexPage = () => {
  return (
    <main className="container mt-4 mx-auto px-4 xl:px-48 app__main" >
      <title>Home Page</title>
      
      <Nav/>
      <Hero/>
      <About />
      <Interests/>
      <Projects/>
      <Contact />


      
     


      
      
      
        
      
      
    </main>
  )
}

export default IndexPage
