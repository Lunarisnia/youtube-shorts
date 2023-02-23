import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { Direction, Vector2 } from "@motion-canvas/core/lib/types";
import {
  fadeTransition,
  zoomOutTransition,
} from "@motion-canvas/core/lib/transitions";
import { Image, Rect, Text } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import { CodeBlock, edit } from "@motion-canvas/2d/lib/components/CodeBlock";
import googleLogo from "../images/googleLogo.png";

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
      text={`1`}
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
  yield* titleRef().text(`PAKAI GAYA\nPENAMAAN YANG\nBENAR`, 0.48);
  const questionGroup = createRef<Rect>();
  yield view.add(
    <Rect y={-300} x={1000} ref={questionGroup}>
      <Rect fill={"#373737"} height={350} width={900} radius={80}>
        <CodeBlock
          language="js"
          code={`
          function ..........() {
            const balls = ["Balls"]
            return balls.length;
          }`}
        />
      </Rect>
      <Text
        y={250}
        fontSize={55}
        fontWeight={800}
        fill={"#fff"}
        fontFamily={'"JetBrains Mono", monospace'}
        maxWidth={1080}
        textWrap={"pre"}
        justifyContent={"center"}
        alignItems={"center"}
        text={` Nama fungsi mana yang cocok\nuntuk kode Javascript diatas?`}
      />
      <Text
        y={700}
        fontSize={100}
        fontWeight={800}
        fill={"#fff"}
        fontFamily={'"JetBrains Mono", monospace'}
        maxWidth={1080}
        textWrap={"pre"}
        justifyContent={"center"}
        alignItems={"center"}
        text={`A. CountBalls\n\nB. countBalls\n\nC. count_balls`}
      />
    </Rect>
  );
  const selectionRect = createRef<Rect>();
  // 150, 390, 630
  view.add(
    <Rect
      stroke={"#aeaeae"}
      lineWidth={20}
      height={200}
      width={900}
      y={150}
      x={3000}
      ref={selectionRect}
    />
  );

  yield* all(
    questionGroup().position.x(0, 0.5),
    selectionRect().position.x(0, 0.7)
  );
  const questionCode = createRef<CodeBlock>();
  yield view.add(
    <CodeBlock
      ref={questionCode}
      language="js"
      y={-300}
      code={`
          function ..........() {
            const balls = ["Balls"]
            return balls.length;
          }`}
    />
  );
  yield* selectionRect()
    .position.y(390, 1)
    .to(630, 1)
    .to(150, 1.5)
    .to(630, 1.5)
    .to(390, 2);
  yield* selectionRect().stroke(`#4caf50`, 0);
  yield* waitFor(0.2);
  yield* all(
    questionGroup().scale(new Vector2(0, 0), 0.3),
    selectionRect().position.x(-1900, 0.2),
    questionCode().position.y(0, 0.3),
    questionCode().edit(0.5)`function ${edit(`..........`, `countBalls`)}() {
    const balls = ["Balls"]
    return balls.length;
}
    `
  );
  yield* all(
    questionCode().edit(1)`${edit(
      `function countBalls() {
    const balls = ["Balls"]
    return balls.length;
}
`,
      `def countBalls():`
    )}`,
    questionCode().language("py", 0)
  );
  yield* questionCode().fontSize(100, 0.2);
  yield* questionCode().edit(1)`def ${edit(`countBalls`, `count_balls`)}():`;
  yield* questionCode().position.x(-1300, 0.2);
  const googleRef = createRef<Image>();
  view.add(
    <Image src={googleLogo} height={300} ref={googleRef} y={-200} x={1300} />
  );
  const searchBar = createRef<Rect>();
  const topic = createRef<Text>();
  const language = createRef<Text>();
  view.add(
    <Rect
      ref={searchBar}
      y={100}
      height={0}
      width={0}
      lineWidth={10}
      radius={0}
      stroke={"#fff"}
    >
      <Text
        ref={topic}
        fontSize={0}
        x={100}
        fontWeight={800}
        fill={"#fff"}
        fontFamily={'"JetBrains Mono", monospace'}
        maxWidth={1080}
        textWrap={"pre"}
        justifyContent={"center"}
        alignItems={"center"}
        text={`function naming convention`}
      />
      <Text
        ref={language}
        fontSize={0}
        x={-290}
        fontWeight={800}
        fill={"#d32f2f"}
        fontFamily={'"JetBrains Mono", monospace'}
        maxWidth={1080}
        textWrap={"pre"}
        justifyContent={"center"}
        alignItems={"center"}
        text={`Javascript`}
      />
    </Rect>
  );
  yield* googleRef().position.x(0, 0.8);
  yield* all(
    searchBar().size(new Vector2(900, 150), 0.3),
    topic().fontSize(35, 0.6),
    language().fontSize(35, 0.7),
    searchBar().radius(90, 0.9)
  );
    yield* language().text("Python", 0.2).to("C#", 0.3).to("Golang", 0.3).to("C++", 0.3).to("Java", 0.3).to("Ruby", 0.3).to("PHP", 0.3).to("Javascript", 0.3);
});
