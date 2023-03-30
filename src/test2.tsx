import { Suspense, useContext } from 'react';
import { useVideoTexture } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

const body = document.getElementsByTagName('body')[0];
const defaultDistance = 135.40794;

const positionData = [
  [11.15, 2.63, 5.255],
  [22.44, 2.83, -5.7],
  [33.72, 1.1, 5.67],
  [45, 0.93, -5.7],
  [56.29, 2.63, 5.255],
  [67.55, 2.83, -5.7],
  [78.85, 1.1, 5.67],
  [90.12, 0.93, -5.7],
  [101.41, 2.63, 5.255],
  [112.65, 0.93, -5.7],
  [123.96, 1.1, 5.25],
  [135.25, 0.93, -5.7],
];

const VideoMaterialCanvas = (props: any) => {
  const texture = useVideoTexture(
    `https://cms.transparenthouse.com${props.item.video.url}`,
    {
      // const texture = useVideoTexture(`/assets/videos/OnePlus N300 Sizzle Video.mov`, {
      muted: true,
      loop: true,
      start: true,
      autoplay: true,
      playsInline: true,
      preload: 'auto',
      unsuspend: 'canplaythrough',
      // onloadstart : (ev) => {
      //     console.log("stated");

      //     props.setLoadedVideos((current:any) => [...current, props.loadedVideos + 1])        },
      onplay: ev => {
        props.setLoadedVideos((current: any) => [...current, props.loadedVideos + 1]);
      },
    }
  );
  // texture.source.data.onplay((e:any)=>{
  //     console.log(e);

  // })

  texture.dispose();

  return <meshBasicMaterial map={texture} toneMapped={true} />;
};

const ProjectCards = (props: any) => {
  const navigate = useNavigate();

  const handleHoverTrue = () => {
    body.style.cursor = 'pointer';
  };

  const handleHoverFalse = () => {
    body.style.cursor = 'auto';
  };

  return (
    <>
      {props.projects.map((item: any, key: number) => (
        <>
          {/* @ts-ignore */}
          <mesh
            name="videoTexture"
            rotation={[0, -Math.PI / 2, 0]}
            position={positionData[key]}
            onPointerEnter={ev => {
              ev.stopPropagation();
              handleHoverTrue();
            }}
            onPointerLeave={ev => {
              ev.stopPropagation();
              handleHoverFalse();
            }}
            onClick={ev => {
              ev.stopPropagation();
              handleHoverFalse();
              navigate(`/all-work/${item.work.slug}`);
            }}
          >
            <planeGeometry attach="geometry" args={[6, 3]} />
            <Suspense>
              <VideoMaterialCanvas
                item={item}
                loadedVideos={props.loadedVideos}
                setLoadedVideos={props.setLoadedVideos}
              />
            </Suspense>
          </mesh>
        </>
      ))}

      <group position={[defaultDistance, 0, 0]}>
        {props.projects.map((item: any, key: number) => {
          if (key < 9) {
            return (
              // @ts-ignore
              <mesh rotation={[0, -Math.PI / 2, 0]} position={positionData[key]}>
                <planeGeometry attach="geometry" args={[6, 3]} />
                <Suspense>
                  <VideoMaterialCanvas item={item} />
                </Suspense>
              </mesh>
            );
          }
        })}
      </group>
      <group position={[-defaultDistance, 0, 0]}>
        {props.projects.map((item: any, key: number) => {
          if (key > 5) {
            return (
              // @ts-ignore
              <mesh rotation={[0, -Math.PI / 2, 0]} position={positionData[key]}>
                <planeGeometry attach="geometry" args={[6, 3]} />
                <Suspense>
                  <VideoMaterialCanvas item={item} />
                </Suspense>
              </mesh>
            );
          }
        })}
      </group>
    </>
  );
};

export default ProjectCards;
