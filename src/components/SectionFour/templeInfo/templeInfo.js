import React from 'react'
import './_templeInfo.css'
import TempleInfoModal from '../../modals/TempleInfoModal/TempleInfoModal'
import { useState } from 'react'

const TempleInfo = ({temple}) => {
    const [showModal, setShowModal] = useState(false)
    const {ctaLabel, description, image, thumbnail, title} = temple
    const descriptionValue = description.value.document.children[0].children[0].value
    const showModalHandler = () => {
        setShowModal(prevState=>  !prevState)
    }
  return (
    <>
        {showModal && <TempleInfoModal onClose={showModalHandler} descriptionValue={descriptionValue} image={image} title={title}/>}
        <div className='section__four-temple' 
            data-title={title} 
            data-image={thumbnail.url} 
            data-description={descriptionValue} 
            onClick={showModalHandler}
        >
            <div className='section__four-temple-image'>
                <img src={image.url} alt={title} />
            </div>
            <div>
                <div className='section__four-temple-name'>{title}:</div>
                <div className='section__four-temple-content'>
                    <p>{descriptionValue}</p>
                </div>
                <span>{ctaLabel}</span>
            </div>
        </div>
    </>
  )
}

export default TempleInfo