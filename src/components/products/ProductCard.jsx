export default function ProductCard(props) {
    const { thumb, series } = props.productInfo;

    return (
        <div className="card">
            <img src={thumb} />
            <h2>{series}</h2>
        </div>
    )
}