import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, delay, loop, waitFor } from "@motion-canvas/core/lib/flow";
import { Direction, Vector2 } from "@motion-canvas/core/lib/types";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { finishScene, useDuration } from "@motion-canvas/core/lib/utils";
import { createRef } from "@motion-canvas/core/lib/utils";
import { ChapterTitle } from "../components/chapterTitle";

export default makeScene2D(function* (view) {
  const chapterTitle = createRef<ChapterTitle>();
  view.add(
    <ChapterTitle ref={chapterTitle} chapterNumberText={"2"} chapterTitleText={"MALES\nGOOGLING"} />
  );
  yield* chapterTitle().animate();
  yield* waitFor(5);
});
