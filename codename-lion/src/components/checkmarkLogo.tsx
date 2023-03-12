import { Img, ImgProps, Node } from "@motion-canvas/2d/lib/components";
import { easeOutBounce, tween } from "@motion-canvas/core/lib/tweening";
import { createRef } from "@motion-canvas/core/lib/utils";
import checkCircle from "../images/checkCircle.svg";

export interface CheckmarkLogoProps extends ImgProps {}

export class CheckmarkLogo extends Node {
  private checkmark = createRef<Img>();

  public constructor(props?: CheckmarkLogoProps) {
    super({ ...props });

    this.add(
      <Node>
        <Img
          ref={this.checkmark}
          src={checkCircle}
          height={80}
          x={120}
          y={-100}
          scale={0}
        />
        <Img src={props.src} height={props.height} />
      </Node>
    );
  }

  public *markComplete() {
    yield* tween(1, (value) => {
      this.checkmark().scale(easeOutBounce(value, 0, 1));
    });
  }
}
