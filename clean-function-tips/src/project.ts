import {makeProject} from '@motion-canvas/core/lib';
import { Vector2 } from '@motion-canvas/core/lib/types/Vector';

import intro from './scenes/intro?scene';
import partOne from './scenes/partOne?scene';
import partTwo from './scenes/partTwo?scene';
import partThree from './scenes/partThree?scene';
import partFour from './scenes/partFour?scene';
import outro from './scenes/outro?scene';

import audio from '../audio/cft_all.wav'

export default makeProject({
  scenes: [intro, partOne, partTwo, partThree, partFour, outro],
  background: '#141414',
  size: new Vector2(1080, 1920),
  audio: audio,
});
