"use client";

import * as emoji from "node-emoji";
import { useState } from "react";

const allEmojies = emoji.search("");

export default function Home() {
  const [currentEmojies, setCurrentEmojies] = useState([...allEmojies]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    if (search === "") {
      setCurrentEmojies(allEmojies);
      return;
    }

    const result = emoji.search(search);

    setCurrentEmojies(result);
  };

  return (
    <div className="h-full justify-center items-center flex flex-wrap text-4xl">
      <input
        type="text"
        placeholder="Search for an emoji"
        className="w-full p-2"
        onChange={handleSearch}
      />

      {currentEmojies.map((e) => (
        <span key={e.emoji} className="px-2">
          {e.emoji}
        </span>
      ))}
    </div>
  );
}
