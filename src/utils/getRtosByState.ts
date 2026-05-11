import { RTOS } from "../data/rtos";

export const getRtosByState = (stateCode: string) => {
  return RTOS[stateCode] || [];
};