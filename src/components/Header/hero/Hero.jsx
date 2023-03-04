import React from "react";
import css from './Hero.module.scss'

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <div className={`innerWidth ${css.container}`}>
                {/* 上 */}
                <div className={css.upperElements}>
                    <span>
                        Hey There, <br /> I'm TanBo.
                    </span>
                    <span>
                        I'm web developer,
                        <br/>
                        And I love what i do
                    </span>
                </div>
                {/* 下 */}
                <div className={css.lowerElements}>
                    <div className={css.experience}>
                        <div className="primaryText">1</div>
                        <div className="secondaryText">
                            <div>
                                Year
                            </div>
                            <div>Experience</div>
                        </div>
                    </div>
                    <div className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>BEGINNER </span>
                        <span>WEB DEVELOPER</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero