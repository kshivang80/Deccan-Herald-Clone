const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

const Video = () => {
  return (
    <video controls width="100%" height="">
      <source src={src} type="video/mp4"   />
     
    </video>
  );
};

export default Video;