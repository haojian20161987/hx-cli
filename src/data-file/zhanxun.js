//五条线，上下两个图，一共10条线。需求线、阶段需求线、实有线、战储线、总线。
//需求 是用户提供的，阶段需求也是、实有是后端计算出来的，战储线是实有线*0.4，总线是需求+阶段需求+战储
//上面是寿命图，下面是数量图。
//用户需要填写月份对应的寿命、数量，寿命下面分两个，需求和阶段需求。数量下面也是分两个。需求和阶段需求。

let xdata = [];
let year = 2017;
for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 13; j++) {
        let tmp = year + i;
        xdata.push(tmp + '年' + j + '月');
    }
}

let realhav = [],
    nec = [],
    nec2 = [],
    zhanchu = [],
    zongxu = [];
for (let i = 0; i < 48; i++) {
    let tmp1 = new Number(Math.random() * 500);
    tmp1 = Math.round(tmp1) + 1500;
    let tmp2 = Math.round(Math.random() * 500) + 1000;
    let tmp3 = Math.round(Math.random() * 500) + 500;

    realhav.push(tmp1);
    nec.push(tmp2);
    nec2.push(tmp3);
    zhanchu.push(Math.round(tmp1 * 0.4));
    zongxu.push(Math.round(tmp2 + tmp3 + tmp1 * 0.4));
}
// let xuqiu = 3500, jiexuqiu = 400;
// for (let i = 0; i < 12;i++){
//     nec.push(xuqiu);
//     nec2.push(jiexuqiu);
//     //realhav.push()
// }

export { xdata, realhav, nec, nec2, zhanchu, zongxu };