import JobCard from './JobCard'
import OrgCard from './OrgCard'
const CardFactory = ({ contents, type }) => {
  console.log('contents', contents)
  if (contents) {
    let cards = contents.map(content => {
      switch (type) {
        case 'orgs':
          return <OrgCard key={content.org_id} org={content} />

        case 'jobs':
          // console.log("content", content)
          return <JobCard job={content} key={content.post_id} />

        default:
          console.log('default')
          return null
      }
    })

    if (cards) {
      return (
        <div className='flex flex-row grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100'>
          {cards}
        </div>
      )
    } else {
      return 'Loading...'
    }
  } else {
    return 'No Contents'
  }
}
export default CardFactory
