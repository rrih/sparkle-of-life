function positions () {
  const pos: number[][] = [];
  for (let i = 0; i < 12; i++) {
    // let posX = i - 150;
    // let posY = i - 10;
    // let angle = 30 * i; // 角度
    // let r = 100; //半径
    // let resX = posX + r * Math.cos(angle * (Math.PI/180));
    // let resY = posY + r * Math.sin(angle * (Math.PI/180));
    // pos.push([resX, resY]);
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    pos.push([x, y]);
  }
  // const pos = [
  //   [60, 0],
  //   [50, 0],
  //   [40, 0],
  //   [30, 0],
  //   [20, 0],
  //   [10, 50],
  //   [90, 10],
  //   [30, 0],
  //   [80, 0],
  //   [60, 0],
  //   [60, 0],
  //   [50, 0]
  // ];
  return pos;
};

export default positions();