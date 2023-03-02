import { Node } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, delay, waitFor } from "@motion-canvas/core/lib/flow";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { JetbrainText } from "../components/jetbrainText";
import { TechNumber } from "../components/techNumber";
import { TitleScreen } from "../components/titleScreeen";

export default makeScene2D(function* (view) {
  // Create your animations here
  const titleTransition = createRef<TitleScreen>();

  const container = createRef<Node>();
  view.add(
    <>
      <Node y={-250} ref={container}>
        <JetbrainText text={"KAMU BINGUNG"} fontSize={120} y={-200} />
        <JetbrainText text={"MAU JADI"} fontSize={180} y={-50} />
        <JetbrainText
          text={"FRONTEND"}
          fill={"green"}
          stroke={"green"}
          fontSize={185}
          y={120}
        />
        <JetbrainText text={"ATAU"} fontSize={180} y={300} />
        <JetbrainText
          text={"BACKEND"}
          fill={"red"}
          stroke={"red"}
          fontSize={200}
          y={500}
        />
        <JetbrainText text={"DEVELOPER?"} fontSize={140} y={680} />
      </Node>
      <TitleScreen ref={titleTransition} />
    </>
  );
  yield* waitFor(1.5);
  yield* all(
    delay(useDuration("d1"), container().opacity(0, 0)),
    titleTransition().animate()
  );
});
