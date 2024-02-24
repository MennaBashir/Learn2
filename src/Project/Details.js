import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Card from "./Card";
function Details() {
    const params = useParams();
    const [pro, setPro] = useState({});
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.productId}`).then((res) => res.json())
            .then((dt) => setPro(dt));
    }, [])
    return (
        <h1>Product =>{pro.id}  {<Card productOne={pro} bool={false} />}</h1>

    )
}
export default Details