import {makeProject} from '@motion-canvas/core/lib';

import intro from './scenes/intro?scene';
import partOne from './scenes/partOne?scene';


import audio from '../audio/common-mistake-all.wav'
import { Vector2 } from '@motion-canvas/core/lib/types';

export default makeProject({
  scenes: [intro, partOne],
  background: '#141414',
  size: new Vector2(1080, 1920),
  audio: audio,
});
