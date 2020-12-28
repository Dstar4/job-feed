import Layout from '../components/Layout'
import { useEffect } from 'react'
import Router from 'next/router'
export default () => {
  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/') {
      Router.push('/home')
    }
  })
  return (
    <Layout>
      <h1 className='text-5xl font-bold text-purple-500'>Hello world!</h1>
    </Layout>
  )
}
