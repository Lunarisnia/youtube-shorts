import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { Txt } from "@motion-canvas/2d/lib/components";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { Direction } from "@motion-canvas/core/lib/types";
export default makeScene2D(function* (view) {
  const satu = createRef<Txt>();
  view.add(
    <Txt
      ref={satu}
      fontSize={100}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={` SUBSCRIBE\nLIKE/FOLLOW`}
    />
  );

  yield* slideTransition(Direction.Right, 0.2);
  yield* waitFor(10);
});
