import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { Direction, Vector2 } from "@motion-canvas/core/lib/types";
import {
  fadeTransition,
  zoomOutTransition,
} from "@motion-canvas/core/lib/transitions";
import { Image, Rect, Text } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import { CodeBlock, edit, insert, lines, word } from "@motion-canvas/2d/lib/components/CodeBlock";
import goGopher from "../images/goGopher.png";
import capybara from "../images/capybara.jpg";

export default makeScene2D(function* (view) {
  // Create your animations here
  const one = createRef<Text>();
  view.add(
    <Text
      ref={one}
      x={0}
      y={0}
      fontSize={500}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`2`}
    />
  );
  yield* one().position(new Vector2(-380, -700), 0.2);
  yield* one().fontSize(300, 0.2);
  const titleRef = createRef<Text>();
  view.add(
    <Text
      ref={titleRef}
      x={10}
      y={-720}
      fontSize={70}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={``}
    />
  );
  yield* titleRef().text(`PASTIIN NAMA\nFUNGSI KAMU\nSESUAI`, 0.48);
  const imageRefGopher = createRef<Image>();
  const imageRefCapybara = createRef<Image>();
  const changeImageRef = createRef<CodeBlock>();
  view.add(
    <>
      <Image src={goGopher} height={400} y={-300} ref={imageRefGopher} opacity={0} />
      <Image src={capybara} height={400} y={-300} ref={imageRefCapybara} opacity={0} />
      <CodeBlock
        language="js"
        code={`
      function setImage(imageName) {
        // Logic ...
      }
      `}
        y={150}
        opacity={0}
        ref={changeImageRef}
      />
    </>
  );
  yield* all(imageRefGopher().opacity(1, 0.5), changeImageRef().opacity(1, 0.7));
  yield* changeImageRef().edit(1)`
  function setImage(imageName) {
    // Logic ...
  }${insert(`\n\nsetImage("Masbro");`)}
  `;   
  yield* imageRefGopher().opacity(0, 0.5)
  yield* imageRefCapybara().opacity(1, 0.5)
  yield* waitFor(0.2);
  yield* imageRefCapybara().opacity(0, 0.5)
  yield* changeImageRef().edit(1)`
  ${edit(`function setImage(imageName) {
  // Logic ...
}

setImage("Masbro");`, `function multiply(x, y) {
  return x - y;
}  
  `)}
  `;
  yield* changeImageRef().fontSize(65, 0.5)
  yield* changeImageRef().selection(word(0, 9, 8), 0.3)
  yield* waitFor(1.9);
  yield* changeImageRef().selection(word(1, 2, 13), 0.3)
  yield* waitFor(1.8); 
  yield* changeImageRef().edit(0.6)`function ${edit(`multiply`, `subtract`)}(x, y) {
  return x - y;
}

  `;
  yield* changeImageRef().selection(lines(0, Infinity), 0.5)
  yield* waitFor(0.25);
});
