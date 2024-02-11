import React from 'react'
import './_appealSection.css'

const AppealSection = ({data}) => {
    const title = data.sectionContent[0].titleText
    const letterList = data.sectionContent[1].fileList
  return (
    <div className='appeal_section'>
        <div className='appeal_section_title'>{title}</div>
        <div className='appeal_section__letterBox'>
            {letterList.map((item, index) => {
                return (
                    <div key={index} className='appeal_section__letter'>
                        <div className='appeal_section__letter_heading'>{item.fileTitle}</div>
                        <div className='appeal_section__letter_img'>
                            <a href={item.linkUrl} target='_blank'>
                                <img src={item.thumbnail.url}/>
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default AppealSection