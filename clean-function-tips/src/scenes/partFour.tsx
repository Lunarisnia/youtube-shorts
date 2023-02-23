import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor } from "@motion-canvas/core/lib/flow";
import { Direction, Vector2 } from "@motion-canvas/core/lib/types";
import {
  fadeTransition,
  zoomOutTransition,
} from "@motion-canvas/core/lib/transitions";
import { Image, Rect, Text } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import {
  CodeBlock,
  edit,
  insert,
  lines,
  remove,
  word,
} from "@motion-canvas/2d/lib/components/CodeBlock";

export default makeScene2D(function* (view) {
  // Create your animations here
  const one = createRef<Text>();
  view.add(
    <Text
      ref={one}
      x={0}
      y={0}
      fontSize={500}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`4`}
    />
  );
  yield* one().position(new Vector2(-380, -700), 0.2);
  yield* one().fontSize(300, 0.2);
  const titleRef = createRef<Text>();
  view.add(
    <Text
      ref={titleRef}
      x={-90}
      y={-720}
      fontSize={70}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={``}
    />
  );
  yield* titleRef().text(`PASTIKAN\n1 FUNGSI\n1 TUJUAN`, 0.48);
  const srpCode = createRef<CodeBlock>();
  yield view.add(
    <CodeBlock 
    ref={srpCode}
    language="js"
    code={
    `
    `}
    />
  );
  yield* srpCode().edit(0.5)
  `
  ${insert(
  `function add(x, y) {
  return x + y;
}
  `)}
  `;
  yield* srpCode().edit(0.5)
  `function add(x, y) {
  return x + y;
}
  ${insert(
  `
function subtract(x, y) {
  return x - y;
}
  `)}
  `;
  yield* srpCode().edit(0.5)
  `function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
  ${insert(
  `
function multiply(x, y) {
  return x * y;
}
  `)}
  `;
  yield* srpCode().edit(0.5)
  `function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}
  ${insert(
  `
function divide(x, y) {
  return x / y;
}
  `)}
  `;
  yield* waitFor(0.5);
  yield* srpCode().fontSize(0, 0.5)
  yield* srpCode().edit(0)
  `
  function eliminateNegativeAndCheckIfBiggerThanFour(numbers) {
    // Take only positive numbers
    const positiveNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }

    // Check if any is bigger than four
    for (const number of positiveNumbers) {
        if (number > 4) {
            console.log("YES!");
            break;
        }
    }
  }
  `;
  yield* srpCode().selection(lines(0, Infinity), 0);
  yield* srpCode().fontSize(30, 0.3);
  yield* srpCode().edit(1, false)
  `
  function eliminateNegativeAndCheckIfBiggerThanFour(numbers) {
    // Take only positive numbers
    const positiveNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }

    // Check if any is bigger than four
    for (const number of positiveNumbers) {
        if (number > 4) {
            console.log("YES!");
            break;
        }
    }
  }${insert(`\n\n  function isAnyBiggerThanFour(positiveNumbers) {

  }`)}
  `;
  yield* srpCode().edit(1, false)
  `
  function eliminateNegativeAndCheckIfBiggerThanFour(numbers) {
    // Take only positive numbers
    const positiveNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }${remove(`\n\n    // Check if any is bigger than four
    for (const number of positiveNumbers) {
        if (number > 4) {
            console.log("YES!");
            break;
        }
    }`)}
  }

  function isAnyBiggerThanFour(positiveNumbers) {
    ${insert(`
    for (const number of positiveNumbers) {
        if (number > 4) {
            console.log("YES!");
            return;
        }
    }
    console.log("NO");`)}
  }
  `;
  yield* srpCode().edit(1, false)
  `
  function eliminateNegativeAndCheckIfBiggerThanFour(numbers) {
    ${remove(`// Take only positive numbers
    const positiveNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }`)}
  }

  function isAnyBiggerThanFour(positiveNumbers) {
    for (const number of positiveNumbers) {
        if (number > 4) {
            console.log("YES!");
            return;
        }
    }
    console.log("NO");
  }${insert(`\n\n
  function eliminateNegative(numbers) {
    const positiveNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }
    return positiveNumbers;
  }
  `)}
  `;
  yield* srpCode().edit(1, false)
  `
  ${remove(`function eliminateNegativeAndCheckIfBiggerThanFour(numbers) {

  }\n`)}
  function isAnyBiggerThanFour(positiveNumbers) {
    for (const number of positiveNumbers) {
        if (number > 4) {
            console.log("YES!");
            return;
        }
    }
    console.log("NO");
  }


  function eliminateNegative(numbers) {
    const positiveNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }
    return positiveNumbers;
  }

  `;
  yield* srpCode().fontSize(35, 0.5)
  // yield* waitFor(10);
});
