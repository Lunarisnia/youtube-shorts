import { Circle, Image, View2D } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, delay, waitFor } from "@motion-canvas/core/lib/flow";
import {
  easeOutBounce,
  easeOutCubic,
  tween,
} from "@motion-canvas/core/lib/tweening";
import { createRef, Reference, useDuration } from "@motion-canvas/core/lib/utils";
import { JetbrainText } from "../components/jetbrainText";
import { ChapterTitle } from "../components/chapterTitle";
import { createSignal } from "@motion-canvas/core/lib/signals";
import { Vector2 } from "@motion-canvas/core/lib/types";
import tokped from "../images/tokopedia.png";

export default makeScene2D(function* (view) {
  // Create your animations here
  const chapterTitle = createRef<ChapterTitle>();
  const mainProblem = createRef<Circle>();
  const mainProblemText = createRef<JetbrainText>();

  const q1 = createRef<JetbrainText>();
  const q2 = createRef<JetbrainText>();
  const q3 = createRef<JetbrainText>();
  const q4 = createRef<JetbrainText>();
  const q5 = createRef<JetbrainText>();
  const q6 = createRef<JetbrainText>();
  view.add(
    <>
      <ChapterTitle
        ref={chapterTitle}
        chapterNumberText={"3"}
        chapterTitleText={"TIDAK MEMECAH\nMASALAH"}
        titleTextX={11}
      />
      <Circle
        width={100}
        height={100}
        scale={0}
        fill={"#616161"}
        ref={mainProblem}
      >
        <JetbrainText
          ref={mainProblemText}
          text={"BUAT SEBUAH\nOLSHOP SEPERTI\nTOKOPEDIA"}
          fontSize={10}
        />
      </Circle>
      <JetbrainText
        ref={q1}
        scale={0}
        x={300}
        y={600}
        text={"?"}
        rotation={10}
      />
      <JetbrainText
        ref={q2}
        scale={0}
        x={-300}
        y={600}
        text={"?"}
        rotation={-10}
      />
      <JetbrainText
        ref={q3}
        scale={0}
        x={-270}
        y={-400}
        text={"?"}
        rotation={-30}
      />
      <JetbrainText
        ref={q4}
        scale={0}
        x={100}
        y={800}
        text={"?"}
        rotation={10}
      />
      <JetbrainText
        ref={q5}
        scale={0}
        x={-200}
        y={850}
        text={"?"}
        rotation={10}
      />
      <JetbrainText
        ref={q6}
        scale={0}
        x={290}
        y={-290}
        text={"?"}
        rotation={10}
      />
    </>
  );
  yield* chapterTitle().animate();
  yield* tween(1, (value) => {
    mainProblem().scale(easeOutBounce(value, 0, 8));
  });
  yield* waitFor(2);
  yield* all(
    q1().scale(5, 1),
    q2().scale(5, 1.5),
    q3().scale(5, 1.2),
    q4().scale(5, 1.3),
    q5().scale(5, 1),
    q6().scale(5, 1.8)
  );
  yield* waitFor(0.2);
  yield* all(
    q1().scale(0, 0.9),
    q2().scale(0, 0.8),
    q3().scale(0, 0.6),
    q4().scale(0, 0.3),
    q5().scale(0, 0.4),
    q6().scale(0, 0.5)
  );

  const blob1 = splitProblemBlob(view, "DESAIN\nWEBSITE");
  yield* all(
    tween(1, (value) => {
      mainProblem().scale(easeOutCubic(value, 8, 6));
    }),
    tween(1, (value) => {
      blob1().scale(easeOutCubic(value, 0, 1));
    }),
    tween(1, (value) => {
      blob1().position(
        new Vector2(easeOutCubic(value, 0, -350), easeOutCubic(value, 0, 500))
      );
    })
  );

  const blob2 = splitProblemBlob(view, "PAKAI\nBAHASA\nAPA?");
  yield* all(
    tween(1, (value) => {
      mainProblem().scale(easeOutCubic(value, 6, 3));
    }),
    tween(1, (value) => {
      blob2().scale(easeOutCubic(value, 0, 1));
    }),
    tween(1, (value) => {
      blob2().position(
        new Vector2(easeOutCubic(value, 0, 10), easeOutCubic(value, 0, 600))
      );
    })
  );

  const blob3 = splitProblemBlob(view, "FRAMEWORK\nAPA?");
  yield* all(
    tween(1, (value) => {
      mainProblem().scale(easeOutCubic(value, 3, 0));
    }),
    tween(1, (value) => {
      blob3().scale(easeOutCubic(value, 0, 1));
    }),
    tween(1, (value) => {
      blob3().position(
        new Vector2(easeOutCubic(value, 0, 350), easeOutCubic(value, 0, 500))
      );
    })
  );

  yield* all(
    tween(1, (value) => {
      blob1().position(
        new Vector2(
          easeOutCubic(value, blob1().position.x(), 0),
          easeOutCubic(value, blob1().position.y(), 0)
        )
      );
    }),
    delay(
      0.2,
      tween(1, (value) => {
        blob2().position(
          new Vector2(
            easeOutCubic(value, blob2().position.x(), 0),
            easeOutCubic(value, blob2().position.y(), 0)
          )
        );
      })
    ),
    delay(
      0.4,
      tween(1, (value) => {
        blob3().position(
          new Vector2(
            easeOutCubic(value, blob3().position.x(), 0),
            easeOutCubic(value, blob3().position.y(), 0)
          )
        );
      })
    ),
    delay(
      0.5,
      tween(1, (value) => {
        blob1().scale(easeOutCubic(value, 1, 0));
      })
    ),
    delay(
      0.6,
      tween(1, (value) => {
        blob2().scale(easeOutCubic(value, 1, 0));
      })
    ),
    delay(
      0.7,
      tween(1, (value) => {
        blob3().scale(easeOutCubic(value, 1, 0));
      })
    )
  );
  yield* mainProblemText().text("", 0)
  mainProblem().add(
    <Image src={tokped} height={50} />
  );
  yield* tween(1, value => {
    mainProblem().scale(easeOutCubic(value, 0, 8))
  });
  yield* waitFor(useDuration("to-Outro"));
});

function splitProblemBlob(view: View2D, text: string): Reference<Circle> {
  const blob = createRef<Circle>();
  view.add(
    <Circle width={300} height={300} fill={"#616161"} scale={0} ref={blob}>
      <JetbrainText text={text} fill={"#fff"} />
    </Circle>
  );
  return blob;
}
