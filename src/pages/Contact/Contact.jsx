import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Map from "../../assets/svg/map.svg"
import VH from "../../assets/svg/WH.svg"
import VK from "../../assets/svg/VK.svg"
import TG from "../../assets/svg/TG.svg"
import IN from "../../assets/svg/IN.svg"
import Tel from "../../assets/svg/tel.svg"
import "./Contact.scss"

function Contact() {
    return (
        <>
            <Header />
            <div className="contact container">
                <div className="contact-box">
                    <div className="location">
                        <h4>
                            Наш офис
                        </h4>
                        <img src={Map} alt="" />
                        <p>
                            Аксай-3а, 62ф, Алматы, Казахстан
                            3 этаж 35 кабинет
                        </p>
                    </div>
                    <ul className="net">
                        <li>
                            <img src={VH} alt="" />
                        </li>
                        <li className="adelni">
                            <img src={VK} alt="" />
                        </li>
                        <li>
                            <img src={IN} alt="" />
                        </li>
                        <li>
                            <img src={TG} alt="" />
                        </li>
                    </ul>
                </div>
                <div className="tel">
                    <img src={Tel} alt="" />
                    <h3>
                        +7 777 777 77 77
                    </h3>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact