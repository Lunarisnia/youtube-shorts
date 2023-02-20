import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { Text } from "@motion-canvas/2d/lib/components";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { Direction } from "@motion-canvas/core/lib/types";
import { all } from "@motion-canvas/core/lib/flow";
import { CodeBlock, insert, edit } from "@motion-canvas/2d/lib/components/CodeBlock";
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
      text={`1`}
    />
  );

  yield* slideTransition(Direction.Right, 0.2);
  yield* waitFor(0.5);
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
  yield* badCode().edit(0.3, false)`${insert(`const x = 10;`)}`;
  yield* badCode().edit(0.3, false)`
  const x = 10;
  ${insert(`const y = 1000;`)}`;
  yield* badCode().edit(0.3, false)`
  const x = 10;
  const y = 1000;
  ${insert(`const z = x * y;`)}`;
  yield* badCode().edit(0.3, false)`
  const x = 10;
  const y = 1000;
  const z = x * y;`;
  yield* waitFor(6);
  yield* badCode().edit(1, false)`
  const ${edit(`x`, `jumlahMobil`)} = 10;
  const y = 1000;
  const z = x * y;`;
  yield* badCode().edit(1, false)`
  const jumlahMobil = 10;
  const ${edit(`y`, `hargaMobilRupiah`)} = 1000;
  const z = x * y;`;
  yield* badCode().edit(1, false)`
  const jumlahMobil = 10;
  const hargaMobilRupiah = 1000;
  const ${edit(`z`, `totalHargaMobilRupiah\n`)} = ${edit(`x`, `jumlahMobil`)} * ${edit(`y`, `hargaMobilRupiah`)};`;
  yield* waitFor(1.3);
});
