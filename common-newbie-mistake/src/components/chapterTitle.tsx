import { Node, NodeProps, Rect } from "@motion-canvas/2d/lib/components";
import {
  initial,
  interpolation,
  signal,
} from "@motion-canvas/2d/lib/decorators";
import { all, delay } from "@motion-canvas/core/lib/flow";
import {
  createSignal,
  SignalValue,
  SimpleSignal,
} from "@motion-canvas/core/lib/signals";
import {
  easeOutBounce,
  easeOutCubic,
  textLerp,
  tween,
} from "@motion-canvas/core/lib/tweening";
import { Vector2 } from "@motion-canvas/core/lib/types";
import { createRef, useDuration } from "@motion-canvas/core/lib/utils";
import { JetbrainText } from "./jetbrainText";

export interface ChapterTitleProps extends NodeProps {
  chapterNumberText?: SignalValue<string>;
  chapterTitleText?: SignalValue<string>;
  titleTextX?: number;
  titleTextY?: number;
}

export class ChapterTitle extends Node {
  @initial("1")
  @interpolation(textLerp)
  @signal()
  public declare readonly chapterNumberText: SimpleSignal<string, this>;
  
  @initial("LOREM\nIPSUM")
  @interpolation(textLerp)
  @signal()
  public declare readonly chapterTitleText: SimpleSignal<string, this>;

  private readonly container = createRef<Rect>();
  private readonly chapterNumber = createRef<JetbrainText>();
  private readonly chapterTitle = createRef<JetbrainText>();

  private readonly titlePosition = Vector2.createSignal([0, 0]);
  private readonly titleScale = createSignal(0);

  public constructor(props?: ChapterTitleProps) {
    super({ ...props });

    this.add(
      <>
        <Rect
          width={300}
          height={300}
          radius={100}
          position={() => this.titlePosition()}
          scale={() => this.titleScale()}
          fill={"#3a3a3a"}
          ref={this.container}
        />
        <JetbrainText
          fontSize={240}
          scale={() => this.titleScale()}
          position={() => this.titlePosition()}
          ref={this.chapterNumber}
          text={() => this.chapterNumberText()}
        />
        <JetbrainText
          scale={0}
          fontSize={90}
          ref={this.chapterTitle}
          x={props.titleTextX || -30}
          y={props.titleTextY || -710}
          text={() => this.chapterTitleText()}
        />
      </>
    );
  }
  public *animate() {
    yield* all(
      tween(0.4, (value) => {
        this.titleScale(easeOutBounce(value, 0, 1));
      }),
      delay(
        useDuration("MoveDelay"),
        tween(0.4, (value) => {
          this.titlePosition(
            new Vector2(
              easeOutCubic(value, 0, -400),
              easeOutCubic(value, 0, -700)
            )
          );
        })
      ),
      delay(
        useDuration("ExpandDelay"),
        tween(0.2, (value) => {
          this.container().width(easeOutCubic(value, 300, 1600));
        })
      ),
      delay(
        useDuration("TitleDelay"),
        tween(0.2, (value) => {
          this.chapterTitle().scale(easeOutCubic(value, 0, 1));
        })
      )
    );
  }
}
