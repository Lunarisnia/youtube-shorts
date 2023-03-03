import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { waitFor } from "@motion-canvas/core/lib/flow";
import { createRef } from "@motion-canvas/core/lib/utils";
import { TechNumber } from "../../components/techNumber";

export default makeScene2D(function* (view) {
  // Create your animations here
  const opening = createRef<TechNumber>();
  view.add(
    <TechNumber
      ref={opening}
      chapterTextNumber={"3"}
      sub1={"CARA MENAMAKAN VARIABEL"}
    />
  );
  yield* opening().animate(1);
  yield* waitFor(10);
});
