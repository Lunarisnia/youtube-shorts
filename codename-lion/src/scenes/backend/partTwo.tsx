import { CodeBlock, Image } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { createRef } from "@motion-canvas/core/lib/utils";
import { TechNumber } from "../../components/techNumber";

import databaseIcon from "../../images/database.svg";
import chatgptIcon from "../../images/chatgpt.png";

export default makeScene2D(function* (view) {
  // Create your animations here
  const opening = createRef<TechNumber>();

  const database = createRef<Image>();
  const chatgpt = createRef<Image>();
  // TODO: add text for the task to create a loop to display 1-3
  // Then show this code and the wrong input, make some question mark popup
  // then fix the damn code, sync it with "atensi kepada detil2 kecil"
  view.add(
    <>
      <TechNumber
        ref={opening}
        chapterTextNumber={"2"}
        sub1={"LOGIC SKILL TERASAH"}
      />

      <Image position={[30, 0]} ref={database} height={600} src={databaseIcon} />
      <Image position={[1200, 1200]} ref={chatgpt} height={600} src={chatgptIcon} />

      <CodeBlock language="cpp" code={`for (int i = 1; i < 3; i++) {\n\tstd::cout << i << "\\n"; \n}`} />
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
  yield* chatgpt().position([-1200, 1200], 1);
  yield* waitFor(10);
});
