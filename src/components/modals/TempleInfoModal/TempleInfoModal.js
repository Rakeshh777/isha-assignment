import React from 'react'
import { createPortal } from 'react-dom'
import './_templeInfoModal.css'

const TempleInfoModal = ({title, image, descriptionValue, onClose}) => {
  return createPortal(<div className='temple-detail-modal-wrapper'>
        <div className='temple-detail-modal'>
        <div className='temple-detail-modal__close' onClick={onClose}>
            <img src='https://static.consciousplanet.org/static/assets/img/circle-black.svg?a=2' />
        </div>
        <div className='temple-detail-modal__img'>
            <img id={title} src={image.url} />
        </div>
        <div className='temple-detail-modal__summary'>
            <div id={title} className='temple-detail-modal__summary__title'> 
                {title}
            </div>
            <div className='temple-detail-modal__summary__description'>
                <p>{descriptionValue}</p>
            </div>
        </div>
        </div>
  </div>,
    document.getElementById('modals')
  )
}

export default TempleInfoModal