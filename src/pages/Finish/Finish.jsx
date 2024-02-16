import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./Finish.scss"

function Finish() {
    return (
        <>
            <Header />

            <div className="finish container">
                <div className="box">
                    <p>Номер вашего заказа №123123, с Вами свяжется наш менеджер.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Finish