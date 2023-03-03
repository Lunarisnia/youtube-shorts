import { Image, ImageProps, Node } from "@motion-canvas/2d/lib/components";
import { easeOutBounce, tween } from "@motion-canvas/core/lib/tweening";
import { createRef } from "@motion-canvas/core/lib/utils";
import checkCircle from "../images/checkCircle.svg";

export interface CheckmarkLogoProps extends ImageProps {}

export class CheckmarkLogo extends Node {
  private checkmark = createRef<Image>();

  public constructor(props?: CheckmarkLogoProps) {
    super({ ...props });

    this.add(
      <Node>
        <Image
          ref={this.checkmark}
          src={checkCircle}
          height={80}
          x={120}
          y={-100}
          scale={0}
        />
        <Image src={props.src} height={props.height} />
      </Node>
    );
  }

  public *markComplete() {
    yield* tween(1, (value) => {
      this.checkmark().scale(easeOutBounce(value, 0, 1));
    });
  }
}
