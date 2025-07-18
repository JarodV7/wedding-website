import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

const partyMembers = [
  { name: 'Maid of Honor: Sarah Fedder', img: '/img/SarahFedder.jpeg', bio: 'Need Text' },
  { name: 'Best Man: Curtis Hodge', img: '/img/CurtisHodge.jpeg', bio: 'Need Text' },
  { name: 'Bridesmaid: Rayn Barber', img: '/img/party3.jpeg', bio: 'Need Text' },
  { name: 'Groomsman: Jarod VanKirk', img: '/img/party4.jpeg', bio: 'Need Text' },
  { name: 'Bridesmaid: Makayla Shaffer', img: '/img/party5.jpeg', bio: 'Need Text' },
  { name: 'Groomsman: Kyle Haupt', img: '/img/KyleHaupt.jpeg', bio: 'Need Text' },
  { name: 'Bridesmaid: Shaylene Laverio', img: '/img/ShayleneLaverio.jpeg', bio: 'Need Text' },
  { name: 'Groomsman: Ben Burns', img: '/img/party10.jpg', bio: 'Need Text' },
  { name: 'Flower Girl: Sadee Knepper', img: '/img/SadeeKnepper.jpeg', bio: 'Need Text' },
  { name: 'Ring Security: William Knepper', img: '/img/WilliamKnepper.jpeg', bio: 'Need Text' },
];

const WeddingParty: React.FC = () => {
  const bookRef = useRef<any>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <div className="flex justify-center px-4">
      <HTMLFlipBook
        ref={bookRef}
        width={isMobile ? 280 : 400}
        height={isMobile ? 360 : 500}
        size="stretch"
        minWidth={280}
        maxWidth={600}
        minHeight={360}
        maxHeight={800}
        maxShadowOpacity={0.5}
        mobileScrollSupport={false}
        showCover={false}
        drawShadow={false}
        flippingTime={800}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        clickEventForward={false}
        useMouseEvents={true}
        swipeDistance={0}
        showPageCorners={true}
        disableFlipByClick={false}
        startPage={0}
        className="react-pageflip shadow-2xl"
        style={{}}
      >
<div className="bg-[#fff8f4] relative w-full h-full flex items-center justify-center p-6">
  <div className="flex flex-row items-end justify-center gap-4 max-w-full h-full">
    <img
      src="/img/daisy.png"
      alt="daisy"
      className="h-[85%] max-h-[90%] w-auto object-contain"
    />
    <img
      src="/img/violet.png"
      alt="violet"
      className="h-[85%] max-h-[90%] w-auto object-contain"
    />
  </div>
</div>






{/* RIGHT: Title & instructions */}
<div className="bg-[#fff8f4] relative w-full h-full flex flex-col items-end justify-between p-6 overflow-hidden">
  {/* Spine shadow */}
  <div className="absolute left-0 top-0 h-full w-[8px] bg-gradient-to-r from-[#e0d6cf] via-[#fff8f4] to-transparent opacity-60 z-10 pointer-events-none" />

  {/* Centered text box */}
  <div className="text-center mt-auto mb-auto z-20">
    <h1 className="text-3xl font-bold text-[#6a4e42] mb-3 tracking-wide">
      Wedding Party
    </h1>
    <p className="text-center text-gray-700 italic">
      Tap or click the page corners to meet the party.
    </p>
  </div>

  {/* Bottom-centered large silhouette */}
  <div className="w-full flex justify-center mt-4 z-10">
    <img
      src="/img/couple-silhouette.png"
      alt="couple silhouette"
      className="w-24 opacity-30"
    />
  </div>
</div>


  {/* MEMBER PAGES */}
  {partyMembers.map((member, i) => (
    <div
      key={i}
      className="bg-[#fff8f4] flex items-center justify-center w-full h-full relative"
    >
      <div className="absolute left-0 top-0 h-full w-[8px] bg-gradient-to-r from-[#e0d6cf] via-[#fff8f4] to-transparent opacity-60 z-10 pointer-events-none" />
      <div className="bg-white absolute top-[12%] right-[calc(50%-140px)] rounded-sm shadow-xl w-[280px] sm:w-[320px] pb-6 pt-2 px-2 flex flex-col items-center border border-gray-300 z-10">
        <img
          src={member.img}
          alt={member.name}
          className="object-cover w-full h-64 sm:h-72 border border-gray-200"
        />
        <div className="mt-2 px-2 text-[0.85rem] text-center text-gray-700 font-light leading-snug">
          <strong>{member.name}</strong>
          <br />
          {member.bio}
        </div>
      </div>

      <img
        src="/img/tape-top-right.png"
        alt="tape"
        className="absolute top-[10%] left-[calc(50%-195px)] w-12 rotate-[-90deg] opacity-80 z-20"
      />
      <img
        src="/img/tape-top-right.png"
        alt="tape"
        className="absolute top-[10%] right-[calc(50%-155px)] w-12 opacity-80 z-20"
      />
    </div>
  ))}
      </HTMLFlipBook>
    </div>
  );
};

export default WeddingParty;
