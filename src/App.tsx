import React, { useState } from 'react';
import styled from "styled-components";

const Title = styled.div`
  color: black;
  font-size: 300%;
`
const All = styled.div`
  text-align: center;
`

const Button = styled.button`
  font-size: 20px;
  margin: 10px;
  padding: 10px 17px;
  bottom: 10px;
`

// 目玉が5個
const Eye = styled.div`
  background-color: #ffffff;
  height: 50%;
  width: 50%;
  position: relative;
  border-radius: 50% 50% 50% 50%;
  top: ${() => {
    const posY = Math.floor(Math.random() * 50);
    return `${posY}%`;
  }};
  left: ${() => {
    const posX = Math.floor(Math.random() * 50);
    return `${posX}%`;
  }}
`

const Pupil = styled.div`
  background-color: #0180ff;
  height: 10px;
  width: 10px;
  border-radius: 80% 80% 80% 80%;
  position: relative;
  top: ${() => {
    const posY = Math.floor(Math.random() * 50);
    return `${posY}%`;
  }};
  left: ${() => {
    const posX = Math.floor(Math.random() * 50);
    return `${posX}%`;
  }}
`

// 細胞が12個
const Cell = styled.div`
  background-color: #ff0000;
  height: ${() => {
    let y = Math.random() * 100;
    return `${y}px`;
  }};
  width: ${() => {
    let x = Math.random() * 100;
    return `${x}px`;
  }};
  border-radius: 80% 80% 80% 80%;
  position: relative;
  top: ${() => {
    // const posY = positions[countY][0];
    // countY++;
    
    let y = Math.random() * 100;
    return `${y}%`;
  }};
  left: ${() => {
    // const posX = positions[countX][1];
    // countX++;
    let x = Math.random() * 100;
    return `${x}%`;
  }}
`


const Screen = styled.div`
  height: 400px;
  width: 400px;
  text-align: center;
  display: flex;
  position: relative;
  top: -50%;
  left: -25%;
`

// 引数：座標、大きさを渡す
// function generatedLife() {
//   const isEyeAnsers = randBools();
//   return isEyeAnsers.map((res, i) => {
//     return res ? <Cell><Eye><Pupil></Pupil></Eye></Cell> : <Cell></Cell>
//   })
// };

// const defaultPositions = positions;

// ランダム
export function randTwenty() {
  let twentyList: number[] = [];
  for (let i = 0; i < 12;) {
    const resultOfRandomGen = 1 + Math.floor(Math.random() * 12);
    if (!twentyList.includes(resultOfRandomGen)) {
      twentyList.push(resultOfRandomGen);
      i++;
    }
    else {
      continue;
    }
  }
  return twentyList;
}

export function randBools() {
  const twentyList: number[] = randTwenty();
  const resultBools: boolean[] = [];
  twentyList.forEach((i: number) => {
    resultBools.push(i < 6);
  })
  return resultBools;
}

// async function screenShotAndTweet() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.screenshot({ path: 'lifes.png' });
//   // await browser.close();
// }

function generateCell(isEye) {
  return isEye ? <Cell><Eye><Pupil></Pupil></Eye></Cell> : <Cell></Cell>
}

export const App = () => {
  const [isLifes, setIsLifes] = useState<boolean[]>(randBools());
  return (
    <All>
      <Title>sparkle of life</Title>
      <Screen className="mx-auto">
        {isLifes != null && isLifes.map((res, i) => {
          return generateCell(res);
        })}
      </Screen>
      <Button type="button" className="btn btn-outline-primary rounded-pill" onClick={() => setIsLifes(randBools())}>Generate life</Button>
      {/* <div>
        <Button type="button" className="btn btn-primary rounded-pill"><i className="fab fa-twitter"></i> Tweet sparkle of life</Button>
      </div> */}
    </All>
  );
}

export default App;