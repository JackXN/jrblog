import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';


// Components
import Nav from '../src/components/Containers/Navbar/Nav';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital.Dev Forums</title>
        <meta name="description" content=" "  />
        <meta name="author" content="Jack Rigan"/>
        <meta itemProp='description' content='Welcome To Nodus. A Technical Blog built for software developers and and techies.'/>
        <meta name='description' content='Welcome To Nodus. A Technical Blog built for software developers and and techies.'/>
        <meta property='og:title' content='The Nodus Blog'/>
        <meta property='og:url' content/>

        <link rel="icon" href="/favicon.ico" />

      </Head>

<Nav/>
    
    </div>
  )
}
