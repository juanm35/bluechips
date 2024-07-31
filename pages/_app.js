import 'tailwindcss/tailwind.css'
import Head from 'next/head';
import {useRouter} from 'next/router';
import Menu from '../components/Menu'

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return(
        <>
            <Head>
                <title>Bluechips - crypto</title>
            </Head>
            <Menu key={router.pathname} ></Menu>
            <div className='bg-bcDarkBlue'>
                <Component {...pageProps} />
            </div>
        </>
    )
  }