
import './App.css'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import SectionMain1 from './components/sectionMain1.jsx'
import SectionMain2 from './components/sectionMain2.jsx'
import SectionMain3 from './components/mainSection3.jsx'

function App() {
  return (
    <>
      <Header/>
      <main>
        <SectionMain1/>
        <SectionMain2/>
        <SectionMain3/>
      </main>
      < Footer/>
      
    </>
  )
}

export default App
