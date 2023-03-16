import Link from "next/link"
import { faCannabis, faCartShopping, faUser, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Nav from "../styles/Navdesktop.module.css"



interface Props {
  products: number
}


const Navdesktop = ({products}:Props) => {
  return (
    <>
      <nav className={Nav.navbar}>

        <div className="d-flex justify-content-center">
          <Link href="/" className={Nav.item}>
            <FontAwesomeIcon icon={faCannabis} className={Nav.icon} />
            <span className={Nav.brand}>eweed</span>
          </Link>
          <Link href="/" className={Nav.item}>Productos</Link>
          <Link href="/about" className={Nav.item}>Acerca</Link>
          <Link href="/education" className={Nav.item}>Educacion</Link>
        </div>

        <div className="d-flex justify-content-center">
          <Link href="/shoppingcart" className={`${Nav.item} ${Nav.cart}`}>
            <FontAwesomeIcon icon={faCartShopping} className={Nav.icon}></FontAwesomeIcon>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1">{products}</span>
          </Link>
          <Link href="/profile" className={Nav.item}>
            <FontAwesomeIcon icon={faUser} className={Nav.icon}></FontAwesomeIcon>
          </Link>
        </div>

      </nav>

      <button className={Nav.btnInfo}>
        <FontAwesomeIcon icon={faInfoCircle} className={Nav.info}></FontAwesomeIcon>
      </button>
      
    </>
  )
}

export default Navdesktop