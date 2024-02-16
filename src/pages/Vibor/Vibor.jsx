import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Naushnik from "../../assets/svg/Naushniki.svg"
import Mapp from "../../assets/svg/mapp.svg"
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Vibor.scss"

function Vibor() {
    const { ViborId } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/products/" + ViborId)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, []);
    return (
        <>
            <Header />
            <div className="container vibor">
                <h4 className="title">
                    Корзина
                </h4>
                <div className="boxxx">
                    <div className="vibor-box">
                        <div className="box-1">
                            <div className="div">
                                <img src={data?.product_img} alt="" width={195} height={180} />
                            </div>
                            <div className="div-text">
                                <h5>
                                    {data?.product_name}
                                </h5>
                                <p>{data?.product_price}₸</p>
                            </div>
                        </div>
                        <div className="sdd">
                            <div className="btn">
                                <button className="btn-1">-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <p className="text"> 2 927 ₸</p>
                        </div>
                    </div>

                    <div className="box-left">
                        <div className="top">
                            <p className="p-1">
                                ИТОГО
                            </p>
                            <div className="p-2">
                                ₸ 2 927
                            </div>
                        </div>
                        <NavLink to={"/zakas"} >
                            <button className="bottom">
                                Перейти к оформлению
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="chest">
                    <h2>
                        Доставка
                    </h2>
                    <img src={Mapp} alt="" width={580} height={170} />
                    <div className="svg">
                        <p className="p-3">
                            Доставка курьером
                        </p>
                        <p className="p-4">
                            499 ₸
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Vibor