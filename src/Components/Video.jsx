import Iframe from 'react-iframe'



const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";


export const Video = () => {
  return (
    <video controls width="100%" height="100%">
      <source src={src} type="video/mp4"   />
     
    </video>
  );
};



export const Video1 = () => {
  return (
    <Iframe src='https://www.youtube.com/embed/D5asYNStKeQ'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
    title='video'
    height="100%"
    width='100%'
/>
  );
};


