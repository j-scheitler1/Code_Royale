/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';

type PreferenceNavProps = {};

const PreferenceNav:React.FC<PreferenceNavProps> = () => {
  
  return (
    <div className='h-11 flex bg-brand'>
      <button className='mx-4'>Change Language</button>
      <button className='mx-4'>Submit</button>
    </div>
  )
}
export default PreferenceNav;