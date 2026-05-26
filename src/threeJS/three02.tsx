import { Plane, Text, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

// 태양광 위치 확인법
const Light = () => {
    const lightRef = useRef<THREE.DirectionalLight>(null);
    useHelper(
        lightRef as React.RefObject<THREE.DirectionalLight>,
        THREE.DirectionalLightHelper,
        1, // 헬퍼 크기
        0xff00ff // 헬퍼 색상
    )

    return (
        <directionalLight
            ref={lightRef}
            position={[0,1,0]}
            intensity={10}
        />
    )
}

const Three02 = () => {
  return (
    <div className='h-dvh'>
        <Canvas>
            {/* <ambientLight intensity={10} /> */}

            {/* 점조명 : 전구 */}
            {/* <pointLight
                color={'#0000ff'} // 색상
                position={[0,1,0]} // 위치
                intensity={100} // 강도
                castShadow // 그림자 효과
                receiveShadow // 그림자 효과
            /> */}

            {/* 원뿔조명 : 스포트라이트 */}
            {/* <spotLight
                position={[0,1,0]}
                angle={(Math.PI/180)*90} // 각도
                intensity={10}
                penumbra={0.1} // 흐림효과
            /> */}

            {/* 태양광 */}
            {/* <directionalLight
                position={[0,1,0]}
                intensity={10}
            /> */}
            <Light />

            {/* 3D 텍스트 객체 */}
            <Text>HELLO</Text>

            {/* 평면 객체(바닥이나 벽) */}
            <Plane
                args={[5, 5]}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.5, 0]}
            >
                <meshStandardMaterial color='green' />
            </Plane>
        </Canvas>
    </div>
  )
}

export default Three02