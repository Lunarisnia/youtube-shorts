import { Node, Text, TextProps } from "@motion-canvas/2d/lib/components";
import { colorSignal, initial, interpolation, signal } from "@motion-canvas/2d/lib/decorators";
import { SignalValue, SimpleSignal } from "@motion-canvas/core/lib/signals";
import { textLerp } from "@motion-canvas/core/lib/tweening";
import { ColorSignal, PossibleColor } from "@motion-canvas/core/lib/types";

export interface JetbrainTextProps extends TextProps {
  fill?: SignalValue<PossibleColor>;
  children?: string;
  text?: SignalValue<string>;
  fontWeight?: SignalValue<number>;
}

export class JetbrainText extends Node {
  @initial("#fff")
  @colorSignal()
  public declare readonly fill: ColorSignal<this>;

  @initial(800)
  public declare readonly fontWeight: SignalValue<number>;
  
  @initial('')
  @interpolation(textLerp)
  @signal()
  public declare readonly text: SimpleSignal<string, this>;

  public constructor(props?: JetbrainTextProps) {
    super({ ...props });

    this.add(
      <Text
        ref={props.ref}
        fontSize={props.fontSize}
        fontWeight={props.fontWeight}
        fill={this.fill()}
        fontFamily={'"JetBrains Mono", monospace'}
        maxWidth={1080}
        textWrap={"pre"}
        // justifyContent={"center"}
        alignItems={"center"}
        text={() => this.text()}
      />
    );
  }
}
