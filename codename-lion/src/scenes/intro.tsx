import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { waitFor } from "@motion-canvas/core/lib/flow";
import { createRef } from "@motion-canvas/core/lib/utils";
import { TechNumber } from "../components/techNumber";
import { TitleScreen } from "../components/titleScreeen";

export default makeScene2D(function* (view) {
  // Create your animations here
  const titleTransition = createRef<TitleScreen>();
  view.add(<TitleScreen ref={titleTransition} />);

  yield* waitFor(2);
  yield* titleTransition().animate();
});
