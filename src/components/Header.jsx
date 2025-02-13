import NavBar from "./HeaderNav";

const Header = () => {
    return (
        <>
            <header>
                <div id="logo">
                    <img src="./img/dc-logo.png" alt="dc-logo" />
                </div>

                <NavBar />
            </header>
        </>
    )
}

export default Header;