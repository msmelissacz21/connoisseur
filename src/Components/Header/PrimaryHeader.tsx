import React from 'react'

function PrimaryHeader() {
  return (
    <>
        <img src={ process.env.PUBLIC_URL + '/images/green_banner.png'} alt='Main banner image' className='banner_img'/>
    </>
  )
}

export default PrimaryHeader