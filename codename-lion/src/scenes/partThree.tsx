import { Line, Rect } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, delay, waitFor } from "@motion-canvas/core/lib/flow";
import { easeOutCubic, tween } from "@motion-canvas/core/lib/tweening";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { TechNumber } from "../components/techNumber";

export default makeScene2D(function* (view) {
  // Create your animations here
  const opening = createRef<TechNumber>();

  const houseBase = createRef<Rect>();
  const door = createRef<Rect>();
  const triangle = createRef<Line>();
  view.add(
    <>
      <TechNumber
        ref={opening}
        chapterTextNumber={"3"}
        sub1={"KREATIFITAS TINGGI"}
      />

      <Rect ref={houseBase} x={200} width={400} height={400} fill={"#0000cb"} />
      <Rect ref={door} y={400} width={100} height={200} fill={"#00ad62"} />
      <Line
        x={-250}
        y={200}
        ref={triangle}
        points={[
          [100, 0],
          [-100, 0],
          [0, -100],
        ]}
        scale={2}
        closed
        lineWidth={0}
        fill={"#cb0000"}
      />
    </>
  );
  yield* houseBase().position.y(1200, 0);
  yield* door().position.y(1200, 0);
  yield* triangle().position.y(1200, 0);
  yield* opening().animate(1);
  yield* all(
    tween(0.2, (value) => {
      houseBase().position.y(easeOutCubic(value, 1200, 0));
    }),
    delay(
      0.1,
      tween(0.2, (value) => {
        door().position.y(easeOutCubic(value, 1200, 400));
      })
    ),
    delay(
      0.2,
      tween(0.2, (value) => {
        triangle().position.y(easeOutCubic(value, 1200, 200));
      })
    ),
  );
  yield* waitFor(2);
  yield* houseBase().position([0, 100], 1)
  yield* triangle().position([0, -100], 1)
  yield* door().position([-50, 200], 1)
  yield* waitFor(useDuration("toOut"))
});
