import { Image, Node, Rect } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { JetbrainText } from "../../components/jetbrainText";
import { TechNumber } from "../../components/techNumber";

import tf from "../../images/tf.png";
import pytorch from "../../images/pytorch.png";
import numpy from "../../images/numpy.png";
import gpt from "../../images/chatgpt.png";

import cryptograph from "../../images/cryptograph.svg";
import hacker from "../../images/hacker.png";

import database from "../../images/database.svg";
import wifi from "../../images/wifi.svg";

export default makeScene2D(function* (view) {
  // Create your animations here
  const opening = createRef<TechNumber>();
  const timer = createRef<JetbrainText>();

  const tfIcon = createRef<Image>();
  const pytorchIcon = createRef<Rect>();
  const numpyIcon = createRef<Image>();
  const gptIcon = createRef<Image>();
  const dataScienceText = createRef<JetbrainText>();
  const textContainer = createRef<Rect>();

  const cryptoIcon = createRef<Image>();
  const hackerIcon = createRef<Image>();

  const databaseIcon = createRef<Image>();
  const wifiIcon = createRef<Image>();
  view.add(
    <>
      <TechNumber
        ref={opening}
        chapterTextNumber={"3"}
        sub1={"RANAHNYA LUAS!"}
      />
      <JetbrainText text={`00:39`} fontSize={250} y={1200} ref={timer} />

      <Image ref={tfIcon} src={tf} height={350} y={1100} />
      <Rect
        ref={pytorchIcon}
        fill={"#3a3a3a"}
        scale={0.8}
        radius={30}
        width={900}
        height={300}
        y={1100}
      >
        <Image src={pytorch} height={200} />
      </Rect>
      <Image ref={numpyIcon} src={numpy} height={300} y={1100} />
      <Image ref={gptIcon} src={gpt} height={300} y={1110} />
      <Rect
        zIndex={5}
        ref={textContainer}
        fill={"#606060"}
        scale={1}
        radius={30}
        width={900}
        height={400}
        y={1200}
      >
        <JetbrainText
          ref={dataScienceText}
          text={"DATA SCIENCE"}
          fontSize={100}
        />
      </Rect>

      <Image ref={cryptoIcon} src={cryptograph} height={400} y={1200} />
      <Image ref={hackerIcon} src={hacker} height={500} y={1200} />


      <Image ref={databaseIcon} src={database} x={20} height={600} y={1200} />
      <Image ref={wifiIcon} src={wifi} x={20} height={400} y={1200} />
    </>
  );
  yield* opening().animate(1);
  yield* waitFor(useDuration("waitFrame"));
  yield* timer().position.y(0, 0);
  yield* waitFor(1);
  yield* timer().text("00:40", 0);
  yield* waitFor(1);
  yield* timer().text("00:41", 0);
  yield* waitFor(1);
  yield* all(timer().text("00:42", 0), timer().position.x(1200, 1));
  yield* all(
    tfIcon().position.y(-200, 1),
    pytorchIcon().position.y(100, 1),
    numpyIcon().position.y(400, 1),
    gptIcon().position.y(700, 1)
  );
  yield* waitFor(0.5);
  yield* all(
    tfIcon().position.y(1200, 1),
    pytorchIcon().position.y(1200, 1),
    numpyIcon().position.y(1200, 1),
    gptIcon().position.y(1200, 1)
  );
  yield* textContainer().position.y(0, 0);
  yield* waitFor(0.5);
  yield* textContainer().position.y(1200, 0);
  yield* dataScienceText().text("SECURITY\nENGINEER", 0);
  yield* all(cryptoIcon().position.y(0, 1), hackerIcon().position.y(600, 1));
  yield* waitFor(1);
  yield* textContainer().position.y(0, 0);
  yield* waitFor(1);
  yield* textContainer().position.y(1200, 0);
  yield* all(
    cryptoIcon().position.y(1200, 0.5),
    hackerIcon().position.y(1200, 0.5)
  );
  yield* all(
    databaseIcon().position.y(0, 0.5),
    wifiIcon().position.y(500, 0.5)
  );
  yield* dataScienceText().text("NETWORK\nENGINEER", 0);
  yield* waitFor(1);
  yield* textContainer().position.y(0, 0);
  yield* waitFor(1);
  yield* textContainer().position.y(1200, 0);
  yield* all(
    databaseIcon().position.y(1200, 0.5),
    wifiIcon().position.y(1200, 0.5)
  );
  yield* waitFor(1);
});
