import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { CodeBlock, edit, insert, lines, range, remove } from "@motion-canvas/2d/lib/components/CodeBlock";
import { createRef } from "@motion-canvas/core/lib/utils";
import { waitFor } from "@motion-canvas/core/lib/flow";
export default makeScene2D(function* (view) {
  const codeBlock = createRef<CodeBlock>();

  yield view.add(
    <CodeBlock
      language="js"
      ref={codeBlock}
      code={`
      for(let i = 0; i < 10; i++) {
        console.log(i); 
      }
      `}
    />
  );
  yield* codeBlock().edit(1.2)`
  for(let i = 0; i < 10; i++) {
    console.log(${insert(`i + 120`)}); 
  }
  ${insert(`// This stuff is newly added`)}
  `

  yield* codeBlock().edit(2)`
  for(let i = 0; i < 10; i++) {
    console.log(i + 120); 
  }
  ${remove(`// This stuff is newly added`)}
  `
  yield* codeBlock().edit(2, lines(0, Infinity))`
  for(let i = 0; i < 10; i++) {
    console.log(${edit(`i + 120`, `"Hello, World!"`)}); 
  }

  `
});
