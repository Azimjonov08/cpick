import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Map from "../../assets/svg/mappp.svg"
import Visa from "../../assets/svg/visa.svg"
import Strelka from "../../assets/svg/strelka.svg"
import Bonus from "../../assets/svg/bonus.svg"
import "./Zakas.scss"
import { NavLink } from "react-router-dom";

function Zakas() {
    return (
        <>
            <Header />
            <div className="container zakas">
                <h4 className="title">Оформление заказа</h4>
                <div className="box">
                    <div className="kuryer">
                        <div className="kuryer-nav">
                            <h5>Доставка курьером</h5>
                            <p> 499 ₸</p>
                        </div>

                        <img className="iimg" src={Map} alt="" />
                        <h2 className="gorod">
                            Адрес доставки
                        </h2>
                        <input type="text" className="inp-1" placeholder="Город " />
                        <input type="text" className="inp-1" placeholder="Улица / Район" />
                        <div className="inp-box">
                            <input type="text" placeholder="Дом" />
                            <input type="text" placeholder="Подъезд" />
                            <input type="text" placeholder="Квартира" />
                        </div>
                    </div>
                    <div className="left">
                        <div className="left-top">
                            <h4 className="title">
                                Ваш заказ
                            </h4>
                            <div className="div-1">
                                <p>1x</p>
                                <p>Наушники Apple BYZ S852I</p>
                                <p>₸ 2 927</p>
                            </div>
                            <div className="div">
                                <p className="p">Доставка</p>
                                <p>₸ 2 927</p>
                            </div>

                            <div className="div">
                                <p className="p">К оплате</p>
                                <p>₸ 2 927</p>
                            </div>

                        </div>
                        <div className="left-center">
                            <h4 className="title">
                                Способ оплаты
                            </h4>

                            <div className="visa">
                                <img src={Visa} alt="" />
                                <p>
                                    Счет на kaspi.kz
                                </p>
                                <img src={Strelka} alt="" />
                            </div>
                            <div className="bonus">
                                <img src={Bonus} alt="" />
                                <input type="text" placeholder="Есть промокод?" />
                                <img src={Strelka} alt="" />
                            </div>
                        </div>

                        <div className="left-bottom">
                            <h4 className="title">
                                Номер получателя
                            </h4>
                            <input type="text" className="inp-1" placeholder="+7 ___ ___ __ __" />
                        </div>

                        <NavLink to={"/finish"} >
                            <button
                                className="btnnn">
                                Закончить оформление
                            </button>
                        </NavLink>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Zakas