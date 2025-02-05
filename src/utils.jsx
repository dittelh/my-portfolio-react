import { useState } from "react";

export function useScrollPosition() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollBottom, setScrollBottom] = useState(0);

  const onScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const clientHeight = event.target.clientHeight;
    const scrollBottom = scrollHeight - scrollTop - clientHeight;

    setScrollTop(scrollTop);
    setScrollBottom(scrollBottom);
  };

  return [scrollTop, scrollBottom, { onScroll }];
}
