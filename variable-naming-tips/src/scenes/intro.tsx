import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { Rect, Text } from "@motion-canvas/2d/lib/components";
import { CodeBlock, insert } from "@motion-canvas/2d/lib/components/CodeBlock";
export default makeScene2D(function* (view) {
  const stopNamain = createRef<Text>();
  const variabel = createRef<Text>();
  const kamuKayak = createRef<Text>();
  const badCode = createRef<CodeBlock>();
  view.add(
    <Text
      ref={stopNamain}
      y={-1000}
      fontSize={100}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`STOP NAMAIN`}
    />
  );
  view.add(
    <Text
      ref={variabel}
      y={-300}
      x={900}
      fontSize={100}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`VARIABEL`}
    />
  );
  view.add(
    <Text
      ref={kamuKayak}
      y={-200}
      x={1200}
      fontSize={100}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`KAMU KAYAK GINI`}
    />
  );
  yield view.add(
    <CodeBlock 
    ref={badCode}
    language="ts"
    fontSize={70}
    code={`
    `} 
    />
  );
  // yield* text01().text("STOP NAMAIN\nVARIABEL\nKAMU KAYAK GINI", 1)
  // yield* stopNamain().position.y(400, 1)
  // yield * waitUntil('event'); // wait for an event called "event"
  yield* stopNamain().position.y(-400, useDuration('stopNamain'))
  yield* variabel().position.x(0, useDuration('variabel'))
  yield* kamuKayak().position.x(0, useDuration('kamuKayak'))
  yield* badCode().edit(0.3, false)`${insert(`const umr_bpk = 190;`)}`;
  yield* waitFor(0.4)
});
