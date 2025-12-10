import Link from 'next/link'

import HomeSlider from './components/HomeSlider/HomeSlider'
import RunningStroke from './components/RunningStroke/RunningStroke'
import HomeCollection from './components/HomeCollection/HomeCollection'

import styles from './page.module.css'
import mainStyles from './main.module.css'

export const metadata = {
    title: 'Rich Tales Watch Store',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function RichHome() {
    return(
        <>
            <section className={styles.top}>
                <div className={`${mainStyles.container} ${styles.topContainer}`}>
                    <div className={styles.topInner}>
                        <div className={styles.topLeft}>
                            <h2 className={styles.topTitle}>
                                Perfection in Every Tick: Immerse Yourself in a World of Precious Watches
                            </h2>
                            <p className={mainStyles.text}>Try the new collection of Invicta, Rolex, Casio and many others</p>
                            <Link href='/catalogue'>
                                <button className={mainStyles.btn}>Catalogue</button>
                            </Link>
                        </div>
                        <div className={styles.topRight}>
                            <img src="./rich-tales/home-images/top-image.png" alt="" className={styles.topImg} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.arrivals}>
                <div className={mainStyles.container}>
                    <div className={styles.arrivalsInner}>
                        <h3 className={mainStyles.title}>New Arrivals</h3>
                        <p className={`${mainStyles.text} ${styles.arrivalsText}`}>We are pleased to present to you our newest and most exclusive arrivals in the world of expensive watches. Our team works hard to provide you with access to the latest trends and the most relevant models from leading global brands.</p>
                        <HomeSlider/>
                    </div>
                </div>
            </section>

            <section className={styles.suppliers}>
                <div className={mainStyles.container}>
                    <div className={styles.suppliersInner}>
                        <h3 className={mainStyles.title}>Our Suppliers</h3>
                        <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                            We are proud to work only with the best and most reputable watch suppliers in the industry. Our goal is to provide our customers with only the highest quality and authentic products.
                        </p>
                        <RunningStroke/>
                        <p className={`${mainStyles.text} ${styles.suppliersBottomText}`}>
                            We work with leading global watch brands that are known for their excellence in craftsmanship and innovative solutions. Our suppliers have rich experience and a long history in the watch industry, which gives us access to exclusive collections and limited editions.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.collections}>
                <div className={mainStyles.container}>
                    <div className={styles.collectionsInner}>
                        <h3 className={mainStyles.title}>Collections</h3>
                        <p className={`${mainStyles.text} ${styles.collectionsText}`}>
                            Immerse yourself in the world of collections and find the perfect watch treasure that will serve as an embodiment of style, luxury and prestige. We guarantee you an unforgettable shopping experience.
                        </p>
                        <div className={styles.collectionsContent}>
                            <HomeCollection img='./rich-tales/collections-images/collection-image1.jpg' title="Gentleman's Reserve"/>
                            <HomeCollection img='./rich-tales/collections-images/collection-image2.jpg' title="Timeless Classics"/>
                            <HomeCollection img='./rich-tales/collections-images/collection-image3.jpg' title="Heritage Collection"/>
                        </div>
                        <div className={styles.collectionsDown}>
                            <Link href='/catalogue'>
                                <button className={`${mainStyles.btn} ${styles.collectionsBtn}`}>Catalogue</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.about}>
                <div className={mainStyles.container}>
                    <div className={styles.aboutInner}>
                        <div className={styles.aboutLeft}>
                            <h3 className={mainStyles.title}>About Us</h3>
                            <div className={styles.aboutText}>
                                <p className={mainStyles.text}>
                                    Our mission is to provide you with access to the most luxurious and high-quality watch models that will become an embodiment of your style and prestige. We carefully select each model to confidently offer you only the best from the world of watchmaking art.
                                </p>
                                <p className={mainStyles.text}>
                                    We guarantee the authenticity of all watches presented on our website. We work only with official suppliers and dealers to ensure high quality and reliability with every purchase.
                                </p>
                            </div>
                            <Link href='/about'>
                                <button className={`${mainStyles.btn} ${styles.aboutBtn}`}>Learn More</button>
                            </Link>
                        </div>
                        <div className={styles.aboutRight}>
                            <h2 className={styles.aboutTitle}>Rich Tales</h2>       
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}