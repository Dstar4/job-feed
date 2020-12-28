import { baseUrl } from '../../apiConfig'
import fetch from 'isomorphic-unfetch'
import Nav from '../../components/nav'
const JobDetails = ({ data }) => {
  const { url, department, title, is_open, created_at, events } = data
  return (
    <div className='m-4'>
      <Nav/>
      <div className='w-full bg-gray-500 h-12'>
        <h2>{title}</h2>
        <p>{department}</p>
        <a href={url}>{url}</a>
        <hr />
        {events
          ? events.map(event => {
              console.log(event)
              return (
                <div>
                  <h4>Recent Activity</h4>
                  <p>{event.event_type}</p>
                  <p>{event.created_at}</p>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

JobDetails.getInitialProps = async ({ query }) => {
  const res = await fetch(`${baseUrl}/posts/${query.JobDetails}`)
  // console.log("res", res)

  const data = await res.json()
  console.log('data', data)
  return {
    data: data,
  }
}
export default JobDetails
