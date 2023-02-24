import {
  NodeProps,
  Node,
  Rect,
  Circle,
} from "@motion-canvas/2d/lib/components";
import { colorSignal, initial, signal } from "@motion-canvas/2d/lib/decorators";
import { all } from "@motion-canvas/core/lib/flow";
import {
  createSignal,
  SignalValue,
  SimpleSignal,
} from "@motion-canvas/core/lib/signals";
import { easeInOutCubic, tween } from "@motion-canvas/core/lib/tweening";
import {
  Color,
  ColorSignal,
  PossibleColor,
} from "@motion-canvas/core/lib/types";
import { createRef } from "@motion-canvas/core/lib/utils";

export interface SwitchProps extends NodeProps {
  initialState?: SignalValue<boolean>;
  accent?: SignalValue<PossibleColor>;
}

export class Switch extends Node {
  @initial(false)
  @signal()
  public declare readonly initialState: SimpleSignal<boolean, this>; // Type defined is the type we want from the user

  @initial("#68ABDF")
  @colorSignal()
  public declare readonly accent: ColorSignal<this>;

  private isOn: boolean;
  private readonly indicator = createRef<Circle>();
  private readonly container = createRef<Rect>();
  private readonly offColor = new Color("#242424");
  private readonly indicatorPosition = createSignal(0);

  public constructor(props?: SwitchProps) {
    super({
      ...props,
    });

    this.indicatorPosition(this.initialState() ? 50 : -50);
    this.isOn = this.initialState();

    this.add(
      <Rect
        ref={this.container}
        fill={this.offColor}
        size={[200, 100]}
        radius={100}
      >
        <Circle
          ref={this.indicator}
          x={() => this.indicatorPosition()}
          size={[80, 80]}
          fill={"#fff"}
        />
      </Rect>
    );
  }
  public *toggle(duration: number) {
    yield* all(
      tween(duration, (value) => {
        const oldColor = this.isOn ? this.accent() : this.offColor;
        const newColor = this.isOn ? this.offColor : this.accent();

        this.container().fill(
          Color.lerp(oldColor, newColor, easeInOutCubic(value))
        );
      }),

      tween(duration, (value) => {
        const currentPos = this.indicator().position();

        this.indicatorPosition(
          easeInOutCubic(value, currentPos.x, this.isOn ? -50 : 50)
        );
      })
    );
    this.isOn = !this.isOn;
  }
}
