import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const partyMembers = [
  { name: 'Maid of Honor', img: '/img/party1.jpg', bio: 'Best friend of the bride. Loves baking and yoga.' },
  { name: 'Best Man', img: '/img/party2.jpg', bio: 'Brother of the groom. Enjoys hiking and gaming.' },
  // Add more members if needed
];

const WeddingParty: React.FC = () => {
  return (
    <div className="flex justify-center">
      <HTMLFlipBook
        style={{}}
        width={300}
        height={400}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        maxShadowOpacity={0.5}
        showCover={true}
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
    </div>
  );
};

export default WeddingParty;
