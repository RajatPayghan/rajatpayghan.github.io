import React from 'react'
import Spline from '@splinetool/react-spline/next';

function SplineHome({sceneLink}) {
  return (
    <div className="w-full aspect-video relative overflow-hidden bg-neutral-100 rounded-xl">
      <Spline 
      scene={sceneLink}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      />
    </div>
  )
}

export default SplineHome

// "https://prod.spline.design/MWg7T9pvG4cTrW9r/scene.splinecode"
