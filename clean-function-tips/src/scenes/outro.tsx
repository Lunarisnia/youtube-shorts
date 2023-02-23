import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { Text } from "@motion-canvas/2d/lib/components";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { Direction } from "@motion-canvas/core/lib/types";
import { all } from "@motion-canvas/core/lib/flow";
import { CodeBlock, insert, edit } from "@motion-canvas/2d/lib/components/CodeBlock";
export default makeScene2D(function* (view) {
  const satu = createRef<Text>();
  view.add(
    <Text
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
  yield* waitFor(8);
});
