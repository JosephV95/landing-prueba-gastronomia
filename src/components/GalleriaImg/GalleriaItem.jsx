/* eslint-disable react/prop-types */

export default function GalleriaItem({ urlImg, onClickCreado }) {
  return (
    <div className="w-full mb-0.5 md:mb-1 overflow-hidden" onClick={onClickCreado}>
      
      <img src={urlImg} alt={"Img" + urlImg} className="w-full h-full object-cover duration-1000 hover:scale-[1.15]" />

    </div>
  );
}
