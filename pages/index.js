import Head from "next/head"
import styles from '../styles/Home.module.css'


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Modern React Forms</title>
                <meta name="description" content="Modern React Forms" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}