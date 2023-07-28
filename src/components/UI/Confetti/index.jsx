import { useWindowSize } from "@uidotdev/usehooks";
import React from "react";
import Confetti from "react-confetti";

export default function ConfettiScreen() {
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} />;
}
