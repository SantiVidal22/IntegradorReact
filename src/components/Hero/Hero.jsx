import React from 'react'
import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled, HeroBenefitsContainerStyled, HeroCardStyled} from './HeroStyles'
import {motion} from "framer-motion"
import {PiForkKnife} from "react-icons/pi"
import {BiDroplet} from "react-icons/bi"
import {PiPlant} from "react-icons/pi"
import {BsInfoSquareFill} from "react-icons/bs"
import { Link } from 'react-router-dom';

const Hero = () => {


  return (
    <HeroContainerStyled>
        <HeroImageContainerStyled>
            <motion.div  whileHover={{ y: -8}}>
                <img src="https://res.cloudinary.com/dmloe0isx/image/upload/v1689517178/wqetvt3wcxlehc2ctdgd.png" alt="" />
            </motion.div>
        </HeroImageContainerStyled>
        <HeroTextContainerStyled>
            <h1>Disfruta de Good Burguer</h1>
            <h2>Hace feliz tu barriga</h2>
            <HeroBenefitsContainerStyled>
                <HeroCardStyled>
                    <PiForkKnife/>
                    <p>Delicioso</p>
                </HeroCardStyled>
                <HeroCardStyled>
                    <BiDroplet/>
                    <p>Fresco</p>
                </HeroCardStyled>
                <HeroCardStyled>
                    <PiPlant/>
                    <p>Organico</p>
                </HeroCardStyled>
            </HeroBenefitsContainerStyled>
            <Link to = '/sobrenosotros'>
                    Sobre Nosotros
                    <BsInfoSquareFill/>
            </Link>
        </HeroTextContainerStyled>
    </HeroContainerStyled>
  )
};

export default Hero;