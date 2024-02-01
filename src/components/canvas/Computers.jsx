import { Suspense, useCallback, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { triangle } from "maath";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { motion } from "framer-motion";

const Computers = ({ isMobile }) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  const computer = useLoader(GLTFLoader, './robot_playground/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1.8}
        // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [speed, setSpeed] = useState(50);

  useEffect(() => {
    //Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px )");

    //Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    //Add the callback function as a listener for changes to the media query 
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const speeds = [1,2,3,4,5,6,7,8,9];
    let index = 0;

    const interval = setInterval(() => {
      setSpeed(speeds[index]);
      index = (index + 1) % speeds.length;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="w-full h-full absolute right-[-25%] top-[130px]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 5 }}
    >

    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 10], fov: 25 }}
      gl={{ preserverDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
        autoRotateSpeed={speed}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
    </motion.div>
  );
};

export default ComputersCanvas;
