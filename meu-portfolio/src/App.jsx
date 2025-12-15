import About from './Components/AboutMe/About'
import Body from './Components/Body/Body'
import { Contato } from './Components/Contact/Contato'
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
        <Contato/>
      </div> 
    </>
  )
}

export default App
