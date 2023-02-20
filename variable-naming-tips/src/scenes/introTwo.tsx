import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { Text } from "@motion-canvas/2d/lib/components";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { Direction } from "@motion-canvas/core/lib/types";
import {all} from '@motion-canvas/core/lib/flow';
export default makeScene2D(function* (view) {
  const mauTau = createRef<Text>();
  view.add(
    <Text
      ref={mauTau}
      // y={-1000}
      fontSize={100}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`MAU TAU`}
    />
  );
  // yield* text01().text("STOP NAMAIN\nVARIABEL\nKAMU KAYAK GINI", 1)
  // yield* stopNamain().position.y(400, 1)
  // yield * waitUntil('event'); // wait for an event called "event"
  yield* slideTransition(Direction.Left, 0.2);
  yield* mauTau().text(`MAU TAU\nGIMANA YANG\nBAGUS?`, useDuration("gmnYangBagus"))
  yield* mauTau().text(``, 0.5)
  yield* mauTau().text(`4 TIPS\nPENAMAAN\nVARIABEL`, useDuration("empatTips"))
  yield* mauTau().position.x(0, 0.2);
  yield* mauTau().rotation(30, 0.2);
  yield* mauTau().position.x(-800, 0.2);
  yield* all(mauTau().rotation(0, 0.1));
});
