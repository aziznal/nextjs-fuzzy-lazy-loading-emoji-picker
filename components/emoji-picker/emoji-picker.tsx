"use client";

import * as emoji from "node-emoji";
import { useEffect, useRef, useState } from "react";
import { useEmojiPickerContext } from ".";
import { Input } from "../ui/input";

const allEmojies = emoji.search("");

export function EmojiPickerPopup() {
  const [currentEmojies, setCurrentEmojies] = useState(allEmojies);

  const { open, setOpen, onEmojiClick } = useEmojiPickerContext();

  const popupRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    if (search === "") {
      setCurrentEmojies(allEmojies);
      return;
    }

    const result = emoji.search(search.toLowerCase());

    setCurrentEmojies(result);
  };

  // close the popup when the user clicks outside of it
  useEffect(() => {
    if (!window) return;

    const closePopup = (e: MouseEvent) => {
      // if clicked element has id of "emoji-picker-trigger" then don't close the popup
      if ((e.target as HTMLElement).id === "emoji-picker-trigger") {
        return;
      }

      if (popupRef.current?.contains(e.target as Node)) {
        return;
      }

      setOpen(false);
    };

    window.addEventListener("click", closePopup);

    return () => {
      window.removeEventListener("click", closePopup);
    };
  }, [open, setOpen]);

  // reset search bar when the popup is closed
  useEffect(() => {
    if (!open) {
      setCurrentEmojies(allEmojies);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="border w-[500px] p-4 rounded-xl" ref={popupRef}>
      <Input
        type="text"
        placeholder="Search for an emoji"
        className="w-full mb-4"
        onChange={handleSearch}
      />

      <div className="h-[400px] overflow-y-auto rounded-lg grid grid-cols-7 text-4xl [&_*]:w-[48px] select-none">
        {currentEmojies.map((e) => (
          <span
            key={e.emoji}
            className={`
              flex
              justify-center
              items-center
              w-[48px]
              h-[48px]
              text-[26px]
              text-center
              cursor-pointer
              p-2
              rounded-full
              hover:bg-slate-100
              transition-colors
              duration-100
              `}
            onClick={() => onEmojiClick(e.emoji)}
          >
            {e.emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
