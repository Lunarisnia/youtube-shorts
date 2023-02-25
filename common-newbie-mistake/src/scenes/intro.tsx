import { Circle, Line, Text } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, delay, loop, waitFor } from "@motion-canvas/core/lib/flow";
import { createSignal } from "@motion-canvas/core/lib/signals";
import {
  easeInBounce,
  easeOutBounce,
  easeOutCubic,
  tween,
} from "@motion-canvas/core/lib/tweening";
import {
  createRef,
  useDuration,
  useLogger,
} from "@motion-canvas/core/lib/utils";
import { JetbrainText } from "../components/jetbrainText";

// TODO: add something thats moving
// Maybe a google logo with a cross on top of it
export default makeScene2D(function* (view) {
  const logger = useLogger();
  // Create your animations here
  view.add(
    <>
      <JetbrainText
        text={"KESALAHAN TERBESAR\nORANG BARU BELAJAR"}
        fontSize={80}
        y={-150}
      ></JetbrainText>
      <JetbrainText fontSize={185} scale={1} y={50} fill={"#d32f2f"} text={"NGODING!"} />
    </>
  );

  const waterDrop = createRef<Circle>();
  const waterRipple = createRef<Circle>();
  const waterRipple2 = createRef<Circle>();
  const waterRipple3 = createRef<Circle>();
  const textPopup = createRef<JetbrainText>();
  view.add(
    <>
      <Circle
        fill={"#bdbdbd"}
        width={100}
        height={100}
        scale={20}
        opacity={0}
        ref={waterDrop}
      ></Circle>
      <Circle
        fill={"#8d8d8d"}
        width={100}
        height={100}
        scale={0}
        opacity={1}
        ref={waterRipple}
      ></Circle>
      <Circle
        fill={"#3a3a3a"}
        width={100}
        height={100}
        scale={0}
        opacity={1}
        ref={waterRipple2}
      ></Circle>
      <Circle
        fill={"#141414"}
        width={100}
        height={100}
        scale={0}
        opacity={1}
        ref={waterRipple3}
      ></Circle>
      <JetbrainText fontSize={190} scale={0} ref={textPopup} text={"3"} />
    </>
  );
  yield* waitFor(1.1);
  yield* all(
    waterDrop().opacity(1, 0.2),
    tween(1, (value) => {
      waterDrop().scale(easeOutBounce(value, 20, 1));
    }),
    delay(
      useDuration("D1"),
      tween(1, (value) => {
        waterRipple().scale(easeOutCubic(value, 0, 30));
      })
    ),
    delay(
      useDuration("D2"),
      tween(1, (value) => {
        waterRipple2().scale(easeOutCubic(value, 0, 30));
      })
    ),
    delay(
      useDuration("D3"),
      tween(1, (value) => {
        waterRipple3().scale(easeOutCubic(value, 0, 30));
      })
    ),
    delay(
      useDuration("D4"),
      tween(1, (value) => {
        textPopup().scale(easeOutCubic(value, 0, 1))
      })
    ),
    delay(
      useDuration("D5"),
      textPopup().text("KESALAHAN", 0)
    ),
    delay(
      useDuration("D6"),
      textPopup().text("PEMULA", 0)
    ),
    delay(
      useDuration("D7"),
      textPopup().text("KETIKA", 0)
    ),
    delay(
      useDuration("D8"),
      textPopup().text("BARU", 0)
    ),
    delay(
      useDuration("D9"),
      textPopup().text("BELAJAR", 0)
    ),
    delay(
      useDuration("D10"),
      textPopup().text("NGODING", 0)
    ),
  );
  
  yield* waitFor(useDuration("partOnePad"));
});

// [
//   Vector2.zero, [300, 0], [300, 300], [-400, 300], [-400, 0], [0, 0]
// ]

// const line = createRef<Line>();
// view.add(
//   <Line
//     stroke={"#fff"}
//     points={[
//       [-300, -300],
//       [-300, 0],
//       [0, 0],
//     ]}
//     lineWidth={10}
//     arrowSize={10}
//     ref={line}
//     startArrow
//   />
// );

// yield* line().radius(100, 1);
