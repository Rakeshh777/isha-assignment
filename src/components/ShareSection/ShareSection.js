import React from 'react'
import './_shareSection.css'

const ShareSection = ({shareText, shareIconImageList, inComponent}) => {
  return (
    <>
      <div className={`right_side_block__shareText ${inComponent ? "inComponent" : ''}`}>{shareText}</div>
          <div className={`right_side_block__shareIcons ${inComponent ? "inComponent" : ''}`}>
              {shareIconImageList.map((item, index) => {
                  return (
                      <a href={item.linkUrl} target='_blank' key={index}>
                          <img src={item.thumbnail.url} alt={item.thumbnail.alt}/>
                      </a>
                  )
              })}
        </div>
    </>
  )
}

export default ShareSection