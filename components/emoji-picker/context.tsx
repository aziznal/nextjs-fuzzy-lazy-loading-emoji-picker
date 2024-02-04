"use client";

import { createContext, useContext, useState } from "react";

type EmojiPickerContext = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onEmojiClick: (emoji: string) => void;
};

export const EmojiPickerContext = createContext<EmojiPickerContext>({
  open: false,
  setOpen: () => {},
  onEmojiClick: () => {},
});

export const useEmojiPickerContext = () => {
  const context = useContext(EmojiPickerContext);

  if (!context) {
    throw new Error("EmojiPicker elements must be used within an EmojiPicker");
  }

  return context;
};

export const EmojiPicker = (
  props: Partial<EmojiPickerContext> & { children: React.ReactNode }
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EmojiPickerContext.Provider
      value={{
        open: props.open ?? isOpen,
        setOpen: props.setOpen ?? setIsOpen,
        onEmojiClick: props.onEmojiClick ?? (() => {}),
      }}
    >
      {props.children}
    </EmojiPickerContext.Provider>
  );
};
