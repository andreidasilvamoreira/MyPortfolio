import About from '../Features/about/About'
import Body from '../Features/Body/Body'
import { Contato } from '../Features/contact/Contato'
import NavBar from '../Features/navbar/NavBar'
import Projects from '../Features/projects/Project'
import Skills from '../Features/skills/Skills'

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
