"use client";

import { useEffect, useState } from "react";

/** Types out the text one character at a time, then drops the blinking cursor. */
export default function TypedHeadline({
  text,
  startDelay = 600,
  speed = 68,
}: {
  text: string;
  startDelay?: number;
  speed?: number;
}) {
  const [chars, setChars] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let doneTimer: ReturnType<typeof setTimeout>;
    const start = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i++;
        setChars(i);
        if (i >= text.length) {
          clearInterval(interval);
          doneTimer = setTimeout(() => setFinished(true), 900);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
      clearTimeout(doneTimer);
    };
  }, [text, startDelay, speed]);

  return (
    <span aria-label={text}>
      <span aria-hidden="true">{text.slice(0, chars)}</span>
      {!finished && <span aria-hidden="true" className="gpe-cursor">&thinsp;</span>}
    </span>
  );
}
