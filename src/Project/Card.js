
import { Link } from "react-router-dom";
function Card(props) {
    const { productOne, bool } = props;
    return (
        <>
            <div className="card">
                <img src={productOne.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{productOne.title}</h5>
                    <p className="card-text">{productOne.description}</p>
                    {bool && <Link to={`/product/${productOne.id}`} className="btn btn-primary">Details</Link>}

                </div>
            </div>
        </>
    );
}
export default Card