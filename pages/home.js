import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import fetch from 'isomorphic-unfetch'
import Landing from '../components/Landing'
import { baseUrl } from '../apiConfig'
import axios from 'axios'

const Home = ({ orgs, jobs }) => {

  return (
    <div className='m-4'>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Landing orgs={orgs} jobs={jobs} className='mt-5' />
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch(baseUrl)
  const data = await res.json()
  console.log('data', data)
  return {
    orgs: data.orgs.map(entry => entry),
    jobs: data.recent_posts.map(entry => entry),
  }
}
export default Home
