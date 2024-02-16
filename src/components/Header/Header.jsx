import "./Header.scss"
import Logo from "../../assets/svg/Logo.svg"
import HeaderCenter from "../../assets/svg/headercenter.svg"
import Like from "../../assets/svg/like.svg"
import korzinka from "../../assets/svg/korzina.svg"
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <>
            <header className="header">
                <div className="container header-box">
                    <div className="divv">
                        <NavLink to={"/"}>
                            <img src={Logo} alt="" />
                        </NavLink>
                        <img src={HeaderCenter} alt="" />
                    </div>
                    <div className="vozz">
                        <img src={Like} alt="" />
                        <NavLink to={"/korzina"}>
                            <img src={korzinka} alt="" />
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header