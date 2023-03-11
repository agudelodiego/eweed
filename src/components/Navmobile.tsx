import { faBars, faInfoCircle, faCircleXmark, faCannabis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Nav from '../styles/Navmobile.module.css'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import Link from "next/link";
import { variants } from "@/utils/variants";


const Navmobile = ()=>{
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      console.log("Animate");
    }
  }, [inView]);

  
  return(
    <>
      <button className={Nav.btnIcon} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <FontAwesomeIcon icon={faBars} className={Nav.icon}></FontAwesomeIcon>
      </button>

      <button className={Nav.btnInfo}>
        <FontAwesomeIcon icon={faInfoCircle} className={Nav.info}></FontAwesomeIcon>
      </button>

      <nav className={`offcanvas offcanvas-start ${Nav.nav}`} data-bs-scroll="true" data-bs-backdrop="false" tabIndex={1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <button type="button" className={Nav.btnClose} data-bs-dismiss="offcanvas" aria-label="Close">
            <FontAwesomeIcon icon={faCircleXmark} className={Nav.close}></FontAwesomeIcon>
          </button>

        </div>

        <nav className={`offcanvas-body ${Nav.navContainer}`}>

          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={variants.first}
            ref={ref}
          >
            <Link href="/" className={Nav.item}>
              <FontAwesomeIcon icon={faCannabis} className={`${Nav.icon} ${Nav.brandIcon}`}></FontAwesomeIcon>
              <span className={Nav.brandText}>eweed</span>
            </Link>
          </motion.div>
          
          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={variants.second}
          >
            <Link href="/" className={Nav.item}>
              Protuctos
            </Link>
          </motion.div>

          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={variants.third}
          >
            <Link href="/about" className={Nav.item}>
              Acerca
            </Link>
          </motion.div>

          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={variants.fourth}
          >
            <Link href="/education" className={Nav.item}>
              Educacion
            </Link>
          </motion.div>

          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={variants.fifth}
          >
            <Link href="/shoppingcart" className={Nav.item}>
              Carrito
            </Link>
          </motion.div>

          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={variants.sixth}
          >
            <Link href="/profile" className={Nav.item}>
              Perfil
            </Link>
          </motion.div>
        </nav>

      </nav>
    </>
    
  )
}
export default Navmobile;
