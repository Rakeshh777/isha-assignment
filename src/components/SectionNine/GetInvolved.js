import React from 'react'
import './_getInvolved.css'

const GetInvolved = () => {
  return (
    <div className='getInvolved'>
        <div className='getInvolved_title'>Get in touch</div>
        <div className='getInvolved_subtitle'>want to stay connected with the campaign?</div>
        <div className='getInvolded__formBox'>
            <form name='getInvolvedForm' id='getInvolvedForm' action='' method=''>
                <input type='text' name='name' id='name' placeholder='Name' />
                <input type='email' name='email' id='email' placeholder='Email' />
                <input type='text' name='country' id='country' placeholder='Country' />
                <a className='getInvolved_subscribe'>Subscribe</a>
                <div className='getInvolved__bottomText'>No Spam. Unsubscribe anytime.</div>
            </form>
        </div>
    </div>
  )
}

export default GetInvolved