const Image = (props) => {
  return (
    <>
      <img
        className="h-full w-full object-cover object-center"
        src={props.src}
        alt={props.alt}
      />
    </>
  );
};

export default Image;
