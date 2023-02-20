import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { Text } from "@motion-canvas/2d/lib/components";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { Direction } from "@motion-canvas/core/lib/types";
import { all } from "@motion-canvas/core/lib/flow";
import {
  CodeBlock,
  insert,
  edit,
} from "@motion-canvas/2d/lib/components/CodeBlock";
export default makeScene2D(function* (view) {
  const satu = createRef<Text>();
  view.add(
    <Text
      ref={satu}
      fontSize={400}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`4`}
    />
  );

  yield* slideTransition(Direction.Right, 0.2);
  yield* waitFor(1.6);
  yield* satu().text("", 0.1);

  const badCode = createRef<CodeBlock>();
  yield view.add(
    <CodeBlock
      ref={badCode}
      fontSize={55}
      language="ts"
      code={`
    `}
    />
  );
  yield* badCode().edit(1, false)`${insert(`function count_the_chickens() {
  // Logic ...
}
  `)}`;
  yield* badCode().edit(1, false)`
function count_the_chickens() {
  // Logic ...
}${insert(`\n\n
function myNewFunction() {
  // Logic ...
}`)}
`;
yield* waitFor(3);
yield* badCode().edit(1, false)`
function count_the_chickens() {
  // Logic ...
}\n\n
function ${edit(`myNewFunction`, `my_new_function`)}() {
  // Logic ...
}
`;
yield* waitFor(3);
});
