//折线和柱状图的组合。
let legendData = ['剩余寿命折线','剩余寿命','40%标准梯形线'];
let xAxisData = ['901','902','903','904','905','906','907','908','909','910','911','912','913','914','915','916','917'];
let series1Data = [20,23,32,43,50,57,72,87,93,134,180,185,191,219,234,246,273];
// series0Data.forEach(function(v,i,a){
//     a[i] = v/10;
// })
// series1Data.forEach(function(v,i,a){
//     a[i] = series0Data[i] - 30 + Math.round(Math.random()*60); 
// })
let seriseData = [
    [100,100,120,180,190,350,380,620,680,690,700,850,890,900,950,960,1000],
    [80,100,120,180,190,300,350,620,680,690,700,750,800,850,900,950,1000],
    [60,80,120,180,190,250,300,350,400,450,500,600,700,800,900,960,1000],
    [50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850]
]
export {legendData,xAxisData,series0Data,series1Data,seriseData};