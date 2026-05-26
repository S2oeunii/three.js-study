import { Box, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';

const Camera = () => {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    /*
        [ useFrame ]
        매 프레임마다 호출
        useEffect와 달리, 매 프레임마다 상태를 업데이트 해야하는 경우 사용
    */
    useFrame(()=>{
        if(cameraRef.current){
            cameraRef.current.rotation.y += 0.05;
        }
    })

    return (
        <PerspectiveCamera
            ref={cameraRef}
            makeDefault // 기본 카메라로 설정
            position={[0,2,5]} // 카메라 위치
            rotation={[(-Math.PI/180) * 10, 0, 0]} // 카메라 각도
            fov={75} // 카메라 시야각
            // near와  far 사이의 객체만 보임
            near={0.1} // 카메라에서부터 지정값 거리 안의 객체는 안 보이게 설정
            far={1000} // 카메라에서부터 지정값 거리 밖의 객체는 안 보이게 설정
        />
    )
}

// Pivot 카메라
const PivotCamera = () => {
    const pivotRef = useRef<THREE.Group>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    useFrame(()=>{
        if(pivotRef.current){
            pivotRef.current.rotation.y += 0.01;
        }
    })

    return (
        <group ref={pivotRef} position={[0,2,0]}>
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[0,0,5]}
                fov={75}
                near={0.1}
                far={1000}
            />
        </group>
    )
}

// useThree 이용하여 카메라 접근 : 현재 기본 카메라에 접근
const ThreeCamera = () => {
    const { camera, set } = useThree();

    useEffect(()=>{
        // 카메라 초기설정
        camera.position.set(0,2,5);
        camera.rotation.x = (-Math.PI/180) * 10;
        camera.updateProjectionMatrix();

        // 기본카메라로 설정
        set({camera});
    }, [camera, set]);

    useFrame(()=>{
        camera.rotation.y += 0.05;
    })

    return null;
}

const SmoothCamera = () => {
    /*
        [ useThree ]
    */
    const {camera} = useThree();
    const targetPosition = useRef(new THREE.Vector3(2,2,2));

    useFrame(()=>{
        /*
            [ lerf ]
            목표위치로 부드럽게 이동하는 메서드
            lerf(목표위치, 이동속도)
        */
        camera.position.lerp(targetPosition.current, 0.05);
        camera.lookAt(0,0,0);
    })

    return null;
}

const Three03 = () => {
  return (
    <div className='h-screen'>
        <Canvas>
            <ambientLight intensity={10} />

            {/* <Camera /> */}
            {/* <PivotCamera /> */}
            {/* <ThreeCamera /> */}
            <SmoothCamera />

            <Box>
                <meshStandardMaterial color='orange' />
            </Box>
        </Canvas>
    </div>
  )
}

export default Three03