import React from 'react'
import './_originHistorySection.css'

const OriginHistorySection = ({data}) => {
    const title = data.sectionContent[0].titleText
    const timelines = data.sectionContent[1].timelines
    const note = data.sectionContent[2].body.value.document.children[0].children[0].value
  return (
    <div className='originHistorySection'>
        <div className='originHistorySection__title'>{title}</div>
        <div className='originHistorySection__timelineBox'>
            {timelines.map((year, index) => {
                const description = year.description.value.document.children[0].children[0].value
                const imageUrl = year.thumbnail.url
                return (
                    <div className='timeLine__year' key={index}>
                        <div className='timeLine__year_img'>
                            <img src={imageUrl} alt='' />
                        </div>
                        <div className={`timeLine__year_content ${index===3 ? "year_bold" : ''}`}>{description}</div>
                    </div>
                )
            })}
        </div>
        <div className='originHistorySection__note'>{note}</div>
    </div>
  )
}

export default OriginHistorySection