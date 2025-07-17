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
        showCover={true}
        drawShadow={true}
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
        className="shadow-2xl"
        style={{}}
      >
        {/* COVER PAGE */}
        <div className="bg-[#fff8f4] flex flex-col items-center justify-center p-4 relative">
          <img src="/img/rose-illustration.png" alt="decor" className="w-10 absolute top-2 left-2 opacity-20" />
          <h1 className="text-2xl font-bold mb-2">Wedding Party</h1>
          <p className="text-sm text-center">Click the corners to flip through the party!</p>
          <img src="/img/couple-silhouette.png" alt="decor" className="w-10 absolute bottom-2 right-2 opacity-20" />
        </div>

        {/* MEMBER PAGES */}
        {partyMembers.map((member, i) => (
          <div key={i} className="bg-white p-4 flex flex-col items-center justify-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-md mb-2"
            />
            <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm text-center px-2 sm:px-4">{member.bio}</p>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default WeddingParty;
