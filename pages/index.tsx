import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { useAuth0 } from "@auth0/auth0-react";


// Components
import Navbar from '../src/components/nav-bar';
import Nav from '../src/components/Containers/Navbar/Nav';
import {Sidebar as Example} from '../src/sidebars/sidebar-2/Sidebar';
import Loading from '../src/components/Loading'

export default function Home() {


const {isLoading} = useAuth0();

if(isLoading) {
  return <Loading/>;
}

  return (
    <div>
      <Head>
        <title>Digital.Dev Forums</title>
        <meta name="description" content=" "  />
        <meta name="author" content="Jack Rigan"/>
        <meta itemProp='description' content='Welcome To Nodus. A Technical Blog built for software developers and and techies.'/>
        <meta name='description' content='Welcome To Nodus. A Technical Blog built for software developers and and techies.'/>
        <meta property='og:title' content='The Nodus Blog'/>
        <meta property='og:url'/>
        <link rel="icon" href="/favicon.ico" />
        <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0"
    />
      </Head>
{/* <Navbar/> */}
    </div>
  )
}
