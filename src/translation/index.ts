import en from "./en";
import hi from "./hi";
import ta from "./ta";

export const translations = {
  en,
  hi,
  ta,
};

export type Language = keyof typeof translations;