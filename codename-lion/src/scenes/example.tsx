import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {waitFor} from '@motion-canvas/core/lib/flow';
import { createRef } from '@motion-canvas/core/lib/utils';
import { TitleScreen } from '../components/titleScreeen';
import { TechNumber } from '../components/techNumber';

export default  makeScene2D(function* (view) {
  // Create your animations here
  const opening = createRef<TechNumber>();
  view.add(
    <TechNumber ref={opening} chapterTextNumber={"1"} sub2={"YANG"} sub3={"BAGUS"} sub1={"CARA MENAMAKAN VARIABEL"} />
  );
  const titleTransition = createRef<TitleScreen>();
  view.add(
    <TitleScreen ref={titleTransition} />
  );
  yield* titleTransition().animate();
  yield* opening().animate();
  yield* waitFor(5);
});
