import Head from 'next/head'
import styles from '@/styles/grupo/Cadastro.module.css'
import Navbar from '../../../components/general/Navbar'

export default function Cadastro() {
    return (
        <>
            <Head>
                <title>Livraria MP</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div>
                <h1 className={styles.title}>Tela de cadastro de Grupo de Precificação</h1>
            </div>
            <main className={styles.main}></main>
        </>
    );
}