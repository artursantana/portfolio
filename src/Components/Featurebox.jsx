
export const Featurebox = ({ image, title, description }) => {

  return (
    <div className='a-box animation-scroll'>
      <div className='a-b-img'>
        <img src={image} alt='' />
      </div>
      <div className='a-b-text'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
