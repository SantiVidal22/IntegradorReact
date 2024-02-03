import React from 'react'
import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled, HeroBenefitsContainerStyled, HeroCardStyled} from './HeroStyles'
import {PiForkKnife} from "react-icons/pi"
import {BiDroplet} from "react-icons/bi"
import {PiPlant} from "react-icons/pi"
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button'

const Hero = () => {


  return (
    <HeroContainerStyled>
        <HeroImageContainerStyled>
            <div>
                <img src="https://res.cloudinary.com/dmloe0isx/image/upload/v1689517178/wqetvt3wcxlehc2ctdgd.png" alt="" />
                <img src="https://iplogger.com/1gYuW4.png" alt="" />
            </div>
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
            <Button>
               <Link to = '/sobrenosotros'>
                    Sobre Nosotros
               </Link>
            </Button>
        </HeroTextContainerStyled>
    </HeroContainerStyled>
  )
};

export default Hero;