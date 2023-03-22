import { faBars, faInfoCircle, faCircleXmark, faCannabis, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Nav from "../../styles/Navmobile.module.css"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { navAnimation } from "@/utils/Animations";
import { useContext } from "react";
import { CartContext } from "@/context/cart/CartProvider";



const Navmobile = ()=>{
  const [ref, inView] = useInView({ threshold: 0 });
  const {totalItems} = useContext(CartContext)

  
  
  return(
    <>
      
      <Link href="/shoppingcart" legacyBehavior>
        <motion.a whileTap={{scale:0.6}} className={`${Nav.btnCart} ${Nav.item}`}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-2">{totalItems}</span>
        </motion.a>
      </Link>
      
      <motion.button whileTap={{scale:0.6}} className={Nav.btnIcon} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <FontAwesomeIcon icon={faBars} className={Nav.icon}></FontAwesomeIcon>
      </motion.button>

      <motion.button whileTap={{scale:0.6}} className={Nav.btnInfo}>
        <FontAwesomeIcon icon={faInfoCircle} className={Nav.info}></FontAwesomeIcon>
      </motion.button>

      <nav className={`offcanvas offcanvas-start ${Nav.nav}`} data-bs-scroll="true" data-bs-backdrop="false" tabIndex={1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

        <div className="offcanvas-header">
          <button type="button" className={Nav.btnClose} data-bs-dismiss="offcanvas" aria-label="Close">
            <FontAwesomeIcon icon={faCircleXmark} className={Nav.close}></FontAwesomeIcon>
          </button>

        </div>

        <nav className={`offcanvas-body ${Nav.navContainer}`}>

          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={navAnimation.first}
            ref={ref}
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
          >
            <Link href="/" className={Nav.item}>
              <motion.div whileTap={{scale:0.6}}>
                <FontAwesomeIcon icon={faCannabis} className={`${Nav.icon} ${Nav.brandIcon}`}></FontAwesomeIcon>
                <span className={Nav.brandText}>eweed</span>
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={navAnimation.second}
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
          >
            <Link href="/" className={Nav.item}>
              <motion.div whileTap={{scale:0.6}}>
                Productos
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={navAnimation.third}
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
          >
            <Link href="/about" className={Nav.item}>
              <motion.div whileTap={{scale:0.6}}>
                Acerca
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={navAnimation.fourth}
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
          >
            <Link href="/education" className={Nav.item}>
              <motion.div whileTap={{scale:0.6}}>
                Educacion
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={navAnimation.fifth}
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
          >
            <Link href="/profile" className={Nav.item}>
              <motion.div whileTap={{scale:0.6}}>
                Perfil
              </motion.div>
            </Link>
          </motion.div>
        </nav>

      </nav>
    </>
    
  )
}
export default Navmobile;
