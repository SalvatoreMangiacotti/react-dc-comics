const NavBar = (props) => {
    return (
        <ul>
            {
                props.link.map((link) => (
                    <li key={link.id}>
                        <a href="#">{link.text}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default NavBar;