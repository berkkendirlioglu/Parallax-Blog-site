import { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import './header.scss'

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
        <img id="bg" src="../../../assets/bg.png" alt="" />
        <img id="lake" src="../../../assets/lake.png" alt="" />
        <motion.img style={{x:backgroundY}} id="l-island" src="../../../assets/left-island.png" alt="" />
        <motion.img style={{x:backgroundX}} id="r-island" src="../../../assets/right-island.png" alt="" />
        <motion.img style={{y:backgroundYDiff}} id="montain" src="../../../assets/montain.png" alt="" />
        <motion.img style={{y:backgroundY}} id="m-montain" src="../../../assets/middle-montain.png" alt="" />
    </header>
  )
}

export default Hero
