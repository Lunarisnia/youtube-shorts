import { Circle, Node, NodeProps } from "@motion-canvas/2d/lib/components";
import { all, delay, waitFor } from "@motion-canvas/core/lib/flow";
import {
  easeInOutCubic,
  easeOutBounce,
  easeOutCubic,
  easeOutElastic,
  tween,
} from "@motion-canvas/core/lib/tweening";
import { createRef } from "@motion-canvas/core/lib/utils";
import { JetbrainText } from "./jetbrainText";

export interface TitleScreenProps extends NodeProps {}

export class TitleScreen extends Node {
  private container = createRef<Node>();

  private smallCircle = createRef<Circle>();
  private bigCircle = createRef<Circle>();
  private explosion = createRef<Circle>();
  public constructor(props?: TitleScreenProps) {
    super({ ...props });

    this.add(
      <>
        <Node ref={this.container}>
          <Circle
            ref={this.smallCircle}
            rotation={-90}
            stroke={"#525252"}
            endAngle={0}
            lineWidth={15}
            width={600}
            height={600}
          />
          <Circle
            ref={this.bigCircle}
            rotation={-90}
            stroke={"#525252"}
            endAngle={0}
            lineWidth={200}
            width={600}
            height={600}
          />
        </Node>
        <Circle
          ref={this.explosion}
          scale={0}
          width={2000}
          height={2000}
          fill={"#525252"}
          layout
          direction={"column"}
          justifyContent={"center"}
        >
          <JetbrainText
            text={`3`}
            fontSize={300}
            x={450}
            justifyContent={"center"}
            alignContent={"center"}
          />
          <JetbrainText text={`ALASAN`} fontSize={200} x={630} />
          <JetbrainText text={`FRONTEND`} fontSize={200} x={520} />
          <JetbrainText text={`LEBIH KEREN`} fontSize={150} x={500} />
          <JetbrainText text={`DARI`} fontSize={150} x={800} />
          <JetbrainText text={`BACKEND`} fontSize={150} x={670} />
        </Circle>
      </>
    );
  }

  public *animate() {
    yield* all(
      tween(0.5, (value) => {
        this.smallCircle().endAngle(easeOutCubic(value, 0, 360));
      }),
      tween(0.5, (value) => {
        this.smallCircle().scale(easeOutBounce(value, 0.8, 1));
      }),
      delay(
        0.05,
        tween(0.5, (value) => {
          this.bigCircle().scale(easeOutBounce(value, 0.8, 1));
        })
      ),
      delay(
        0.17,
        tween(0.5, (value) => {
          this.bigCircle().endAngle(easeOutCubic(value, 0, 360));
        })
      )
    );
    yield* tween(0.2, (value) => {
      this.container().scale(easeInOutCubic(value, 1, 0));
    });
    yield* tween(2, (value) => {
      this.explosion().scale(easeOutCubic(value, 0, 1));
    });
    yield* tween(0.2, (value) => {
      this.explosion().scale(easeOutCubic(value, 1, 0));
    });
  }
}
