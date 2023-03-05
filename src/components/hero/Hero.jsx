import React from "react";
import css from './Hero.module.scss';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "../../utils/motion";

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25}}
            className={`innerWidth ${css.container}`}>
                {/* 上 */}
                <div className={css.upperElements}>


                    <motion.span 
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="primaryText">


                        Hey There, <br /> I'm TanBo.
                    </motion.span>
                    <motion.span 
                    variants={fadeIn("left", "tween", 0.4, 1)}
                    className="secondaryText">
                        I'm the web developer,
                        <br/>
                        And I love what i do
                    </motion.span>
                </div>

                {/* 人物图像 */}
                <motion.div 
                variants={fadeIn("up", "tween", 0.3, 1)}
                className={css.person}>
                    <motion.img 
                      variants={slideIn("up", "tween", 0.5, 1.3)}
                    src="./person.png" alt="" />
                </motion.div>

                {/* email */}
                <a href="mailto:878705727@qq.com" className={css.email}>
                    878705727@qq.com
                </a>


                {/* 下 */}
                <div className={css.lowerElements}>
                    <motion.div 
                     variants={slideIn("right", "tween", 0.3, 1)}
                    className={css.experience}>
                        <div className="primaryText">1</div>
                        <div className="secondaryText">
                            <div>
                                Year
                            </div>
                            <div>Experience</div>
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={slideIn("left", "tween", 0.5, 1)}
                    className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>BEGINNER </span>
                        <span>WEB DEVELOPER</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero