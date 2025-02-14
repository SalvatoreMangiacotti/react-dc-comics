export default function ProductCard(props) {
    const { thumb, series } = props.productInfo;

    return (
        <div className="card">
            <figure>
                <img src={thumb} />
            </figure>

            <h4>{series}</h4>
        </div>
    )
}