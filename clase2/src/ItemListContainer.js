import NavBar from "./NavBar"
const ItemListContainer = ({greeting}) => {
    return (
        <div className="container" style={{ height: '100vh' }}>
            <div className="row justify-content-end align-items-start" style={{ height: '100%' }}>
                <div className="col-6">
                    <h1 className="text-center">
                        {greeting}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;