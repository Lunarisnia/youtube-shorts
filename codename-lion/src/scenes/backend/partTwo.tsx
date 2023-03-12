import {
  CodeBlock,
  edit,
  insert,
  lines,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { createRef } from "@motion-canvas/core/lib/utils";
import { TechNumber } from "../../components/techNumber";

import databaseIcon from "../../images/database.svg";
import chatgptIcon from "../../images/chatgpt.png";
import { JetbrainText } from "../../components/jetbrainText";
import { Img, Layout, Node } from "@motion-canvas/2d/lib/components";

export default makeScene2D(function* (view) {
  // Create your animations here
  const opening = createRef<TechNumber>();

  const database = createRef<Img>();
  const chatgpt = createRef<Img>();
  // TODO: add text for the task to create a loop to display 1-3
  // Then show this code and the wrong input, make some question mark popup
  // then fix the damn code, sync it with "atensi kepada detil2 kecil"

  const questionContainer = createRef<Node>();
  const outputContainer = createRef<Layout>();
  const wrongCode = createRef<CodeBlock>();

  const qMark1 = createRef<JetbrainText>();
  const qMark2 = createRef<JetbrainText>();
  view.add(
    <>
      <TechNumber
        ref={opening}
        chapterTextNumber={"2"}
        sub1={"LOGIC SKILL TERASAH"}
      />

      <Img
        position={[30, 0]}
        ref={database}
        height={600}
        src={databaseIcon}
      />
      <Img
        position={[1200, 1200]}
        ref={chatgpt}
        height={600}
        src={chatgptIcon}
      />

      <Node ref={questionContainer} position={[1200, 1200]}>
        <JetbrainText ref={qMark1} scale={0} x={300} y={300} rotation={30} text={"?"} fontSize={300} />
        <JetbrainText ref={qMark2} scale={0} x={-300} y={300} text={"?"} rotation={-30} fontSize={300} />
        <JetbrainText
          y={-250}
          text={"Buatlah program yang menampilkan\nangka 1-3 dengan bahasa C++"}
        />
        <CodeBlock ref={wrongCode} language="cpp" code={``} />
        <Layout
          ref={outputContainer}
          layout
          direction={"column"}
          y={300}
          fontSize={100}
        ></Layout>
      </Node>
    </>
  );
  yield* database().scale(0, 0);
  yield* opening().animate(1);
  yield* waitFor(0.5);
  yield* database().scale(1, 1);
  yield* waitFor(1);
  yield* all(
    database().position([-1200, 1200], 1),
    chatgpt().position([0, 0], 1)
  );
  yield* waitFor(0.5);
  yield* all(
    chatgpt().position([-1200, 1200], 1),
    questionContainer().position([0, 0], 1)
  );
  yield* wrongCode().edit(
    1
  )`${insert(`for (int i = 1; i < 3; i++) {\n\tstd::cout << i << "\\n"; \n}`)}`;
  outputContainer().add(<JetbrainText text={"1"} />);
  outputContainer().add(<JetbrainText text={"2"} />);
  yield* waitFor(0.5)
  yield* all(
    qMark1().scale(1, 0.5).to(0, 0.8),
    qMark2().scale(1, 0.5).to(0, 0.8)
  );
  yield* wrongCode().edit(1)`for (int i = 1; i ${edit(`<`, `<=`)} 3; i++) {\n\tstd::cout << i << "\\n"; \n}`;
  yield* wrongCode().selection(lines(0, Infinity), 1);
  outputContainer().add(<JetbrainText text={"3"} />);
  yield* waitFor(0.8);
});
