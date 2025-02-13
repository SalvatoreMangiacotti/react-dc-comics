import Header from "./components/Header.jsx"
import MainContent from "./components/MainContent.jsx"
import MainBrand from "./components/MainBrand.jsx"
import FooterLinks from "./components/FooterLinks.jsx"
import FooterSocialMedia from "./components/FooterSocialMedia.jsx"


// import './App.css'


const App = () => {

  const headerNavbar = [
    { id: 1, text: "CHARACTERS", url: "#", current: false },
    { id: 2, text: "COMICS", url: "#", current: false },
    { id: 3, text: "MOVIES", url: "#", current: true },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "GAMES", url: "#", current: false },
    { id: 6, text: "COLLECTIBLES", url: "#", current: true },
    { id: 7, text: "VIDEOS", url: "#", current: false },
    { id: 8, text: "FANS", url: "#", current: true },
    { id: 9, text: "NEWS", url: "#", current: false },
    { id: 10, text: "SHOP", url: "#", current: true }
  ]

  return (
    <>
      <Header link={headerNavbar} />

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