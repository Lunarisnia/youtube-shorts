import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { waitFor } from "@motion-canvas/core/lib/flow";
import { createRef } from "@motion-canvas/core/lib/utils";
import { Switch } from "../components/switch";

export default makeScene2D(function* (view) {
  // Create your animations here
  const switchRef = createRef<Switch>();
  view.add(<Switch initialState={false} ref={switchRef} />);
  yield* switchRef().toggle(1)
  yield* waitFor(5);
});
