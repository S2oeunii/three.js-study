import { Canvas } from '@react-three/fiber'
import React from 'react'

const Three01 = () => {

    /*
        [ primitive ]
        - 더 일방적인 용도 (Three.js의 모든 객체: 메시, 그룹, 카메라, 라이트 등...)
        - 자체적으로 Three.js 객체를 포함하며, 일반적으로 자식 요소를 가지지 않음
        <primitive object={someThreeJSObject} />

        [ group ]
        - Three,js의 Group 객체에 해당
        - 다른 3D 객체들을 자식으로 포함할 수 있음
        <group>
            <mesh />
            <mesh />
        </group>
    */
  return (
    <div className='h-screen'>
        <Canvas></Canvas>
    </div>
  )
}

export default Three01