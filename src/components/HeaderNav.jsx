const headerNavbar = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"]

const NavBar = () => {
    return (
        headerNavbar.map((link) => (
            <li>
                <a href="#">{link}</a>
            </li>
        ))
    )
}

export default NavBar;