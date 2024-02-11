import React from 'react'
import './_sectionFour.css'
import { useState } from 'react'
import LoadMoreButton from '../utils/LoadMoreButton/LoadMoreButton'
import TempleInfo from './templeInfo/templeInfo'

const SectionFour = ({data}) => {
    const titleAndSubtitle = data.sectionContent[0]
    const templeInfo = data.sectionContent[1].cards
    const [loadTempleData, setLoadTempleData] = useState(templeInfo.slice(0, 2))
    const loadMoreTempleData = () => {
        setLoadTempleData((prevState) => templeInfo.slice(0, prevState.length + 2))
    }

  return (
    <div className='section__four'>
        <div className='section__four-title'>{titleAndSubtitle.titleText}</div>
        <div className='section__four-subtitle'>{titleAndSubtitle.titleSubtext}</div>
        <div className='section__four-templeInfoBlock'>
            {loadTempleData.map((temple, index) => <TempleInfo temple={temple} key={index}/>)} 
        </div>
        <div className='section__four-count'>{loadTempleData.length}/{templeInfo.length}</div>
        <LoadMoreButton loadMore={loadMoreTempleData} shade={'light'}/>
    </div>
  )
}

export default SectionFour