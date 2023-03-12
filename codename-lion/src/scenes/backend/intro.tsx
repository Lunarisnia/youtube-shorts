import { Img, Node } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, delay, waitFor } from "@motion-canvas/core/lib/flow";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { JetbrainText } from "../../components/jetbrainText";
import { TitleScreen } from "../../components/titleScreeen";

import dollar from "../../images/dollar.png";

export default makeScene2D(function* (view) {
  // Create your animations here
  const titleTransition = createRef<TitleScreen>();

  const container = createRef<Node>();
  view.add(
    <>
      <Node y={-400} ref={container}>
        <JetbrainText text={"3 ALASAN"} fontSize={200} y={-240} />
        <JetbrainText text={"KENAPA"} fontSize={180} y={-50} />
        <JetbrainText
          text={"KAMU HARUS"}
          fill={"green"}
          stroke={"green"}
          fontSize={150}
          y={120}
        />
        <JetbrainText text={"JADI"} fontSize={180} y={300} />
        <JetbrainText
          text={"BACKEND"}
          fill={"red"}
          stroke={"red"}
          fontSize={200}
          y={500}
        />
        <JetbrainText text={"DEVELOPER?"} fontSize={140} y={680} />
        <Img src={dollar} y={1000} />
      </Node>
      <TitleScreen ref={titleTransition} />
    </>
  );
  yield* waitFor(useDuration("to1"));
});
