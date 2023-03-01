import {
  Circle,
  Layout,
  Line,
  Node,
  NodeProps,
} from "@motion-canvas/2d/lib/components";
import { initial, signal } from "@motion-canvas/2d/lib/decorators";
import { all, delay, waitFor } from "@motion-canvas/core/lib/flow";
import {
  createSignal,
  SignalValue,
  SimpleSignal,
} from "@motion-canvas/core/lib/signals";
import {
  easeInOutCubic,
  easeOutCubic,
  tween,
} from "@motion-canvas/core/lib/tweening";
import { Vector2, PossibleVector2 } from "@motion-canvas/core/lib/types";
import { createRef } from "@motion-canvas/core/lib/utils";
import { JetbrainText } from "./jetbrainText";

export interface TechNumberProps extends NodeProps {
  chapterTextNumber?: SignalValue<string>;
  sub1?: SignalValue<string>;
  sub2?: SignalValue<string>;
  sub3?: SignalValue<string>;
}

export class TechNumber extends Node {
  private container = createRef<Node>();

  private titleNumber = createRef<JetbrainText>();
  private layoutContainer = createRef<Layout>();
  private scanlinePoints = createSignal<PossibleVector2[]>([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ]);

  private textPosition = createSignal<number>(0);
  private textScale = createSignal<number>(0);

  @initial(``)
  @signal()
  public declare readonly chapterTextNumber: SimpleSignal<string, this>;

  @initial(``)
  @signal()
  public declare readonly sub1: SimpleSignal<string, this>;

  @initial(``)
  @signal()
  public declare readonly sub2: SimpleSignal<string, this>;

  @initial(``)
  @signal()
  public declare readonly sub3: SimpleSignal<string, this>;

  public constructor(props?: TechNumberProps) {
    super({ ...props });

    this.add(
      <Node ref={this.container}>
        <Line
          points={() => this.scanlinePoints()}
          closed
          fill={"#fff"}
          lineWidth={4}
          stroke={"#fff"}
        />
        <Line
          rotation={180}
          points={() => this.scanlinePoints()}
          closed
          fill={"#fff"}
          lineWidth={4}
          stroke={"#fff"}
        />
        <JetbrainText
          zIndex={1}
          ref={this.titleNumber}
          text={() => `${this.chapterTextNumber()}`}
          x={() => this.textPosition() * 0}
          scale={() => this.textScale()}
          fontSize={200}
          y={15}
        />
        <JetbrainText
          text={() => `${this.chapterTextNumber()}`}
          fill={"#141414"}
          stroke={`#fff`}
          lineWidth={3}
          scale={() => this.textScale()}
          fontSize={200}
          x={() => 120 * this.textPosition()}
          y={15}
          zIndex={0}
        />
        <JetbrainText
          text={() => `${this.chapterTextNumber()}`}
          fill={"#141414"}
          stroke={`#fff`}
          lineWidth={3}
          scale={() => this.textScale()}
          fontSize={200}
          x={() => 240 * this.textPosition()}
          y={15}
          zIndex={0}
        />
        <JetbrainText
          text={() => `${this.chapterTextNumber()}`}
          fill={"#141414"}
          stroke={`#fff`}
          lineWidth={3}
          scale={() => this.textScale()}
          fontSize={200}
          x={() => 360 * this.textPosition()}
          y={15}
          zIndex={0}
        />
        <JetbrainText
          text={() => `${this.chapterTextNumber()}`}
          fill={"#141414"}
          stroke={`#fff`}
          lineWidth={3}
          scale={() => this.textScale()}
          fontSize={200}
          x={() => 480 * this.textPosition()}
          y={15}
          zIndex={0}
        />
        <JetbrainText
          text={() => `${this.chapterTextNumber()}`}
          fill={"#141414"}
          stroke={`#fff`}
          lineWidth={3}
          scale={() => this.textScale()}
          fontSize={200}
          x={() => 600 * this.textPosition()}
          y={15}
          zIndex={0}
        />
        <JetbrainText
          text={() => `${this.chapterTextNumber()}`}
          fill={"#141414"}
          stroke={`#fff`}
          lineWidth={3}
          scale={() => this.textScale()}
          fontSize={200}
          x={() => -120 * this.textPosition()}
          y={15}
          zIndex={0}
        />
        <JetbrainText
          text={() => `${this.chapterTextNumber()}`}
          fill={"#141414"}
          stroke={`#fff`}
          lineWidth={3}
          scale={() => this.textScale()}
          fontSize={200}
          x={() => -240 * this.textPosition()}
          y={15}
          zIndex={0}
        />
        <JetbrainText
          text={() => `${this.chapterTextNumber()}`}
          fill={"#141414"}
          stroke={`#fff`}
          lineWidth={3}
          scale={() => this.textScale()}
          fontSize={200}
          x={() => -360 * this.textPosition()}
          y={15}
          zIndex={0}
        />
        <JetbrainText
          text={() => `${this.chapterTextNumber()}`}
          fill={"#141414"}
          stroke={`#fff`}
          lineWidth={3}
          scale={() => this.textScale()}
          fontSize={200}
          x={() => -480 * this.textPosition()}
          y={15}
          zIndex={0}
        />
        <JetbrainText
          text={() => `${this.chapterTextNumber()}`}
          fill={"#141414"}
          stroke={`#fff`}
          lineWidth={3}
          scale={() => this.textScale()}
          fontSize={200}
          x={() => -600 * this.textPosition()}
          y={15}
          zIndex={0}
        />
        <Layout
          ref={this.layoutContainer}
          layout
          direction={"column"}
          opacity={0}
          y={250}
        >
          <JetbrainText
            fontSize={70}
            text={() => this.sub1()}
            justifyContent={"center"}
          />
          <JetbrainText
            text={() => this.sub2()}
            fontSize={70}
            justifyContent={"center"}
          />
          <JetbrainText
            text={() => this.sub3()}
            fontSize={70}
            justifyContent={"center"}
          />
        </Layout>
      </Node>
    );
  }

  public *animate(duration: number) {
    yield* this.scanlinePoints(
      [
        [100, 0],
        [-100, 0],
        [-100, 0.001],
        [100, 0.002],
      ],
      0.2 * duration
    );
    yield* waitFor(0.1 * duration);
    yield* this.scanlinePoints(
      [
        [100, 0],
        [-100, 0],
        [-100, 100],
        [100, 100],
      ],
      0.2 * duration
    );
    yield* this.textScale(1, 0);
    yield* this.chapterTextNumber(this.chapterTextNumber(), 0);
    yield* this.scanlinePoints(
      [
        [100, 100.001],
        [-100, 100.001],
        [-100, 100],
        [100, 100],
      ],
      0.2 * duration
    );
    yield* all(
      this.scanlinePoints(
        [
          [1080, 100.001],
          [-1080, 100.001],
          [-100, 100],
          [100, 100],
        ],
        0.2 * duration
      ),
      delay(
        0.05 * duration,
        tween(0.2 * duration, (value) => {
          this.textPosition(easeInOutCubic(value, 0, 1));
        })
      )
    );
    yield* waitFor(0.2 * duration);
    yield* all(
      delay(
        0.05 * duration,
        this.scanlinePoints(
          [
            [100, 100.001],
            [-100, 100.001],
            [-100, 100],
            [100, 100],
          ],
          0.2 * duration
        )
      ),
      tween(0.2 * duration, (value) => {
        this.textPosition(easeInOutCubic(value, 1, 0));
      }),
      tween(0.4 * duration, (value) => {
        this.layoutContainer().opacity(easeInOutCubic(value, 0, 1));
      })
    );
    yield* tween(0.3 * duration, (value) => {
      this.container().position.y(easeInOutCubic(value, 0, -750));
    });
  }
}
