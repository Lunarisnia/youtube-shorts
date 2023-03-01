import {
  Circle,
  Line,
  Node,
  NodeProps,
} from "@motion-canvas/2d/lib/components";
import { all, delay, loop, waitFor } from "@motion-canvas/core/lib/flow";
import {
  easeInBounce,
  easeInCubic,
  easeInOutCubic,
  easeOutBounce,
  easeOutCubic,
  tween,
} from "@motion-canvas/core/lib/tweening";
import { createRef } from "@motion-canvas/core/lib/utils";

export interface KirbyProps extends NodeProps {}

export class Kirby extends Node {
  private container = createRef<Node>();
  private rightArm = createRef<Circle>();
  private leftArm = createRef<Circle>();
  private rightLeg = createRef<Circle>();
  private leftLeg = createRef<Circle>();

  private leftEye = createRef<Circle>();
  private rightEye = createRef<Circle>();

  private leftBlush = createRef<Circle>();
  private rightBlush = createRef<Circle>();

  private mouth = createRef<Circle>();

  private body = createRef<Circle>();

  private ground = createRef<Circle>();

  public constructor(props?: KirbyProps) {
    super({ ...props });

    this.add(
      <Node ref={this.container}>
        {/* BASE */}
        <Circle
          zIndex={2}
          scale={0}
          width={500}
          height={500}
          fill={"#f19693"}
          ref={this.body}
        >
          {/* RIGHT EYE */}
          <Circle
            scale={0}
            width={50}
            height={100}
            fill={"211f1d"}
            x={50}
            y={-50}
            ref={this.rightEye}
          >
            <Circle width={30} height={45} y={-20} fill={"#fff"}></Circle>
            <Line
              y={10}
              scale={1.2}
              closed
              fill={"2f5a89"}
              radius={50}
              points={[
                [-20, 0],
                [0, 5],
                [20, 0],
                [0, 40],
              ]}
            />
          </Circle>
          {/* LEFT EYE */}
          <Circle
            scale={0}
            width={50}
            height={100}
            fill={"211f1d"}
            x={-50}
            y={-50}
            ref={this.leftEye}
          >
            <Circle width={30} height={45} y={-20} fill={"#fff"}></Circle>
            <Line
              y={10}
              scale={1.2}
              closed
              fill={"2f5a89"}
              radius={50}
              points={[
                [-20, 0],
                [0, 5],
                [20, 0],
                [0, 40],
              ]}
            />
          </Circle>

          {/* RIGHT BLUSH */}
          <Circle
            scale={0}
            width={100}
            height={50}
            fill={"#f26c75"}
            x={130}
            ref={this.rightBlush}
          />
          {/* LEFT BLUSH */}
          <Circle
            scale={0}
            width={100}
            height={50}
            fill={"#f26c75"}
            x={-130}
            ref={this.leftBlush}
          />

          {/* SMILE */}
          <Circle
            scale={0}
            ref={this.mouth}
            width={100}
            height={100}
            stroke={"#232120"}
            lineWidth={4}
            endAngle={120}
            x={0}
            y={30}
            rotation={30}
          />
        </Circle>

        {/* RIGHT ARM */}
        <Circle
          ref={this.rightArm}
          zIndex={2}
          x={800}
          y={-90}
          rotation={10}
          offsetX={0}
          offsetY={0.9}
          width={150}
          height={200}
          fill={"#f19693"}
        />

        {/* LEFT ARM */}
        <Circle
          ref={this.leftArm}
          zIndex={2}
          x={-800}
          y={100}
          rotation={35}
          width={150}
          height={200}
          fill={"#f19693"}
        />

        {/* RIGHT LEG */}
        <Circle
          ref={this.rightLeg}
          zIndex={1}
          rotation={25}
          width={250}
          height={150}
          fill={"#a90531"}
          y={1600}
          x={135}
        />
        {/* LEFT LEG */}
        <Circle
          ref={this.leftLeg}
          zIndex={1}
          rotation={-25}
          width={250}
          height={150}
          fill={"#a90531"}
          y={1600}
          x={-135}
        />

        <Circle
          ref={this.ground}
          zIndex={0}
          y={1600}
          width={1000}
          height={300}
          fill={"#138510"}
        >
          <Circle
            zIndex={0}
            y={-10}
            scale={0.55}
            width={1000}
            height={300}
            fill={"#0b5209"}
          />
        </Circle>
      </Node>
    );
  }

  public *showArm() {
    yield* all(
      tween(0.2, (value) => {
        this.leftArm().position.x(easeOutCubic(value, -700, -220));
      }),
      tween(0.2, (value) => {
        this.rightArm().position.x(easeOutCubic(value, 700, 135));
      })
    );
  }

  public *showLeg() {
    yield* all(
      tween(0.2, (value) => {
        this.leftLeg().position.y(easeOutCubic(value, 1600, 250));
      }),
      delay(
        0.15,
        tween(0.2, (value) => {
          this.rightLeg().position.y(easeOutCubic(value, 1600, 250));
        })
      ),
      delay(
        0.2,
        tween(0.2, (value) => {
          this.ground().position.y(easeOutCubic(value, 1600, 300));
        })
      )
    );
  }

  public *showFace() {
    yield* all(
      tween(0.5, (value) => {
        this.leftEye().scale(easeOutBounce(value, 0, 1));
      }),
      delay(
        0.15,
        tween(0.5, (value) => {
          this.rightEye().scale(easeOutBounce(value, 0, 1));
        })
      ),
      delay(
        0.2,
        tween(0.5, (value) => {
          this.leftBlush().scale(easeOutBounce(value, 0, 1));
        })
      ),
      delay(
        0.25,
        tween(0.5, (value) => {
          this.rightBlush().scale(easeOutBounce(value, 0, 1));
        })
      ),
      delay(
        0.3,
        tween(0.5, (value) => {
          this.mouth().scale(easeOutBounce(value, 0, 1));
        })
      )
    );
  }

  public *showBody() {
    yield* tween(0.2, (value) => {
      this.body().scale(easeOutCubic(value, 0, 0.2));
    });
  }

  public *resizeBody() {
    yield* tween(0.5, (value) => {
      this.body().scale(easeOutCubic(value, 0.2, 1));
    });
  }

  public *animate() {
    yield* tween(0.2, (value) => {
      this.rightArm().rotation(easeInOutCubic(value, 10, 45));
    });
    yield* tween(0.2, (value) => {
      this.rightArm().rotation(easeInOutCubic(value, 45, 10));
    });
    yield* tween(0.2, (value) => {
      this.rightArm().rotation(easeInOutCubic(value, 10, 45));
    });
    yield* tween(0.2, (value) => {
      this.rightArm().rotation(easeInOutCubic(value, 45, 10));
    });
    yield* tween(0.2, (value) => {
      this.rightArm().rotation(easeInOutCubic(value, 10, 45));
    });
    yield* tween(0.2, (value) => {
      this.rightArm().rotation(easeInOutCubic(value, 45, 10));
    });
  }
}
