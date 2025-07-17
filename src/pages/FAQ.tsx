import * as Accordion from '@radix-ui/react-accordion';

export default function FAQ() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl mb-6 font-bold text-center">Frequently Asked Questions</h2>
      <Accordion.Root type="multiple" className="space-y-4">
        <Accordion.Item value="q1">
          <Accordion.Header>
            <Accordion.Trigger className="bg-[#f0f4ea] px-4 py-3 rounded w-full text-left font-semibold shadow">
              What should I wear?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="bg-white px-4 pt-2 pb-4 text-sm">
            Pastel semi-formal attire is encouraged.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="q2">
          <Accordion.Header>
            <Accordion.Trigger className="bg-[#f0f4ea] px-4 py-3 rounded w-full text-left font-semibold shadow">
              What's the theme?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="bg-white px-4 pt-2 pb-4 text-sm">
            Our theme is pastels, so feel free to coordinate if you would like!
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="q3">
          <Accordion.Header>
            <Accordion.Trigger className="bg-[#f0f4ea] px-4 py-3 rounded w-full text-left font-semibold shadow">
              Open Bar??????
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="bg-white px-4 pt-2 pb-4 text-sm">
            We will have an open bar that consists of 2 signature cocktails, beer, wine. We are asking you to tip our bar tenders, you can do that in cash or we will have a Venmo QR code for you to scan and tip that way!
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="q4">
          <Accordion.Header>
            <Accordion.Trigger className="bg-[#f0f4ea] px-4 py-3 rounded w-full text-left font-semibold shadow">
              Where can I park?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="bg-white px-4 pt-2 pb-4 text-sm">
            Idk honestly, just park on the street or something...
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="q5">
          <Accordion.Header>
            <Accordion.Trigger className="bg-[#f0f4ea] px-4 py-3 rounded w-full text-left font-semibold shadow">
              How early can I start drinking, I mean arrive?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="bg-white px-4 pt-2 pb-4 text-sm">
            Drink when you want, but the ceremony starts at 2:30 PM. Please arrive at least 30 minutes early.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="q6">
          <Accordion.Header>
            <Accordion.Trigger className="bg-[#f0f4ea] px-4 py-3 rounded w-full text-left font-semibold shadow">
              Doom scrolling during the the ceremony?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="bg-white px-4 pt-2 pb-4 text-sm">
            Please don't, pictures might be okay.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="q7">
          <Accordion.Header>
            <Accordion.Trigger className="bg-[#f0f4ea] px-4 py-3 rounded w-full text-left font-semibold shadow">
              Accommodations?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="bg-white px-4 pt-2 pb-4 text-sm">
            Bathrooms are handicap accessible, and for those who can't walk far we will transport them to and from the ceremony location of the venue.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}