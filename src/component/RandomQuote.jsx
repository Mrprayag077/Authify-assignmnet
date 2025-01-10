import { memo } from "react";

const RandomQuote = memo(() => {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "It is never too late to be what you might have been.",
    "You miss 100% of the shots you don’t take.",
    "Do what you can, with what you have, where you are.",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Believe you can and you're halfway there.",
    "Don't wait. The time will never be just right. – Napoleon Hill",
    "A journey of a thousand miles begins with a single step. – Lao Tzu",
    "The best revenge is massive success. – Frank Sinatra",
    "Don't watch the clock; do what it does. Keep going",
    "You are never too old to set another goal or to dream a new dream.",
    "Dream big and dare to fail.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);

  return (
    
    <p className="text-lg mt-6 font-medium  text-center text-gray-800">
      <span className="text-[#6358DC] font-semibold">Quote</span>
      <span className="border-l-4 border-[#6358DC] mx-3 h-5 inline-block"></span>
      <span className="text-gray-600 italic text-xl">{`"${quotes[randomIndex]}"`}</span>
    </p>

  );
});

export default RandomQuote;
