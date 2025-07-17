import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

const bookRef = useRef<any>(null); // 👈 add this at the top of your component

const goNext = () => bookRef.current?.flipNext();
const goPrev = () => bookRef.current?.flipPrev();

const partyMembers = [
  { name: 'Maid of Honor', img: '/img/party1.jpg', bio: 'Best friend of the bride. Loves baking and yoga.' },
  { name: 'Best Man', img: '/img/party2.jpg', bio: 'Brother of the groom. Enjoys hiking and gaming.' },
  // Add more members if needed
];

const WeddingParty: React.FC = () => {
  return (
    <HTMLFlipBook
      style={{}}
      showCover={true}
      ref={bookRef}
      width={300}
      height={400}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1536}
      maxShadowOpacity={0.5}
      mobileScrollSupport={true}
      startPage={0}
      drawShadow={true}
      flippingTime={1000}
      usePortrait={true}
      startZIndex={0}
      autoSize={true}
      clickEventForward={true}
      useMouseEvents={true}
      swipeDistance={30}
      showPageCorners={true}
      disableFlipByClick={false}
      className="shadow-2xl"
    >
      {/* ✅ COVER PAGE */}
      <div className="bg-[#fff8f4] flex flex-col items-center justify-center p-4 relative">
        <img src="/img/rose.svg" alt="decor" className="w-12 absolute top-2 left-2 opacity-20" />
        <h1 className="text-2xl font-bold mb-2">Wedding Party</h1>
        <p className="text-sm text-center">Swipe or use buttons to meet the party!</p>
        <img src="/img/couple.svg" alt="decor" className="w-12 absolute bottom-2 right-2 opacity-20" />
      </div>
        {partyMembers.map((member, i) => (
          <div key={i} className="bg-white p-4 flex flex-col items-center justify-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full shadow-md mb-2"
            />
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm text-center px-4">{member.bio}</p>
          </div>
        ))}
      </HTMLFlipBook>
  );
};

export default WeddingParty;
