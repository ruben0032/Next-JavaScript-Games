// import {AppProps} from 'next/app';
import '../public/css/globals.css'
import Layout from "@components/Layout/Layout"

export default function MyApp({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}