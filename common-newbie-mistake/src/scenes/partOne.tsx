import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, delay, waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { Direction, Vector2 } from "@motion-canvas/core/lib/types";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { Reference, useDuration } from "@motion-canvas/core/lib/utils";
import { createRef } from "@motion-canvas/core/lib/utils";
import {
  CodeBlock,
  lines,
  word,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { ChapterTitle } from "../components/chapterTitle";
import { JetbrainText } from "../components/jetbrainText";
import {
  easeInOutCubic,
  easeOutCubic,
  tween,
} from "@motion-canvas/core/lib/tweening";
import { createSignal } from "@motion-canvas/core/lib/signals";
import { Circle, Image, Line, Rect } from "@motion-canvas/2d/lib/components";
import oldDude from "../images/oldDude.jpg";
import { ThreadGenerator } from "@motion-canvas/core/lib/threading";

// BEST TRANSISITION TO 2 AT: 1296
export default makeScene2D(function* (view) {
  const examplePosition = createSignal(1);

  const highlightLine = createRef<Line>();
  const chapterTitle = createRef<ChapterTitle>();
  const questionHeader = createRef<ChapterTitle>();
  const exampleCode = createRef<CodeBlock>();
  const exampleImage = createRef<Image>();

  const skillBlock = createRef<Rect>();
  const skillText1 = createRef<JetbrainText>();

  const skillBlock2 = createRef<Rect>();
  const skillText2 = createRef<JetbrainText>();

  const skillBlock3 = createRef<Rect>();
  const skillText3 = createRef<JetbrainText>();

  const anotherQuestion = createRef<JetbrainText>();

  const finalAnswer = createRef<Circle>();
  const finalAnswerCode = createRef<CodeBlock>();
  view.add(
    <>
      <ChapterTitle
        ref={chapterTitle}
        chapterNumberText={"1"}
        chapterTitleText={"MENGHAFAL\nSYNTAX"}
      />
      <JetbrainText
        x={() => examplePosition() * -1100}
        y={-400}
        text={"Dibawah merupakan kode\nuntuk menampilkan text dari 0-9:"}
        ref={questionHeader}
      />
      <CodeBlock
        ref={exampleCode}
        scale={1}
        y={-150}
        x={() => examplePosition() * -999}
        fontSize={90}
        language="py"
        code={`for i in range(10):\n\t\t\t\tprint(i)`}
      />
      <Image
        src={oldDude}
        height={600}
        y={150}
        opacity={0}
        ref={exampleImage}
      />
      <Line
        lineWidth={10}
        stroke={"#fff"}
        ref={highlightLine}
        y={-170}
        closed
        points={[
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ]}
      />
      <Rect
        width={100}
        height={100}
        scale={0}
        radius={100}
        fill={"#2e7d32"}
        ref={skillBlock}
      />
      <Rect
        width={100}
        height={100}
        scale={0}
        radius={100}
        fill={"#d84315"}
        ref={skillBlock2}
      />
      <Rect
        width={100}
        height={100}
        scale={0}
        radius={100}
        fill={"#1565c0"}
        ref={skillBlock3}
      />
      <JetbrainText
        x={-50}
        y={510}
        opacity={0}
        text={"MENAMPILKAN\n\t\t\tTEXT"}
        ref={skillText1}
      />
      <JetbrainText
        x={300}
        y={500}
        opacity={0}
        text={"PERULANGAN"}
        ref={skillText2}
      />
      <JetbrainText
        x={0}
        y={800}
        opacity={0}
        text={"MEMBATASI\nPERULANGAN"}
        ref={skillText3}
      />

      <JetbrainText
        y={-400}
        x={-1100}
        scale={0.9}
        ref={anotherQuestion}
        text={"BUATLAH SEBUAH KODE YANG MENAMPILKAN\nNAMA ANDA 10 KALI"}
      />
      <Circle
        width={100}
        height={100}
        scale={0}
        fill={"3a3a3a"}
        ref={finalAnswer}
      />
      <CodeBlock
        ref={finalAnswerCode}
        language="py"
        scale={0}
        code={`for i in range(10):\n\t\t\tprint("Reeyo")`}
      />
    </>
  );
  yield* slideTransition(Direction.Left, 0.3);
  yield* chapterTitle().animate();
  yield* waitUntil("ShowImage");
  yield* exampleImage().opacity(1, 0);
  yield* waitUntil("HideImage");
  yield* exampleImage().opacity(0, 0);
  yield* tween(1, (value) => {
    examplePosition(easeOutCubic(value, 1, 0));
  });
  yield* waitUntil("GiveTime");
  yield* all(
    exampleCode().selection(word(1, 0, Infinity), 0.5),
    highlightLine().points(
      [
        [-330, 0],
        [170, 0],
        [170, 130],
        [-330, 130],
      ],
      0.5
    ),
    tween(0.5, (value) => {
      skillBlock().scale(easeOutCubic(value, 0, 2));
    }),
    skillBlock().position.x(easeOutCubic(1, 0, -300), 1),
    skillBlock().position.y(easeOutCubic(1, 0, 500), 1),
    skillBlock().radius(10, 1),
    skillBlock().width(200, 1),
    delay(useDuration("D1"), skillText1().opacity(easeOutCubic(1, 0, 1), 1)),
    delay(useDuration("D2"), highlightLine().position.x(-150, 1)),
    delay(useDuration("D2_1"), highlightLine().position.y(-280, 1)),
    delay(
      useDuration("D2_2"),
      highlightLine().points(
        [
          [-350, 0],
          [650, 0],
          [650, 130],
          [-350, 130],
        ],
        0.5
      )
    ),
    delay(useDuration("D2_3"), exampleCode().selection(word(0, 0, 20), 0.5)),
    delay(
      useDuration("D3"),
      skillBlock2().position.x(easeOutCubic(1, 0, 300), 1)
    ),
    delay(
      useDuration("D3_1"),
      skillBlock2().position.y(easeOutCubic(1, 0, 500), 1)
    ),
    delay(useDuration("D3_2"), skillBlock2().radius(10, 1)),
    delay(useDuration("D3_3"), skillBlock2().width(200, 1)),
    delay(
      useDuration("D3_4"),
      tween(0.5, (value) => {
        skillBlock2().scale(easeOutCubic(value, 0, 2));
      })
    ),
    delay(useDuration("D3_5"), skillText2().opacity(easeOutCubic(1, 0, 1), 1)),

    delay(
      useDuration("D4_1"),
      highlightLine().points(
        [
          [100, 0],
          [650, 0],
          [650, 130],
          [100, 130],
        ],
        0.5
      )
    ),
    delay(useDuration("D4_2"), exampleCode().selection(word(0, 9, 20), 0.5)),
    delay(
      useDuration("D4_3"),
      skillBlock3().position.x(easeOutCubic(1, 0, 0), 1)
    ),
    delay(
      useDuration("D4_4"),
      skillBlock3().position.y(easeOutCubic(1, 0, 800), 1)
    ),
    delay(useDuration("D4_5"), skillBlock3().radius(10, 1)),
    delay(useDuration("D4_6"), skillBlock3().width(200, 1)),
    delay(
      useDuration("D4_7"),
      tween(0.5, (value) => {
        skillBlock3().scale(easeOutCubic(value, 0, 2));
      })
    ),
    delay(useDuration("D4_8"), skillText3().opacity(easeOutCubic(1, 0, 1), 1))
  );
  yield* all(
    tween(1, (value) => {
      questionHeader().position.x(easeInOutCubic(value, 0, 1100));
    }),
    tween(1, (value) => {
      exampleCode().position.x(easeInOutCubic(value, 0, 1100));
    }),
    tween(1, (value) => {
      highlightLine().position.x(
        easeInOutCubic(value, highlightLine().position.x(), 1100)
      );
    })
  );
  yield* tween(1, (value) => {
    anotherQuestion().position.x(easeOutCubic(value, -1100, 0));
  });
  yield* waitUntil("GiveTimeTo2");
  yield* all(
    combineIt(skillText1, skillBlock),
    delay(0.1, combineIt(skillText2, skillBlock2)),
    delay(0.2, combineIt(skillText3, skillBlock3))
  );
  yield* all(
    finalAnswerCode().selection(lines(0, Infinity), 0),
    tween(1, (value) => {
      finalAnswer().scale(easeOutCubic(value, 0, 10));
    }),
    tween(1, (value) => {
      finalAnswerCode().scale(easeOutCubic(value, 0, 1.5));
    })
  );
  yield* waitFor(useDuration("1-to-2PAD"));
});

function* combineIt(
  skillText: Reference<JetbrainText>,
  skillBlock: Reference<Rect>
): ThreadGenerator {
  yield* all(
    skillText().opacity(0, 0),
    tween(1, (value) => {
      skillBlock().radius(easeInOutCubic(value, 10, 100));
    }),
    tween(1, (value) => {
      skillBlock().width(easeInOutCubic(value, skillBlock().width(), 100));
    }),
    tween(1, (value) => {
      skillBlock().position.x(
        easeInOutCubic(value, skillBlock().position.x(), 0)
      );
    }),
    tween(1, (value) => {
      skillBlock().position.y(
        easeInOutCubic(value, skillBlock().position.y(), 0)
      );
    }),
    delay(
      0.8,
      tween(1, (value) => {
        skillBlock().scale(easeInOutCubic(value, 2, 0));
      })
    )
  );
}
