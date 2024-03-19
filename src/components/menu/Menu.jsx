import './style.css';
import logo from './../../assets/img/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function Menu() {
    return (
        <div className="menu">
            <div className="menu_container">
                <a className="menu_logo" href="/"><img src={logo} /></a>
                <a className="menu_link" onclick="scrollToShop()">
                    <FontAwesomeIcon icon={faBasketShopping} />
                    <span className="menu_link-text">Магазин</span>
                </a>
            </div>
        </div>
    )
}
export default Menu