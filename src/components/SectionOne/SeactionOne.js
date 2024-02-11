import React from 'react'
import './SeactionOne.css'
import VideoImage from '../utils/VideoImage/VideoImage'
import FreeTnTempleStickyCard from '../FreeTnTempleStickyCard/FreeTnTempleStickyCard'


const SeactionOne = ({data}) => {
    const {seactionOneData,  freeTNTemplesStickyCard} = data
    const textContent = seactionOneData.sectionContent[0].body.value.document.children[0].children[0].value.split('\n')
    const imageUrl =seactionOneData.sectionContent[1].image.url
  return (
    <div className='seaction__one'>
        <div className='section__one-content'>
            {textContent.map((item, index) => {
                return <span key={index}>{item}<br/></span>
            })}
        </div>
       <VideoImage imageUrl={imageUrl} dataUrl={'https://www.youtube.com/embed/KHkxs7Cnwp4'}/>
       <FreeTnTempleStickyCard data={freeTNTemplesStickyCard}/>
    </div>
  )
}

export default SeactionOne