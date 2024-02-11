import React from 'react'
import './_sectionTwo.css'

const SectionTwo = ({data}) => {
    const title = data.sectionContent[0].titleText
    const contentBlocks = data.sectionContent[1].card
  return (
    <div className='section__two'>
        <div className='section__two-title'>{title}</div>
        <div className='section__two-imageBlock'>
            {
                contentBlocks.map(({description, shortText, thumbnail, title}, index) => {
                    return (
                        <div className='block-container' key={index}>
                            <div className='section__two-img'>
                                <img src={thumbnail.url} alt='' />
                            </div>
                            <div className='section__two-content'>
                                <p className='section__two-number'>{title}</p>
                                <p className='section__two-name'>{shortText}</p>
                                <p className='section__two-text'>{description.value.document.children[0].children[0].value}</p>
                            </div>
                        </div>
                    )
                })
                }
        </div>
    </div>
  )
}

export default SectionTwo