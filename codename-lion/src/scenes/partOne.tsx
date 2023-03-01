import { CodeBlock, insert, Node, Rect } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { easeInCubic, easeInOutCubic, easeOutCubic, tween } from "@motion-canvas/core/lib/tweening";
import { createRef } from "@motion-canvas/core/lib/utils";
import { Kirby } from "../components/kirby";
import { TechNumber } from "../components/techNumber";

export default makeScene2D(function* (view) {
  // Create your animations here
  const opening = createRef<TechNumber>();
  const kirbyContainer = createRef<Kirby>();
  const kirby = createRef<Kirby>();

  const kirbyCode = createRef<CodeBlock>();

  // TODO: MAKE INSTAGRAM POST LIKE COMPONENT
  // Resize the kirby and have the likes go up
  view.add(
    <>
      <TechNumber
        ref={opening}
        chapterTextNumber={"1"}
        sub1={"BISA DIPAMERIN"}
      />
      {/* <Rect width={950} height={1000} fill={"#fff"} lineWidth={4}></Rect> */}
      <Node scale={0.8} y={-180} ref={kirbyContainer}>
        <Kirby ref={kirby} />
      </Node>
      <CodeBlock ref={kirbyCode} y={1200} language="html" code={`<div class="kirby"></div>`} />
    </>
  );
  yield* opening().animate(0.6);
  yield* tween(1, value => {
    kirbyCode().position.y(easeOutCubic(value, 1200, 450))
  });
  yield* kirbyCode().edit(1, false)`<div class="kirby">${insert(`\n\t<div class="body"></div>\n`)}</div>`;
  yield* kirby().showBody();
  yield* kirbyCode().edit(1, false)`<div class="kirby">\n\t<div class="body${insert(` bigger`)}"></div>\n</div>`;
  yield* kirby().resizeBody();
  yield* kirbyCode().edit(1, false)`<div class="kirby">\n\t<div class="body bigger">${insert(`\n\t\t<div class="face"></div>\n\t`)}</div>\n</div>`;
  yield* kirby().showFace();
  yield* kirbyCode().edit(1, false)`<div class="kirby">\n\t<div class="body bigger">\n\t\t<div class="face"></div>${insert(`\n\t\t<div class="arm"></div>`)}\n\t</div>\n</div>`;
  yield* kirby().showArm();
  yield* kirbyCode().edit(1, false)`<div class="kirby">\n\t<div class="body bigger">\n\t\t<div class="face"></div>\n\t\t<div class="arm"></div>${insert(`\n\t\t<div class="leg"></div>`)}\n\t</div>\n</div>`;
  yield* kirby().showLeg();
  yield* kirbyCode().edit(1, false)`<div class="kirby${insert(` animate`)}">\n\t<div class="body bigger">\n\t\t<div class="face"></div>\n\t\t<div class="arm"></div>\n\t\t<div class="leg"></div>\n\t</div>\n</div>`;
  yield* kirby().animate();
  yield* all(
    kirby().animate(),
    tween(0.3, value => {
      kirbyCode().position.x(easeInCubic(value, 0, -900))
    }),
  );
  yield* waitFor(20);
});
