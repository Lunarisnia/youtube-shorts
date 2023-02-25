import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, delay, loop, waitFor } from "@motion-canvas/core/lib/flow";
import { Direction, Vector2 } from "@motion-canvas/core/lib/types";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import {
  finishScene,
  Reference,
  useDuration,
} from "@motion-canvas/core/lib/utils";
import { createRef } from "@motion-canvas/core/lib/utils";
import { ChapterTitle } from "../components/chapterTitle";
import { Image, Layout, Node, Rect } from "@motion-canvas/2d/lib/components";
import {
  CodeBlock,
  CodeModification,
  edit,
  insert,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { JetbrainText } from "../components/jetbrainText";
import googleLogo from "../images/googleLogo.png";
import searchHistory from "../images/searchHistory.png";
import { easeOutCubic } from "@motion-canvas/core/lib/tweening";
import { createSignal } from "@motion-canvas/core/lib/signals";
import { ThreadGenerator } from "@motion-canvas/core/lib/threading";

export default makeScene2D(function* (view) {
  const projectGroup = createRef<Node>();
  const projectCode = createRef<CodeBlock>();
  const outputLayout = createRef<Layout>();

  const googleGroup = createRef<Node>();

  const pageSwap = createSignal(0);

  const chapterTitle = createRef<ChapterTitle>();
  const queryText = createRef<JetbrainText>();
  const searchResult = createRef<Rect>();
  const searchResultCode = createRef<CodeBlock>();
  const history = createRef<Image>();
  view.add(
    <>
      <ChapterTitle
        ref={chapterTitle}
        chapterNumberText={"2"}
        chapterTitleText={"MALES\nGOOGLING"}
      />
      <Image src={searchHistory} height={1400} y={1700} ref={history} />
      <Node ref={googleGroup} x={() => pageSwap() + 1000}>
        <Image src={googleLogo} height={300} y={-300} />
        <Rect
          width={900}
          height={150}
          lineWidth={10}
          radius={100}
          stroke={"#fff"}
          fill={"#3a3a3a"}
          layout
        >
          <JetbrainText text={``} x={50} ref={queryText} />
        </Rect>
        <Rect
          y={400}
          radius={30}
          opacity={1}
          width={900}
          height={400}
          fill={"#3a3a3a"}
          ref={searchResult}
        >
          <CodeBlock
            language="go"
            code={`fmt.Println("Hello, World!")`}
            ref={searchResultCode}
          />
        </Rect>
      </Node>
    </>
  );
  //`func main() {\n\t\tfor i := 0; i < 10; i++ {\n\t\t\t\tfmt.Println("Reeyo")\n\t\t}\n}`
  yield view.add(
    <Node ref={projectGroup} x={() => pageSwap() + -1000}>
      <JetbrainText
        text={
          "Buatlah program dengan bahasa GO\nUntuk menampilkan nama kamu\n3 Kali dengan loop"
        }
        scale={0.9}
        y={-400}
      />
      <CodeBlock
        y={-120}
        language="go"
        code={`func main() {\n\n}`}
        ref={projectCode}
      />
      <Rect y={400} radius={30} width={900} height={400} fill={"#3a3a3a"}>
        <JetbrainText x={-330} y={-250} text={`OUTPUT`} />
        <Layout
          direction={"column"}
          justifyContent={"start"}
          layout
          x={-300}
          ref={outputLayout}
        >
          {/* <JetbrainText text={`Reeyo`} /> */}
        </Layout>
      </Rect>
    </Node>
  );
  yield* chapterTitle().animate();

  yield* pageSwap(easeOutCubic(1, 0, 1000), 1);
  yield* prepareResult(searchResult, searchResultCode, queryText, {
    from: ``,
    to: `fmt.Println("Hello, World!")`,
  });
  yield* waitFor(1);
  yield* pageSwap(easeOutCubic(1, pageSwap(), pageSwap() * -1), 1);
  yield* queryText().text("How to print text in Golang", 1);
  yield* showResult(searchResult);
  yield* pageSwap(easeOutCubic(1, pageSwap(), pageSwap() * -1), 1);
  yield* projectCode().edit(1, false)`func main() {\n${insert(`\t\t\tfmt.Println("Reeyo")`)}\n}`;
  yield outputLayout().add(<JetbrainText text={`Reeyo`} />);
  yield* prepareResult(searchResult, searchResultCode, queryText, {from: ``, to: `for i := 0; i < 10; i++ {}`});
  yield* waitFor(1);
  yield* pageSwap(easeOutCubic(1, pageSwap(), pageSwap() * -1), 1);
  yield* queryText().text("How to Loop in Golang", 1);
  yield* showResult(searchResult);
  yield* pageSwap(easeOutCubic(1, pageSwap(), pageSwap() * -1), 1);
  yield* projectCode().edit(1, false)`func main() {\n${edit(`\t\t\tfmt.Println("Reeyo")`, `\tfor i := 0; i < 3; i++ {\n\t\t\tfmt.Println("Reeyo")\n\t}`)}\n}`;
  yield outputLayout().add(<JetbrainText text={`Reeyo`} />);
  yield outputLayout().add(<JetbrainText text={`Reeyo`} />);
  yield* waitFor(1);
  yield* pageSwap(easeOutCubic(1, pageSwap(), 0), 1);
  yield* history().position.y(easeOutCubic(1, 1400, 200), 1)
  yield* waitFor(useDuration("2-to-3"));
});

function* showResult(searchResult: Reference<Rect>) {
  yield* all(
    searchResult().opacity(1, 1),
    searchResult().position.y(easeOutCubic(1, 600, 400), 1)
  );
}

function* prepareResult(
  searchResult: Reference<Rect>,
  code: Reference<CodeBlock>,
  queryText: Reference<JetbrainText>,
  newCode: CodeModification
): ThreadGenerator {
  yield* searchResult().position.y(600, 0);
  yield* code().edit(0)`${newCode}`;
  yield* queryText().text("", 0);
  yield* searchResult().opacity(0, 0);
}
