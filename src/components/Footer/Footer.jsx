import "./Footer.scss"
import Logo from "../../assets/svg/Logo.svg"
import IN from "../../assets/svg/IN.svg"
import TG from "../../assets/svg/TG.svg"
import VK from "../../assets/svg/VK.svg"
import VH from "../../assets/svg/WH.svg"
import { NavLink } from "react-router-dom"
import Ru from "../../assets/svg/RU.svg"
import { content } from "../../localization/conten"
import { useState } from "react"
function Footer() {
    const [lang, setLang] = useState("uz")
    return (
        <>
            <footer className="footer container">
                <NavLink to={"/"}>
                    <img src={Logo} alt="" />
                </NavLink>
                <ul className="list-1">

                    <li className="item">
                        <p className="item-text">{content[lang].like}</p>
                    </li>
                    <NavLink to={"/korzina"}>
                        <li className="item">
                            <p className="item-text">{content[lang].basket}</p>
                        </li>
                    </NavLink>
                    <NavLink to={"/contact"}>
                        <li className="item">
                            <p className="item-text">{content[lang].contact}</p>
                        </li>
                    </NavLink>
                </ul>
                <div className="list-2">
                    <NavLink to={"/sevise"}>
                        <p>
                            {content[lang].service}
                        </p>
                    </NavLink>
                    <div className="select">
                        <img src={Ru} alt="" />
                        <select onChange={(e) => setLang(e.target.value)}>
                            <option value="en">Eng</option>
                            <option value="ru">Рус</option>
                            <option value="uz">Uzb</option>
                        </select>
                    </div>
                </div>
                <div className="list-3">
                    <img src={VK} alt="" />
                    <img src={IN} alt="" />
                    <img src={TG} alt="" />
                    <img src={VH} alt="" />
                </div>

            </footer >
        </>
    )
}
export default Footer