let xItems = [];
let year = 2017;
for(let i=0;i < 4;i++){
    let tmpyear = year + i;
    for(let j=1;j < 13;j++){
        xItems.push(tmpyear + '-'+j);
    }
}

let seriesData1= [],seriesData2 = [];
for(let i=0;i < 48;i++){
    let tmp = Math.round(Math.random()*100);
    seriesData1.push(tmp);
    seriesData2.push(tmp+100);
}

let response = {
    xItems:{
        name:'时间',
        value:xItems
    },
    yItems:[
        {
            name:'a1',
            value:seriesData1
        },
        {
            name:'a2',
            value:seriesData2
        }
    ]
}

export { response };