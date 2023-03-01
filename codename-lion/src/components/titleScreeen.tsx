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
        >
          <JetbrainText
            text={`1`}
            fontSize={300}
            y={-500}
            x={-260}
            rotation={-30}
          />
          <JetbrainText
            text={`CARA`}
            fontSize={300}
            y={-300}
            x={200}
            rotation={30}
          />
          <JetbrainText
            text={`MELAKUKAN`}
            fontSize={200}
            y={-20}
            rotation={20}
          />
          <JetbrainText text={`SUATU`} fontSize={300} y={250} rotation={20} />
          <JetbrainText text={`HAL`} fontSize={300} y={600} rotation={30} />
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
    yield* tween(1, (value) => {
      this.explosion().scale(easeOutCubic(value, 0, 1));
    });
    yield* tween(0.2, (value) => {
      this.explosion().scale(easeOutCubic(value, 1, 0));
    });
  }
}
