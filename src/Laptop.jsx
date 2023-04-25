import {
  Environment,
  Html,
  OrbitControls,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";

const Laptop = () => {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <PresentationControls global polar={[-0.6, 0.2]} azimuth={[-0.8,0.2]}>
      <primitive object={laptop.scene} position-y={-1.5}>
        <Html
          wrapperClass="laptop"
          transform
          position={[0, 1.57, -1.4]}
          distanceFactor={1.16}
          rotation-x={-0.25}
          zIndexRange={[0, 1]}
        >
          <iframe
            src="https://www.youtube.com/embed/NOZONW-UK0w?autoplay=1"
            frameborder="0"
            allowFullScreen
            allow="autoplay"
          />
        </Html>
      </primitive>
      </PresentationControls>
      <Environment preset="warehouse" />
    </>
  );
};

export default Laptop;
