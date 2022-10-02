import Iframe from 'react-iframe'




export const Video = () => {
  return (
    <Iframe src='https://www.youtube.com/embed/EI4ssefKQdw'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
    title='video'
    height="250px"
    width='100%'
/>
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


