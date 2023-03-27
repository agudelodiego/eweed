import React, { useEffect, useState } from "react"
import Styles from "../styles/Slider.module.css"
import {Asset} from "@chec/commerce.js/types/asset"
import Image from "next/image"
import { motion } from "framer-motion"


interface Props {
  images: Asset[] | undefined
}

export const Slider = ({images}:Props) => {
  
  const [selected,setSelected] = useState("")
  const [i,setI] = useState(0)
  const [subs,setSubs] = useState<Asset[]>([])

  useEffect(()=>{
    if(images){
      setSelected(images[i].url)
      setSubs(images)
    }
  },[images])

  const selectImage = (id:string) => {
    if(images){
      let found = subs.findIndex((image)=>{
        return image.id == id
      })
      setI(found)
      setSelected(images[found].url)
    }
  }

  return (
    <div className={Styles.slider_container}>

      <div className={Styles.slider_imgContainer}>
        <Image width={500} height={500} src={selected} alt="Product image" className={Styles.slider_image}/>
      </div>

      <div className={Styles.siler_subImgContainer}>

        <div className={Styles.slider_subLine}>
          {subs.map((asset)=>{
            return(

              <motion.button 
                whileTap={{scale:.7}}
                onClick={()=>selectImage(asset.id)}
                className={Styles.slider_noneButton} 
                key={asset.id}>

                <Image width={50} height={50} src={asset.url} className={Styles.slider_subImg} alt="Product button" />

              </motion.button>

            )
          })}
        </div>
        
      </div>
    </div>
  )
}
