import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { waitFor } from "@motion-canvas/core/lib/flow";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { TechNumber } from "../components/techNumber";
import { Direction } from "@motion-canvas/core/lib/types";
import { Line, Node } from "@motion-canvas/2d/lib/components";
import {
  easeInBounce,
  easeInOutBounce,
  easeOutBounce,
  easeOutCubic,
  tween,
} from "@motion-canvas/core/lib/tweening";
import { JetbrainText } from "../components/jetbrainText";

export default makeScene2D(function* (view) {
  // Create your animations here
  const opening = createRef<TechNumber>();

  const leftCliff = createRef<Node>();
  const rightCliff = createRef<Node>();

  const bridge = createRef<Line>();
  const frontend = createRef<JetbrainText>();
  view.add(
    <>
      <TechNumber
        ref={opening}
        chapterTextNumber={"2"}
        sub1={"KAMU ADALAH FOKUS UTAMA"}
      />

      <Node ref={leftCliff} opacity={0} x={-290}>
        <Line
          x={-500}
          stroke={"#fff"}
          closed
          fill={"#fff"}
          lineWidth={0}
          points={[
            [-100, 800],
            [190, 300],
            [150, 200],
            [170, 100],
            [200, 0],
            [-100, 0],
          ]}
        />
        <JetbrainText text={"USER"} fontSize={100} y={-100} x={-400} />
      </Node>
      <Node ref={rightCliff} opacity={1} x={350}>
        <Line
          x={500}
          stroke={"#fff"}
          closed
          fill={"#fff"}
          lineWidth={0}
          points={[
            [100, 800],
            [-190, 300],
            [-150, 200],
            [-170, 100],
            [-200, 0],
            [100, 0],
          ]}
        />
        <JetbrainText text={"BACKEND"} fontSize={70} y={-100} x={380} />
      </Node>

      <Line
        ref={bridge}
        stroke={"#fff"}
        lineWidth={10}
        y={5}
        points={[
          [-400, 0],
          [-400, 0],
        ]}
      />
      <JetbrainText ref={frontend} text={`FRONTEND`} fontSize={100} y={1200} />
    </>
  );
  yield* slideTransition(Direction.Right);
  yield* opening().animate(0.8);
  yield* leftCliff().opacity(1, 0);
  yield* waitFor(1);
  yield* tween(1, (value) => {
    leftCliff().position.x(easeOutBounce(value, leftCliff().position.x(), 0));
  });
  yield* tween(1, (value) => {
    rightCliff().position.x(easeOutBounce(value, rightCliff().position.x(), 0));
  });
  yield* bridge().points([
    [-400, 0],
    [400, 0],
  ], 2);
  yield* tween(1, value => {
    frontend().position.y(easeOutCubic(value, 1200, 100));
  });
  yield* waitFor(useDuration("to3"));
});
