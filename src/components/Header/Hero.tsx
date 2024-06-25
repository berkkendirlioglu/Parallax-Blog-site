import { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import './header.scss'
import bg from '../../../public/images/bg.png';
import lake from '../../../public/images/lake.png';
import lIsland from '../../../public/images/left-island.png';
import rIsland from '../../../public/images/right-island.png';
import montain from '../../../public/images/montain.png';
import mMontain from '../../../public/images/middle-montain.png';

const Hero = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0,1],["0%", "-30%"]);
    const backgroundYDiff = useTransform(scrollYProgress, [0,1],["0%", "-5%"]);
    const backgroundX = useTransform(scrollYProgress, [0,1],["0%", "40%"]);


  return (
    <header ref={ref} className='hero'>
        <div className='hero-title'>
          <h2 id="heroText"><span>Welcome to my</span><br />Journey</h2>
        </div>
        <img id="bg" src={bg} alt="" />
        <img id="lake" src={lake} alt="" />
        <motion.img style={{x:backgroundY}} id="l-island" src={lIsland} alt="" />
        <motion.img style={{x:backgroundX}} id="r-island" src={rIsland} alt="" />
        <motion.img style={{y:backgroundYDiff}} id="montain" src={montain} alt="" />
        <motion.img style={{y:backgroundY}} id="m-montain" src={mMontain} alt="" />
    </header>
  )
}

export default Hero
