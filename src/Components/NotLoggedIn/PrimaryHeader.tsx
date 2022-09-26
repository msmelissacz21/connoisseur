import React from 'react'

function PrimaryHeader() {
  return (
    <>
        <img src={ process.env.PUBLIC_URL + '/images/green_banner.png'} alt='Main banner image' className='banner_img'/>
        <img src={ process.env.PUBLIC_URL + '/images/food_img_one.jpg'} alt='Many meals laid out' className='banner_sub_img'/>
    </>
  )
}

export default PrimaryHeader