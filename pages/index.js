import styles from '../css/Home.module.css'

function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.hero}>I'm Nick, I'm a computing enthusiast.</h1>
            <p className={styles.subtitle}>Since 2016 I've been actively learning how to write code, design system architecture, and
                deliver
                products to the world. You've probably unkowningly used software
                I've written.</p>
        </main>
    )
}

export default Home