export default function Details() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl mb-2 font-bold">Wedding Date</h2>
      <p>May 23, 2026</p>
      <h2 className="text-2xl mb-2 font-bold">Venue Info</h2>
      <p>The wedding will be held at Three Gables Barn, 2269 Newville Rd, Carlisle, PA. 17015</p>
      <h2 className="text-2xl mt-6 mb-2 font-bold">Tentative Timeline</h2>
      <ul className="list-disc ml-6">
        <li>2:30 PM  -  Ceremony Begins</li>
        <li>3:00 PM  -  Cocktail Hour</li>
        <li>4:00 PM  -  First Dance and Speeches</li>
        <li>4:30 PM  -  Let's Eat</li>
        <li>5:30 PM  -  Time to Dance</li>
        <li>6:30 PM  -  Cut the Cake</li> 
        <li>7:30 PM  -  Sparkler Exit</li>
        <li>8:00 PM  -  After Party</li>
        <li>10:00 PM -  Party's Over</li>
      </ul>
    </div>
  );
}