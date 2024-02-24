import Card from "./Card";
import { useState, useEffect } from "react";
function Data() {
    const [data, setData] = useState([]);
    const [ctg, setCtg] = useState([]);

    //  const Prod = () => {
    //   fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((dt) => setData(dt));
    // }
    const productCatgeory = (catgory) => {
        fetch(`https://fakestoreapi.com/products/category/${catgory}`).then((r1) => r1.json())
            .then((data) => setData(data));
    }
    const products = () => {
        fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((dt) => setData(dt));
    }
    useEffect(() => {
        products();
        fetch('https://fakestoreapi.com/products/categories').then((r) => r.json())
            .then((d) => setCtg(d));

    }, []);

    const product = data.map((el) => {
        return (
            <div key={el.id} className="col-4">
                <Card productOne={el} bool={true} />
            </div>
        );
    });
    const Ctgory = ctg.map((ele) => {
        return (
            <button key={ele} className="btn m-3 btn-info" onClick={() => productCatgeory(ele)}>{ele}</button>
        )
    })

    return (
        <>
            <div className="container">
                <button className="btn m-3 btn-info" onClick={() => products()}>All</button>
                {Ctgory}
                <div className="row ms-4">
                    {product}
                </div>
            </div>
        </>
    );
}
export default Data