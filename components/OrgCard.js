const OrgCard = ({ org }) => (
  <div className='h-14 max-w-sm rounded overflow-hidden shadow-lg p-8 bg-white m-4 leading-loose flex flex-col justify-evenly hover:bg-gray-300 '>
    <a
      className='text-right text-grey-600 text-sm hover:underline'
      href={org.homepage}
      target='_blank'
    >
      {org.homepage}
    </a>
    <hr className='pb-3' />
    <div className='font-bold text-xl mb-2'>{org.name}</div>

    <a
      className='font-weight-100  hover:underline'
      href={org.careers_page}
      target='_blank'
    >
      View Career Page
    </a>
    <a
      href={`/org/${org.org_id}`}
      className='w-1/3 mt-3 bg-green-700 hover:bg-green-600 text-white font-bold border border-black-700 rounded text-center'
    >
      View Jobs
    </a>
    <hr className='mt-2 pt-2' />

    <p className='text-sm text-gray-600 flex items-center'>
      Powered by: {org.careers_board}
    </p>
  </div>
)
export default OrgCard
