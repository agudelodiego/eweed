import Layout from '@/components/Layout'
import Link from 'next/link'
import Home from '../styles/Home.module.css'
import Building from '@/components/Building'
import Head from 'next/head'


const Index = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content='Compra productos a base de cannabis al mejor precio y con la mejor calidad.' />
      </Head>
      <Building name='Home' />
    </Layout>
  )
}
export default Index