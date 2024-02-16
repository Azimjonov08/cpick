import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Chexol from "../../assets/svg/chexol.svg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"


import "./CardInner.scss"

function Cinner() {
    const { CardId } = useParams();
    const [data, setData] = useState();


    useEffect(() => {
        fetch("https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/products/" + CardId)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, []);


    return (
        <>
            <Header />
            <div className="cardinner container">
                <h4 className="title">
                    Products
                </h4>
                <div className="rasmlar">
                    <div className="imgg">
                        <img src={data?.product_urls[0]} alt="" width={285} height={285} />
                        <img src={data?.product_urls[1]} alt="" width={285} height={285} />
                        <img src={data?.product_urls[2]} alt="" width={285} height={285} />
                    </div>

                    <div className="rasm-box">
                        <h4>
                            {data?.product_name}
                        </h4>
                        <div className="bxx">
                            <h3>
                                {data?.product_price}₸
                            </h3>
                            <s>
                                {data?.product_discount}₸
                            </s>
                        </div>
                    </div>

                </div>

                <div className="boxx">
                    <div className="box">
                        <div className="opisaniya">
                            <h4>
                                Описание и характеристики
                            </h4>
                        </div>
                        <p className="text">
                            {data?.product_description}
                        </p>
                    </div>
                    <div className="box-2">
                        <NavLink to={`/vibor/${data?.id}`} >
                            <button>
                                Купить!
                            </button>
                        </NavLink>

                        <button >
                            Добавить в корзину
                        </button>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Cinner