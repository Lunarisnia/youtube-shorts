import {
  Circle,
  Image,
  Layout,
  Node,
  Rect,
} from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, delay, waitFor } from "@motion-canvas/core/lib/flow";
import { easeOutCubic, tween } from "@motion-canvas/core/lib/tweening";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { JetbrainText } from "../../components/jetbrainText";
import { TechNumber } from "../../components/techNumber";

import ferrari from "../../images/ferrari.jpg";
import ferrariEngine from "../../images/ferrariEngine.jpg";
import tony from "../../images/tony.jpg";
import cart from "../../images/cart.svg";
import cursor from "../../images/cursor.png";

import debit from "../../images/debit.svg";
import inventory from "../../images/inventory.png";
import database from "../../images/database.svg";
import circleCheck from "../../images/checkCircle.svg";
import { CheckmarkLogo } from "../../components/checkmarkLogo";

export default makeScene2D(function* (view) {
  // Create your animations here
  const opening = createRef<TechNumber>();

  const ferrariCar = createRef<Image>();
  const ferrariMachine = createRef<Image>();
  const avenger = createRef<Image>();

  const shopContainer = createRef<Node>();
  const buyButton = createRef<Rect>();
  const buyMenu = createRef<Node>();
  const loadingMenu = createRef<Node>();

  const loadingCircle = createRef<Circle>();

  const backendContainer = createRef<Node>();

  const mouse = createRef<Image>();

  const debitIcon = createRef<CheckmarkLogo>();
  const inventoryIcon = createRef<CheckmarkLogo>();
  const databaseIcon = createRef<CheckmarkLogo>();
  const successMenu = createRef<Node>();
  view.add(
    <>
      <TechNumber
        ref={opening}
        chapterTextNumber={"1"}
        sub1={"KAMU PONDASI UTAMA"}
      />

      <Image ref={ferrariCar} x={2800} src={ferrari} height={500} />
      <Image ref={ferrariMachine} x={2800} src={ferrariEngine} height={500} />
      <Image ref={avenger} x={2800} src={tony} height={500} />

      <Node ref={shopContainer} y={1600}>
        <Rect width={1000} height={1200} fill={"#424242"} radius={100}>
          <Node ref={buyMenu}>
            <Image src={cart} y={-300} />
            <JetbrainText
              y={-100}
              justifyContent={"center"}
              text={"Apakah kamu yakin ingin beli?"}
            />
            <Rect
              ref={buyButton}
              radius={20}
              width={400}
              height={150}
              fill={"#67994a"}
              y={100}
            >
              <JetbrainText fontSize={100} y={5} text={"BELI"} />
            </Rect>
          </Node>
          <Node ref={loadingMenu} opacity={0}>
            <Circle
              startAngle={0}
              endAngle={0}
              ref={loadingCircle}
              width={400}
              height={400}
              lineWidth={30}
              stroke={"#0193b5"}
            />
          </Node>
          <Node ref={successMenu} opacity={0}>
            <Image src={circleCheck} y={-300} height={300} />
            <JetbrainText text={`Pembelian Sukses!`} />
          </Node>
        </Rect>
        <Image ref={mouse} height={100} position={[0, 1200]} src={cursor} />
      </Node>

      <Node ref={backendContainer} x={0} scale={0} opacity={0}>
        <>
          <CheckmarkLogo ref={debitIcon} src={debit} height={400} />
          <CheckmarkLogo
            ref={inventoryIcon}
            src={inventory}
            height={250}
            x={400}
          />
          <CheckmarkLogo
            ref={databaseIcon}
            src={database}
            height={300}
            x={750}
          />
        </>
      </Node>
    </>
  );
  yield* opening().animate(0.8);
  yield* waitFor(useDuration("titleWait"));
  yield* tween(1, (value) => {
    ferrariCar().position.x(easeOutCubic(value, ferrariCar().position.x(), 0));
  });
  yield* all(
    tween(1, (value) => {
      ferrariMachine().position.x(
        easeOutCubic(value, ferrariMachine().position.x(), 0)
      );
    }),
    tween(1, (value) => {
      ferrariCar().position.x(
        easeOutCubic(value, ferrariCar().position.x(), -2800)
      );
    }),
    delay(
      1,
      tween(0.2, (value) => {
        ferrariMachine().position.x(
          easeOutCubic(value, ferrariMachine().position.x(), -2800)
        );
      })
    )
  );
  yield* tween(1, (value) => {
    avenger().position.x(easeOutCubic(value, avenger().position.x(), 0));
  });
  yield* waitFor(useDuration("demo1"));
  yield* tween(1, (value) => {
    avenger().position.x(easeOutCubic(value, avenger().position.x(), -2800));
  });
  yield* shopContainer().position.y(300, 1);
  yield* mouse().position([140, 130], 1);
  yield* buyButton().fill("#9ae56f", 0.1).to("#67994a", 0.2);
  yield* buyMenu().opacity(0, 0);
  yield* loadingMenu().opacity(1, 0);
  yield* all(
    loadingCircle().endAngle(100, 1),
    loadingCircle().startAngle(360, 1),
    delay(0.5, shopContainer().scale(50, 1)),
    delay(0.7, shopContainer().opacity(0, 0.2)),
    delay(0.5, backendContainer().scale(1, 1)),
    delay(0.5, backendContainer().opacity(1, 1))
  );
  yield* waitFor(0.8),
    yield* all(
      debitIcon().markComplete(),
      backendContainer().position.x(-400, 1)
    );
  yield* all(
    inventoryIcon().markComplete(),
    backendContainer().position.x(-400 - 350, 1)
  );
  yield* databaseIcon().markComplete();
  yield* waitFor(0.5);
  yield* loadingMenu().opacity(0, 0);
  yield* successMenu().opacity(1, 0);
  yield* all(
    delay(0.5, backendContainer().scale(50, 1)),
    delay(0.7, backendContainer().opacity(0, 0.2)),
    delay(0.5, shopContainer().scale(1, 1)),
    delay(0.5, shopContainer().opacity(1, 1))
  );
  yield* mouse().position([1200, 300], 1)
  yield* waitFor(3.5);
});
