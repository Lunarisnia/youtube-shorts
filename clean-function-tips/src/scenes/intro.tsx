import { Circle, Rect, Text } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { waitFor } from "@motion-canvas/core/lib/flow";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { CodeBlock } from "@motion-canvas/2d/lib/components/CodeBlock";

export default makeScene2D(function* (view) {
  const introText = createRef<Text>();
  const functionText = createRef<Text>();
  view.add(
    <Text
      ref={introText}
      y={-300}
      fontSize={90}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`  JANGAN NULIS\n     FUNGSI\nKAYAK GINI LAGI!`}
    />
  );
  const badCode = createRef<CodeBlock>();
  yield view.add(
    <CodeBlock
      ref={badCode}
      fontSize={60}
      y={170}
      language="js"
      code={`
  function multiply(x, y) {
    return x - y;
  }
  `}
    />
  );
  yield* waitFor(useDuration("introOne"));
  yield* introText().text("", 0);
  badCode().remove();
  view.add(
    <Text
      x={-360}
      y={-400 + 250}
      fontSize={600}
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
  yield* waitFor(useDuration("4TIPS"));
  view.add(
    <Text
      x={150}
      y={-540 + 250}
      fontSize={300}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`TIPS`}
    />
  );
  yield* waitFor(useDuration("4TIPSMENULIS"));
  view.add(
    <Text
      x={170}
      y={-280 + 250}
      fontSize={160}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`MENULIS`}
    />
  );
  yield* waitFor(useDuration("4TIPSMENULISFUNGSI"));
  const funcRect = createRef<Rect>();
  view.add(
    <Rect ref={funcRect} height={1920} width={1200} y={1000} fill={"#141414"} stroke={"#141414"}>
      <Text
        ref={functionText}
        // y={50 + 250}
        y={-800}
        fontSize={280}
        fontWeight={800}
        fill={"#d32f2f"}
        fontFamily={'"JetBrains Mono", monospace'}
        maxWidth={1080}
        textWrap={"pre"}
        justifyContent={"center"}
        alignItems={"center"}
        text={`FUNGSI`}
      />
    </Rect>
  );
  yield* waitFor(0.1);
  yield* funcRect().position.y(1500, 0.3).to(-900, 0.4 )
});
