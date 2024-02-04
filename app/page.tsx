"use client";

import { EmojiPicker, EmojiPickerPopup } from "@/components/emoji-picker";
import EmojiPickerTrigger from "@/components/emoji-picker/trigger";

export default function Home() {
  return (
    <div className="p-12">
      <EmojiPicker onEmojiClick={console.log}>
        <EmojiPickerTrigger className="p-4 border rounded-md hover:bg-slate-100 transition-colors cursor-pointer w-fit">
          Open Emoji Picker
        </EmojiPickerTrigger>

        <EmojiPickerPopup />
      </EmojiPicker>
    </div>
  );
}
