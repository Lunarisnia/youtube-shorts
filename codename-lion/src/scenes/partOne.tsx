import { Circle, CodeBlock, Image, insert, Node, Rect } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, delay, waitFor } from "@motion-canvas/core/lib/flow";
import { easeInCubic, easeInOutCubic, easeOutCubic, tween } from "@motion-canvas/core/lib/tweening";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { JetbrainText } from "../components/jetbrainText";
import { Kirby } from "../components/kirby";
import { TechNumber } from "../components/techNumber";

import heartIcon from "../images/heartIcon.png";
import comment from "../images/comment.webp";
import forward from "../images/forward.png";

export default makeScene2D(function* (view) {
  // Create your animations here
  const opening = createRef<TechNumber>();
  const kirbyContainer = createRef<Kirby>();
  const kirby = createRef<Kirby>();

  const instagram = createRef<Rect>();

  const kirbyCode = createRef<CodeBlock>();

  view.add(
    <>
      <TechNumber
        ref={opening}
        chapterTextNumber={"1"}
        sub1={"BISA DIPAMERIN"}
      />
      <Rect ref={instagram} x={1200} width={950} y={150} height={1200} fill={"#fff"} lineWidth={4}>
        <Circle width={100} height={100} y={-500} x={-350} fill={"pink"} />
        <JetbrainText text={"Reeyo"} x={-200} y={-500} fill={"black"} />
        <Image src={heartIcon} height={100} y={300} x={-350} />
        <Image src={comment} height={100} y={300} x={-200} />
        <Image src={forward} height={100} y={300} x={-50} />
        <JetbrainText text={"69420 Likes!"} x={-260} y={400} fill={"black"} />
        <JetbrainText text={"Reeyo:\nMade this in\n1000Hours with HTML!"} x={-150} y={500} fill={"black"} />
      </Rect>
      <Node scale={0.8} y={-180} ref={kirbyContainer}>
        <Kirby ref={kirby} />
      </Node>
    </>
  );
  yield view.add(<CodeBlock ref={kirbyCode} y={1200} language="html" code={`<div class="kirby"></div>`} />);
  yield* opening().animate(1);
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
    kirbyContainer().position.y(-50, 0.5),
    tween(0.3, value => {
      kirbyCode().position.x(easeInCubic(value, 0, -900))
    }),
    tween(1, value => {
      instagram().position.x(easeInCubic(value, 1200, 0))
    }),
  );
  yield* kirby().animate()
  yield* waitFor(useDuration("to2"))
});
