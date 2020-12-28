import CardFactory from './CardFactory'
import { useState } from 'react'
const Landing = ({ orgs, jobs }) => {
  const [activeTab, setActiveTab] = useState('all')
  const renderCards = () => {
    switch (activeTab) {
      case 'orgs':
        return <CardFactory contents={orgs} type='orgs' />
      case 'jobs':
        return <CardFactory contents={jobs} type='jobs' />
      default:
        return (
          <>
            <CardFactory contents={orgs} type='orgs' />
            <CardFactory contents={jobs} type='jobs' />
          </>
        )
    }
  }
  console.log('active tab', activeTab)
  return (
    <div>
      <ul className='flex border-b'>
        <li className='-mb-px mr-1 ' onClick={() => setActiveTab('all')}>
          <p
            className={activeTab === 'all' ? activeTabClass : inactiveTabClass}
          >
            All
          </p>
        </li>
        <li className='-mb-px mr-1' onClick={() => setActiveTab('orgs')}>
          <p
            className={activeTab === 'orgs' ? activeTabClass : inactiveTabClass}
          >
            Orgs
          </p>
        </li>
        <li className='mr-1' onClick={() => setActiveTab('jobs')}>
          <p
            className={activeTab === 'jobs' ? activeTabClass : inactiveTabClass}
          >
            Jobs
          </p>
        </li>
      </ul>
      {renderCards()}
    </div>
  )
}
export default Landing

let activeTabClass =
  'bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-900 font-semibold cursor-pointer'
let inactiveTabClass =
  'bg-white inline-block py-2 px-4 text-gray-700 hover:text-gray-800 font-semibold cursor-pointer'
