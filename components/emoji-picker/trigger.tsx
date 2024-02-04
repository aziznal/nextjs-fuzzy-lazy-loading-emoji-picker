"use client";

import { useEmojiPickerContext } from ".";

type EmojiPickerTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function EmojiPickerTrigger(props: EmojiPickerTriggerProps) {
  const { setOpen } = useEmojiPickerContext();

  return (
    <div {...props} onClick={() => setOpen(true)} id="emoji-picker-trigger" />
  );
}
