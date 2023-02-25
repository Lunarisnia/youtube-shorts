import {makeProject} from '@motion-canvas/core/lib';

import intro from './scenes/intro?scene';
import partOne from './scenes/partOne?scene';
import partTwo from './scenes/partTwo?scene';
import partThree from './scenes/partThree?scene';
import outro from './scenes/outro?scene';


import audio from '../audio/common-mistake-all.wav'
import { Vector2 } from '@motion-canvas/core/lib/types';

export default makeProject({
  scenes: [intro, partOne, partTwo, partThree, outro],
  background: '#141414',
  size: new Vector2(1080, 1920),
  audio: audio,
});
