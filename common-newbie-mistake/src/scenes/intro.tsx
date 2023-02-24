import { Circle, Text } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { loop, waitFor } from "@motion-canvas/core/lib/flow";
import { createSignal } from "@motion-canvas/core/lib/signals";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";

export default makeScene2D(function* (view) {
  // Create your animations here
  //   const variabelText = createRef<Text>();
  //   view.add(
  //     <>
  //       <Text
  //         ref={variabelText}
  //         fontSize={100}
  //         fontWeight={800}
  //         fill={"#fff"}
  //         fontFamily={'"JetBrains Mono", monospace'}
  //         maxWidth={1080}
  //         textWrap={"pre"}
  //         justifyContent={"center"}
  //         alignItems={"center"}
  //         text={`VARIABEL`}
  //       ></Text>
  //     </>
  //   );
  const radius = createSignal(3);
  const scale = 100;
  view.add(<Circle width={() => radius() * scale} height={() => radius() * scale} fill={"#fff"} />);
  yield* loop(10, () => radius(6, 0.1).to(3, 0.3))
  yield* waitFor(useDuration("partOnePad"));
});
