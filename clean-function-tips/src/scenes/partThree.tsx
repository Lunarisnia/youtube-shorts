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
  word,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import goGopher from "../images/goGopher.png";
import capybara from "../images/capybara.jpg";

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
      text={`3`}
    />
  );
  yield* one().position(new Vector2(-380, -700), 0.2);
  yield* one().fontSize(300, 0.2);
  const titleRef = createRef<Text>();
  view.add(
    <Text
      ref={titleRef}
      x={60}
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
  yield* titleRef().text(`KASIH INDENTASI\nDI KODE\nKAMU`, 0.48);
  const indentedRef = createRef<Text>();
  view.add(
    <Text
      ref={indentedRef}
      x={3000}
      y={-360}
      fontSize={100}
      fontWeight={800}
      fill={"#fff"}
      fontFamily={'"JetBrains Mono", monospace'}
      maxWidth={1080}
      textWrap={"pre"}
      justifyContent={"center"}
      alignItems={"center"}
      text={`❌ INDENT`}
    />
  );
  const codeRef = createRef<CodeBlock>();
  yield view.add(
    <CodeBlock 
    x={2000}
    ref={codeRef}
    language="js"
    fontSize={60}
    code={`
    function countToTen() 
    {
    for(let i=1;i<=10;i++)
    {
    console.log(i);
    }
    }`}
    />
  );
  // yield* indentedRef().position.x(0, 1);
  // yield* codeRef().position.x(0, 1);
  yield* all(
    indentedRef().position.x(0, 1),
    codeRef().position.x(0, 1)
  );
  yield* waitFor(1);
  yield* codeRef().fontSize(50, 0.2)
  yield* codeRef().edit(1)`
  ${edit(`
function countToTen() 
{
for(let i=1;i<=10;i++)
{
console.log(i);
}
}`, `
  function countToTen() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }`)}
  `;
  yield* indentedRef().text(`✅ INDENT`, 0)
  yield* codeRef().fontSize(40, 0.2)
  yield* codeRef().position.y(100, 0.2)
  yield* indentedRef().text(``, 0)
  yield* codeRef().edit(1)`
  ${edit(`
  function countToTen() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }`, `
  function findDurian(){
  const fruits=["Durian","Apple","Orange"]
  let durian="";
  for(const fruit of fruits) 
  {
  if (fruit=="Durian") 
  {
  durian=fruit;
  }
  }
  console.log(durian);
  }
  `)}
  `;
  yield* waitFor(6.4);
  yield* codeRef().selection(lines(0, Infinity), 0);
  yield* codeRef().edit(1, false)`
    function findDurian${edit(`(){`, `() {`)}
    ${edit(`const fruits=["Durian","Apple","Orange"]`, `  const fruits=["Durian","Apple","Orange"]`)} 
    ${edit(`let durian="";`, `  let durian="";`)}
    ${edit(`for(const fruit of fruits) 
  {`, `  for(const fruit of fruits) {`)}
    ${edit(`if (fruit=="Durian") 
  {`, `     if (fruit=="Durian") {`)}
    ${edit(`durian=fruit;`, `        durian=fruit;`)}
    ${edit(`}`, `     }`)}
    ${edit(`}`, `  }`)}
    ${edit(`console.log(durian);`, `  console.log(durian);`)}
    }
  `;
  yield* waitFor(1.2);
});
