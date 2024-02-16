import "./Cards.scss"
import Chexol from "../../assets/svg/chexol.svg"
import Simsiz from "../../assets/svg/simsiz.svg"
import Naushnik from "../../assets/svg/Naushniki.svg"
import Korzinka from "../../assets/svg/korzina.svg"
import Star from "../../assets/svg/Vector.svg"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";

function Cards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/products")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, []);
    {
        return (
            <>
                <div className="Cards">
                    <div className="container">
                        <div className="chexol">
                            <h4 className="title">Products</h4>
                            <div className="voxx">
                                {data.map((item, index) => {
                                    return (
                                        <NavLink to={`/card-inner/${item.id}`} key={index}>
                                            <div className="card" >
                                                <img className="img-1" src={item.product_img} alt="phg" width={290} height={290} />
                                                <div className="card-box">
                                                    <p>{item.product_name.length > 20 ? item.product_name.slice(0, 18) + "..." : item.product_name}</p>
                                                    <b>{item.product_price} ₸</b>
                                                </div>
                                                
                                            </div>
                                        </NavLink>
                                    )
                                })}

                            </div>

                        </div>
                      
                    </div>
                </div>
            </>
        )

    }
}

export default Cards