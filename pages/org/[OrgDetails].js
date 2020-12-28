import { baseUrl } from '../../apiConfig'
import CardFactory from '../../components/CardFactory'

import fetch from 'isomorphic-unfetch'
import Nav from '../../components/nav'

const OrgDetails = ({ orgDetails }) => {
  const { name, careers_board, careers_page, posts } = orgDetails
  console.log('name', name)

  return (
    <div className='m-6'>
      <Nav />
      <div className='m-4 bg--200'>
        <p className='text-sm text-gray-600 text-right'>
          Powered by: {careers_board}
        </p>
        <p className='text-6xl font-semibold'>{name}</p>
        <a
          className='font-weight-100 hover:underline'
          href={careers_page}
          target='_blank'
        >
          View Career Page
        </a>
      </div>
      <CardFactory contents={posts} type='jobs' key={posts.post_id} />
    </div>
  )
}

OrgDetails.getInitialProps = async ({ query }) => {
  const res = await fetch(`${baseUrl}/orgs/${query.OrgDetails}`)
  const data = await res.json()
  console.log('dat', data)
  return {
    orgDetails: data,
  }
}
export default OrgDetails
