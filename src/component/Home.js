import React from 'react'

export default function Home() {
  return (
    <>
    <home>

      <div className='home-content'>
        <div className='tagline'> Your feet deserves the best.</div>
        <div className='para'><p>The right shoe can help keep your feet healthy and your body safe from injury. Shoes should cushion and support your feet, feel comfortable and fit well.</p></div>
        <div className='buttons'>
        <button id='shop'>Shop Now</button>
        <button id='category'>Category</button>
        </div>
        <div className='last'>
          <p>Also available on</p>
          <img id="flipkart" src="/Flipkart-Emblem.png" alt="flipkart"/>
          <img id="amazon" src="/download.png" alt="flipkart"/>
        </div>
      </div>
      <div className='home-image'>
        <img src="/9a5cb3b7-839c-48c0-8aea-a7353b4d020f.webp" alt="shoes" height="600px" width="750px"/>
      </div>
    </home>
    </>
  )
}
