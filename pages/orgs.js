import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import fetch from 'isomorphic-unfetch'
import { baseUrl } from '../apiConfig'
import CardFactory from '../components/CardFactory'

const Posts = ({ contents }) => {
  return (
    <div className='m-4'>
            <Nav/>

      <CardFactory type='orgs' contents={contents} />
    </div>
  )
}

Posts.getInitialProps = async () => {
  const res = await fetch(`${baseUrl}/orgs`)
  const data = await res.json()
  console.log('data', data)
  return {
    contents: data.map(entry => entry),
  }
}
export default Posts
