import Header from "./components/Header.jsx"
import MainContent from "./components/MainContent.jsx"
import MainBrand from "./components/MainBrand.jsx"
import FooterLinks from "./components/FooterLinks.jsx"
import FooterSocialMedia from "./components/FooterSocialMedia.jsx"


// import './App.css'


const App = () => {
  return (
    <>
      <Header />

      <main>
        <MainContent />
        <MainBrand />
      </main>

      <footer>
        <FooterLinks />
        <FooterSocialMedia />
      </footer>
    </>
  )
}

export default App;