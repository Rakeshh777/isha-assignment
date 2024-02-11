import React from 'react'
import './_sectionThree.css'
import LoadMoreButton from '../utils/LoadMoreButton/LoadMoreButton'

const SectionThree = () => {
  return (
    <div className='section__three'>
        <div className='section__three-title'>Why We Should Free <br/>Tamil Nadu's Temples</div>
        <div>
          <ul className='section__three__feed'>
            <div className='section__three-empty'>
                <h2>No Posts!</h2>
            </div>
          </ul>
          <LoadMoreButton />
        </div>
    </div>
  )
}

export default SectionThree