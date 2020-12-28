import { useRouter } from 'next/router'

const JobCard = ({ job }) => (
  <div className='h-14  max-w-sm rounded overflow-hidden shadow-lg p-8 bg-white m-4 leading-loose flex flex-col justify-evenly hover:bg-gray-300'>
    <p className='text-right'> Job Opportunity</p>
    <hr className='pb-3' />
    <div className='font-bold text-xl mb-2'>{job.title}</div>
    <p>Department: {job.department}</p>
    <a
      className='w-1/3 mt-3 bg-green-700 hover:bg-green-600 text-white font-bold border border-black-700 rounded text-center'
      href={job.url}
      target='_blank'
    >
      Apply Now
    </a>
    <hr className='mt-2 pt-2' />
    <p className='text-sm text-gray-600 flex items-center'>
      Created at: {job.created_at}
    </p>
  </div>
)

export default JobCard
