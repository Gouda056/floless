export interface FAQType {
  question: string;
  summary: string;
  num: string;
  expanded: boolean;
  id: number;
  // setOpen?: (status: boolean) => void;
}

export const faqs: FAQType[] = [
  {
    num: "1",
    question: "What is Floless ?",
    summary:
      "Floless is a platform designed for professional photographers to share wedding or event photos, videos, and reels with wedding and event guests. It offers various customization options to enhance the viewing experience for both photographers and guests.",
    expanded: true,
    id: 0,
  },
  {
    num: "2",
    question: "How can I use Floless as a photographer ?",
    summary:
      "As a photographer, you can create galleries for specific events or weddings, upload your photos and videos, and organize them for easy sharing with your clients and their guests.",
    expanded: false,
    id: 1,
  },
  {
    num: "3",
    question:
      "	What customization options does Floless offer for photos, videos, and reels?",
    summary:
      "It may sound like a good choice but picture this situation - You just delivered the content via a beautifully handcrafted landing page for a bride and groom, they are already excited to their pictures and with your page available, they can just share a link with their friend and family. They don't need to worry about losing a physical disk ever. How cool is that ?",
    expanded: false,
    id: 2,
  },
  {
    num: "4",
    question: "Can I use AI-enabled face recognition on Floless? ",
    summary:
      "Yes, Floless offers AI-enabled face recognition. Guests can upload a selfie, and our system will automatically match their face with the event's photos, making it easy for them to find and download their pictures.",
    expanded: false,
    id: 3,
  },
  {
    num: "5",
    question: "How do guests access the photos and videos shared on Floless?  ",
    summary:
      "Yes, Floless offers AI-enabled face recognition. Guests can upload a selfie, and our system will automatically match their face with the event's photos, making it easy for them to find and download their pictures.",
    expanded: false,
    id: 4,
  },
  {
    num: "6",
    question:
      "Is Floless suitable for both weddings and other types of events? ",
    summary:
      "Yes, Floless offers AI-enabled face recognition. Guests can upload a selfie, and our system will automatically match their face with the event's photos, making it easy for them to find and download their pictures.",
    expanded: false,
    id: 5,
  },
  {
    num: "7",
    question: "How do I get started with Floless? ",
    summary:
      "Yes, Floless offers AI-enabled face recognition. Guests can upload a selfie, and our system will automatically match their face with the event's photos, making it easy for them to find and download their pictures.",
    expanded: false,
    id: 6,
  },
  {
    num: "8",
    question: "Is there a cost associated with using Floless? ",
    summary:
      "Floless offers both free and premium subscription options for photographers, with varying levels of features and customization. Guests can typically access galleries for free.",
    expanded: false,
    id: 7,
  },
  {
    num: "9",
    question: "How secure is Floless for sharing event photos and videos? ",
    summary:
      "Floless prioritizes the security and privacy of your content. We employ robust encryption and security measures to protect the photos, videos, and personal data of photographers and guests.",
    expanded: false,
    id: 8,
  },
  {
    num: "10",
    question:
      "Can I collaborate with other photographers on Floless for the same event? ",
    summary:
      "Yes, Floless supports collaboration. Multiple photographers can contribute to the same event or wedding gallery, ensuring that all aspects of the event are captured and shared seamlessly.",
    expanded: false,
    id: 9,
  },
];
