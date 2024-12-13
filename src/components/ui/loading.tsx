import React from 'react'
import './loading.css'

const loading = () => {
  return (    
    <div className='w-screen h-4/6 flex items-center justify-center'>
        <div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default loading