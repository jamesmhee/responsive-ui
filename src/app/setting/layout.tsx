import React from 'react'

type Props = {}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex w-screen h-full'>
      {children}
    </div>
  )
}

export default layout