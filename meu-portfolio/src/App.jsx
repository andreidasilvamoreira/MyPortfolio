import About from './Components/AboutMe/About'
import Body from './Components/Body/Body'
import NavBar from './Components/NavBar/NavBar'
import Projects from './Components/SectionProject/Project'
import Skills from './Components/SectionSkills/Skills'

function App() {

  return (
    <>      
    <div className="div-pai-de-todos">
        <NavBar/>
        <Body/>
        <Projects/>
        <Skills/>
        <About/>
      </div> 
    </>
  )
}

export default App
