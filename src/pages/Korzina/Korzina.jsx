import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Trash from "../../assets/svg/trash.svg"
import "./Korzina.scss"

function Korzina() {
    return (
        <>
            <Header />
            <div className="Trash container">
                <img src={Trash} alt="" />
                <h5>Корзина пуста</h5>
                <p>Но это никогда не поздно исправить :)</p>
                <button>
                    В каталог товаров
                </button>
            </div>
            <Footer />
        </>
    )
}

export default Korzina