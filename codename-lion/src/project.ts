import { makeProject } from "@motion-canvas/core";
import { Vector2 } from "@motion-canvas/core/lib/types";

import intro from "./scenes/backend/intro?scene";
import partOne from "./scenes/backend/partOne?scene";
import partTwo from "./scenes/backend/partTwo?scene";
import partThree from "./scenes/backend/partThree?scene";
import outro from "./scenes/outro?scene";

import audio from "../audio/beBetter_mixdown.wav";

export default makeProject({
  scenes: [intro, partOne, partTwo, partThree, outro],
  audio: audio
});
