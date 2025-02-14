import Comics from "./products/Comics";

const MainContent = () => {
    return (
        <>
            <div id="main_container">
                <div id="jumbo"></div>
                <div className="container main_content">
                    <Comics />
                </div>
            </div>
        </>
    )
}

export default MainContent;
