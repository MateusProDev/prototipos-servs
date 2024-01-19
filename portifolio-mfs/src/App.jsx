import './App.css'
import HeaderNav from './components/HeaderNav.jsx'
import MainContainer from './components/MainContainer.jsx'
import FooterContainer from './components/FooterContainer.jsx'
import MyForms from './components/MyForms.jsx'

function App() {

  return (
    <>
      <HeaderNav />
      <div>
      <h1>Meu Portfólio</h1>
      <MyForms />
      {/* Outros componentes do seu portfólio */}
      </div>
      <MainContainer />
      <FooterContainer />
    </>
  )
}

export default App
