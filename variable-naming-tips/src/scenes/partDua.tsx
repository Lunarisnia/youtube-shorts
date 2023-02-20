import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { Text } from "@motion-canvas/2d/lib/components";
import { slideTransition } from "@motion-canvas/core/lib/transitions";
import { Direction } from "@motion-canvas/core/lib/types";
import {
  CodeBlock,
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
      text={`2`}
    />
  );

  yield* slideTransition(Direction.Right, 0.2);
  yield* waitFor(0.3);
  yield* satu().text("", 0.1);

  const badCode = createRef<CodeBlock>();
  yield view.add(
    <CodeBlock
      ref={badCode}
      fontSize={35}
      language="ts"
      code={`
      citm(itmid: string, p: number, itma: number): CINF {
        const s = this.gis(itmid);
        if (itma > s)
          return {
            s: false,
            m: "Out of stock",
          };
    
        const c = p - this.gitp(itmid, itma);
        if (c >= 0) {
          this.risbo(itmid);
          this.mcb += p - c;
          return {
            s: true,
            c: c,
            m: "Success",
          };
        } else
          return {
            s: false,
            m: "Not enough funds!",
          };
      }
      `}
    />
  );
  yield* waitFor(5);
  yield* badCode().fontSize(23, 0.3)
  yield* badCode().edit(0.3, false)`
  ${edit(`citm`, `checkoutItem`)}(${edit(`itmid`, `itemId`)}: string, ${edit(`p`, `paid`)}: number, ${edit(`itma`, `itemAmount`)}: number): ${edit(`CINF`, `CheckoutInfo`)} {
    const ${edit(`s`, `stock`)} = this.${edit(`gis`, `getItemStock`)}(${edit(`itmid`, `itemId`)});
    if (${edit(`itma`, `itemAmount`)} > ${edit(`s`, `stock`)})
      return {
        ${edit(`s`, `status`)}: false,
        ${edit(`m`, `message`)}: "Out of stock",
      };

    const ${edit(`c`, `change`)} = ${edit(`p`, `paid`)} - this.${edit(`gitp`, `getItemTotalPrice`)}(${edit(`itmid`, `itemId`)}, ${edit(`itma`, `itemAmount`)});
    if (${edit(`c`, `change`)} >= 0) {
      this.${edit(`risbo`, `reduceItemStockByOne`)}(${edit(`itmid`, `itemId`)});
      this.${edit(`mcb`, `merchantBalance`)} += ${edit(`p`, `paid`)} - ${edit(`c`, `change`)};
      return {
        ${edit(`s`, `status`)}: true,
        ${edit(`c`, `change`)}: ${edit(`c`, `change`)},
        ${edit(`m`, `message`)}: "Success",
      };
    } else
      return {
        ${edit(`s`, `status`)}: false,
        ${edit(`m`, `message`)}: "Not enough funds!",
      };
  }`
  yield* waitFor(4);
  yield* badCode().edit(0.3, false)`
  citm(itmid: string, p: number, itma: number): CINF {
    const s = this.gis(itmid);
    if (itma > s)
      return {
        s: false,
        m: "Out of stock",
      };

    const c = p - this.gitp(itmid, itma);
    if (c >= 0) {
      this.risbo(itmid);
      this.mcb += p - c;
      return {
        s: true,
        c: c,
        m: "Success",
      };
    } else
      return {
        s: false,
        m: "Not enough funds!",
      };
  }`
  yield* waitFor(0.3);
});
