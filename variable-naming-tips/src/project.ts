import {makeProject} from '@motion-canvas/core/lib';
import { Vector2 } from '@motion-canvas/core/lib/types';

// import example from './scenes/example?scene';
import intro from './scenes/intro?scene';
import introTwo from './scenes/introTwo?scene';
import partSatu from './scenes/partSatu?scene';
import partDua from './scenes/partDua?scene';
import partTiga from './scenes/partTiga?scene';
import partEmpat from './scenes/partEmpat?scene';
import outro from './scenes/outro?scene';

import audio from '../audio/fullAudio_mixdown.wav'

export default makeProject({
  scenes: [intro, introTwo, partSatu, partDua, partTiga, partEmpat, outro],
  background: '#141414',
  size: new Vector2(1080, 1920),
  audio: audio,
});
