import NavBar from "./HeaderNav";

const Header = (props) => {
    return (
        <>
            <header>
                <nav>
                    <div id="logo">
                        <img src="./img/dc-logo.png" alt="dc-logo" />
                    </div>

                    <NavBar link={props.link} />
                </nav>

            </header>
        </>
    )
}

export default Header;