import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Box, Cone, Cylinder, MeshTransmissionMaterial, Sphere, Torus } from '@react-three/drei'

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
        {/* Fiber의 핵심 컴포넌트, 3D씬을 렌더링하는 공간 제공 */}
        <Canvas>
            {/* 주변광 추가 */}
            <ambientLight intensity={10} />

            {/* 3D객체의 기본단위 */}
            <mesh position={[-2, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="red" />
            </mesh>

            {/* 
                drei의 primitive 컴포넌트
                - mesh래퍼가 필요없음(각 컴포넌트에서 이미 포함)
                - geometry, material을 자동 생성
                - custom meterial을 자식으로 추가 가능
                - position, scale, rotation 속성을 직접 받을 수 있음
                - args prop을 통해 geometry의 인수를 전달 가능
            */}
            <Sphere position={[-4,0,0]} args={[1,32,32]}>
                <meshStandardMaterial color='red' />
            </Sphere>

            <Cone position={[2,0,0]} args={[1,2,32]}>
                <meshStandardMaterial color='green' />
            </Cone>

            <Box position={[0,0,0]} args={[1,1,1]}>
                <meshStandardMaterial color='orange' />
            </Box>

            <Cylinder position={[0,0,-2]} args={[1,1,2,32]}>
                <meshStandardMaterial color='blue' />
            </Cylinder>

            <Torus position={[0,0,-4]} args={[1,0.4,16,100]}>
                <meshStandardMaterial color='pink' />
                {/* 투명도 지원 */}
                <MeshTransmissionMaterial
                    transparent={true}
                    opacity={0.8}
                />
            </Torus>
        </Canvas>
    </div>
  )
}

export default Three01