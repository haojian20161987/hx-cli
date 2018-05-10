//飞机的属性，可以由战区、单位、飞机类型、飞机系列、飞机型号组成。
//这是一个用于select联动的数据。数据简单了，那么view的排版会很困难，那么该如何做呢？如果view为核心，那么data就会很分散。
const zhanqu = [
    {
        value: 'bbzq',
        label: '北部空军',
        danwei: [
            {
                value: 'com1',
                label: '13团'
            },
            {
                value: 'com2',
                label: '14团'
            },
            {
                value: 'com3',
                label: '15团'
            },
            {
                value: 'com4',
                label: '1旅'
            },
            {
                value: 'com5',
                label: '1团'
            },
            {
                value: 'com6',
                label: '27团'
            },
            {
                value: 'com7',
                label: '2团'
            },
            {
                value: 'com8',
                label: '31团'
            },
            {
                value: 'com9',
                label: '31团'
            },
            {
                value: 'com10',
                label: '32团'
            },
            {
                value: 'com11',
                label: '33团'
            },
            {
                value: 'com12',
                label: '34团'
            },
            {
                value: 'com13',
                label: '35团'
            },
            {
                value: 'com14',
                label: '36团'
            },
            {
                value: 'com15',
                label: '3旅'
            },
            {
                value: 'com16',
                label: '3团'
            },
            {
                value: 'com17',
                label: '46团'
            },
            {
                value: 'com18',
                label: '47团'
            },
            {
                value: 'com19',
                label: '36团'
            },
            {
                value: 'com20',
                label: '4旅'
            },
            {
                value: 'com21',
                label: '5旅'
            },
            {
                value: 'com22',
                label: '61团'
            },
            {
                value: 'com23',
                label: '62团'
            },
            {
                value: 'com22',
                label: '63团'
            },
        ]
    },
    {
        value: 'xbzq',
        label: '西部战区',
        danwei: [
            {
                value: 'com23',
                label: '10团'
            },
            {
                value: 'com24',
                label: '11团'
            },
            {
                value: 'com25',
                label: '12团'
            },
            {
                value: 'com26',
                label: '16团'
            },
            {
                value: 'com27',
                label: '18团'
            },
            {
                value: 'com28',
                label: '1旅'
            },
            {
                value: 'com29',
                label: '2旅'
            },
            {
                value: 'com30',
                label: '3旅'
            },
            {
                value: 'com31',
                label: '4旅'
            },
            {
                value: 'com32',
                label: '5旅'
            },
            {
                value: 'com33',
                label: '68团'
            }
        ]
    },
    {
        value: 'nbzq',
        label: '南部空军',
        danwei: [
            {
                value: 'com34',
                label: '130团'
            },
            {
                value: 'com35',
                label: '131团'
            },
            {
                value: 'com36',
                label: '132团'
            },
            {
                value: 'com37',
                label: '22团'
            },
            {
                value: 'com38',
                label: '23团'
            },
            {
                value: 'com39',
                label: '24团'
            },
            {
                value: 'com40',
                label: '4团'
            },
            {
                value: 'com41',
                label: '52团'
            },
            {
                value: 'com42',
                label: '53团'
            },
            {
                value: 'com43',
                label: '54团'
            },
            {
                value: 'com44',
                label: '58团'
            }
        ]
    },
    {
        value: 'dbzq',
        label: '东部空军',
        danwei: [
            {
                value: 'com45',
                label: '25团'
            },
            {
                value: 'com46',
                label: '26团'
            },
            {
                value: 'com47',
                label: '28团'
            },
            {
                value: 'com48',
                label: '29团'
            },
            {
                value: 'com49',
                label: '40团'
            },
            {
                value: 'com50',
                label: '41团'
            },
            {
                value: 'com51',
                label: '42团'
            },
            {
                value: 'com52',
                label: '76团'
            },
            {
                value: 'com53',
                label: '77团'
            },
            {
                value: 'com54',
                label: '7团'
            },
            {
                value: 'com54',
                label: '82团'
            },
        ]
    },
    {
        value: 'zbzq',
        label: '中部战区',
        danwei: [
            {
                value: 'com55',
                label: '106团'
            },
            {
                value: 'com56',
                label: '107团'
            },
            {
                value: 'com57',
                label: '108团'
            },
            {
                value: 'com58',
                label: '19团'
            },
            {
                value: 'com59',
                label: '1旅'
            },
            {
                value: 'com60',
                label: '20团'
            },
            {
                value: 'com61',
                label: '21团'
            },
            {
                value: 'com62',
                label: '2旅'
            },
            {
                value: 'com63',
                label: '37团'
            },
            {
                value: 'com64',
                label: '38团'
            },
            {
                value: 'com65',
                label: '39团'
            }
        ]
    },
    {
        value: 'kz',
        label: '空直',
        danwei: [
            {
                value: 'com66',
                label: '100团'
            },
            {
                value: 'com67',
                label: '101团'
            },
            {
                value: 'com68',
                label: '102团'
            },
            {
                value: 'com69',
                label: '1团'
            },
            {
                value: 'com70',
                label: '2团'
            },
            {
                value: 'com71',
                label: '3团'
            },
            {
                value: 'com72',
                label: '4团'
            },
            {
                value: 'com73',
                label: '第1训练团'
            },
            {
                value: 'com74',
                label: '第2训练团'
            }, {
                value: 'com75',
                label: '第3训练团'
            }, {
                value: 'com76',
                label: '第4训练团'
            },
        ]
    }
];
const leixing = [
    {
        value: 'jianjiji',
        label: '歼击机',
        xilie: [
            {
                value: 'jianjiji1',
                label: '歼-10系列',
                xinghao: [
                    {
                        value: 'jianjiji11',
                        label: '歼-10S表演机'
                    },
                    {
                        value: 'jianjiji12',
                        label: '歼-10s双座机'
                    },
                    {
                        value: 'jianjiji13',
                        label: '歼-10'
                    },
                    {
                        value: 'jianjiji14',
                        label: '歼-10A'
                    },
                    {
                        value: 'jianjiji15',
                        label: '歼-10A表演机'
                    },
                    {
                        value: 'jianjiji16',
                        label: '歼-10B'
                    },
                    {
                        value: 'jianjiji17',
                        label: '歼-10C'
                    },
                    {
                        value: 'jianjiji18',
                        label: '歼-10S'
                    }
                ]
            },
            {
                value: 'jianjiji2',
                label: '歼-11系列',
                xinghao: [
                    {
                        value: 'jianjiji21',
                        label: '歼-11'
                    },
                    {
                        value: 'jianjiji22',
                        label: '歼-11B'
                    },
                    {
                        value: 'jianjiji23',
                        label: '歼-11BS'
                    }
                ]
            },
            {
                value: 'jianjiji3',
                label: '歼-16系列',
                xinghao: [
                    {
                        value: 'jianjiji31',
                        label: '歼-16'
                    },
                    {
                        value: 'jianjiji32',
                        label: '歼-16D'
                    }
                ]
            },
            {
                value: 'jianjiji4',
                label: '歼-20系列',
                xinghao: [
                    {
                        value: 'jianjiji41',
                        label: '歼-20'
                    }
                ]
            },
            {
                value: 'jianjiji5',
                label: '歼-7系列',
                xinghao: [
                    {
                        value: 'jianjiji51',
                        label: '歼-7B'
                    },
                    {
                        value: 'jianjiji52',
                        label: '歼-7E'
                    },
                    {
                        value: 'jianjiji53',
                        label: '歼-7G'
                    },
                    {
                        value: 'jianjiji54',
                        label: '歼-7L'
                    }
                ]
            },
            {
                value: 'jianjiji6',
                label: '歼-8系列',
                xinghao: [
                    {
                        value: 'jianjiji61',
                        label: '歼-8D'
                    },
                    {
                        value: 'jianjiji62',
                        label: '歼-8DH'
                    },
                    {
                        value: 'jianjiji63',
                        label: '歼-8F'
                    },
                    {
                        value: 'jianjiji64',
                        label: '歼-8H'
                    },
                    {
                        value: 'jianjiji65',
                        label: '歼侦-8F'
                    },
                    {
                        value: 'jianjiji66',
                        label: '歼-8DF'
                    }
                ]
            },
            {
                value: 'jianjiji7',
                label: '苏-27系列',
                xinghao: [
                    {
                        value: 'jianjiji71',
                        label: '苏-27CK'
                    },
                    {
                        value: 'jianjiji72',
                        label: '苏-27YBK'
                    }
                ]
            },
            {
                value: 'jianjiji8',
                label: '苏-30系列',
                xinghao: [
                    {
                        value: 'jianjiji81',
                        label: '苏-30MKK'
                    }
                ]
            },
            {
                value: 'jianjiji9',
                label: '苏-35系列',
                xinghao: [
                    {
                        value: 'jianjiji91',
                        label: '苏-35'
                    }
                ]
            },
        ]
    },
    {
        value: 'hongzhaji',
        label: '轰炸机',
        xilie: [
            {
                value: 'hongzhaji1',
                label: '轰-6系列',
                xinghao: [
                    {
                        value: 'hongzhaji11',
                        label: '轰-6'
                    },
                    {
                        value: 'hongzhaji12',
                        label: '轰-6F'
                    },
                    {
                        value: 'hongzhaji13',
                        label: '轰-6H'
                    },
                    {
                        value: 'hongzhaji14',
                        label: '轰-6M'
                    },
                    {
                        value: 'hongzhaji15',
                        label: '轰-6N'
                    },
                    {
                        value: 'hongzhaji16',
                        label: '轰干-6'
                    },
                    {
                        value: 'hongzhaji17',
                        label: '轰-6K'
                    },

                    {
                        value: 'hongzhaji19',
                        label: '轰侦-6'
                    }
                ]
            },
            {
                value: 'hongzhaji2',
                label: '歼轰-7系列',
                xinghao: [
                    {
                        value: 'hongzhaji21',
                        label: '歼轰-7A'
                    },
                    {
                        value: 'hongzhaji22',
                        label: '歼轰-7A2'
                    }
                ]
            }
        ]
    },
    {
        value: 'yunshuji',
        label: '运输机',
        xilie: [
            {
                value: 'yunshuji1',
                label: '运-12系列',
                xinghao: [
                    {
                        value: 'yunshuji11',
                        label: '运-12航测机'
                    },
                    {
                        value: 'yunshuji12',
                        label: '运-12D'
                    }
                ]
            },
            {
                value: 'yunshuji2',
                label: '运-20系列',
                xinghao: [
                    {
                        value: 'yunshuji21',
                        label: '运-20'
                    },
                    {
                        value: 'yunshuji22',
                        label: '运-20A'
                    },
                    {
                        value: 'yunshuji23',
                        label: '运-20加油机'
                    }
                ]
            },
            {
                value: 'yunshuji3',
                label: '运-5系列',
                xinghao: [
                    {
                        value: 'yunshuji31',
                        label: '运-5A'
                    },
                    {
                        value: 'yunshuji32',
                        label: '运-5B'
                    }
                ]
            },
            {
                value: 'yunshuji4',
                label: '运-7系列',
                xinghao: [
                    {
                        value: 'yunshuji41',
                        label: '运-7G'
                    },
                    {
                        value: 'yunshuji42',
                        label: '运-7J'
                    },
                    {
                        value: 'yunshuji43',
                        label: '运-7K'
                    },
                    {
                        value: 'yunshuji44',
                        label: '运-7领航机'
                    }
                ]
            },
            {
                value: 'yunshuji5',
                label: '运-8系列',
                xinghao: [
                    {
                        value: 'yunshuji51',
                        label: '运-8'
                    },
                    {
                        value: 'yunshuji52',
                        label: '运-8C'
                    },
                    {
                        value: 'yunshuji53',
                        label: '运-8航测机'
                    },
                    {
                        value: 'yunshuji54',
                        label: '运-8C航测机'
                    },
                    {
                        value: 'yunshuji55',
                        label: '运-8心理战机'
                    },
                    {
                        value: 'yunshuji56',
                        label: '运-8指挥通信机'
                    },
                    {
                        value: 'yunshuji57',
                        label: '运干-8'
                    },
                    {
                        value: 'yunshuji58',
                        label: '运侦-8'
                    },
                    {
                        value: 'yunshuji59',
                        label: '运母机'
                    }
                ]
            },

            {
                value: 'yunshuji6',
                label: '运-9系列',
                xinghao: [
                    {
                        value: 'yunshuji61',
                        label: '运-9'
                    },
                    {
                        value: 'yunshuji62',
                        label: '运-9电子侦察机'
                    },
                    {
                        value: 'yunshuji63',
                        label: '运-9雷达干扰机'
                    },
                    {
                        value: 'yunshuji64',
                        label: '运-9通信干扰机'
                    },
                    {
                        value: 'yunshuji65',
                        label: '运-8心理战机'
                    }
                ]
            },
            {
                value: 'yunshuji7',
                label: 'CRJ系列',
                xinghao: [
                    {
                        value: 'yunshuji71',
                        label: 'CRJ200'
                    },
                    {
                        value: 'yunshuji72',
                        label: 'CRJ700'
                    }
                ]
            },
            {
                value: 'yunshuji8',
                label: 'EC225LP系列',
                xinghao: [
                    {
                        value: 'yunshuji81',
                        label: 'EC225LP'
                    }
                ]
            },
            {
                value: 'yunshuji9',
                label: '波音737系列',
                xinghao: [
                    {
                        value: 'yunshuji91',
                        label: '波音737'
                    },
                    {
                        value: 'yunshuji92',
                        label: '波音737-300'
                    },
                    {
                        value: 'yunshuji93',
                        label: '波音737-700'
                    },
                    {
                        value: 'yunshuji94',
                        label: '波音737-800'
                    }
                ]
            },
            {
                value: 'yunshuji10',
                label: '空客A319系列',
                xinghao: [
                    {
                        value: 'yunshuji101',
                        label: '空客A319'
                    }
                ]
            },
            {
                value: 'yunshuji11',
                label: '里尔系列',
                xinghao: [
                    {
                        value: 'yunshuji111',
                        label: '里尔-35A'
                    },
                    {
                        value: 'yunshuji112',
                        label: '里尔-36A'
                    }
                ]
            },
            {
                value: 'yunshuji12',
                label: '图-154系列',
                xinghao: [
                    {
                        value: 'yunshuji121',
                        label: '图-154M'
                    },
                    {
                        value: 'yunshuji122',
                        label: '图-154M/D'
                    }
                ]
            },
            {
                value: 'yunshuji13',
                label: '伊尔-76系列',
                xinghao: [
                    {
                        value: 'yunshuji131',
                        label: '伊尔-76'
                    },
                    {
                        value: 'yunshuji132',
                        label: '伊尔-76MD'
                    },
                    {
                        value: 'yunshuji133',
                        label: '伊尔-76TD'
                    },
                    {
                        value: 'yunshuji133',
                        label: '伊尔-78'
                    }
                ]
            },
        ]
    },
    {
        value: 'zhishengji',
        label: '直升机',
        xilie: [
            {
                value: 'zhishengji1',
                label: '直-10系列',
                xinghao: [
                    {
                        value: 'zhishengji11',
                        label: '直-10'
                    },
                    {
                        value: 'zhishengji12',
                        label: '直-10K'
                    }
                ]
            },
            {
                value: 'zhishengji2',
                label: '直-20系列',
                xinghao: [
                    {
                        value: 'zhishengji21',
                        label: '直-20'
                    }
                ]
            },
            {
                value: 'zhishengji3',
                label: '直-8系列',
                xinghao: [
                    {
                        value: 'zhishengji31',
                        label: '直-8KA'
                    },
                    {
                        value: 'zhishengji32',
                        label: '直-8KH'
                    },
                    {
                        value: 'zhishengji33',
                        label: '直-8搜救机'
                    }
                ]
            },
            {
                value: 'zhishengji4',
                label: '直-9系列',
                xinghao: [
                    {
                        value: 'zhishengji41',
                        label: '直-9B'
                    },
                    {
                        value: 'zhishengji42',
                        label: '直-9WA'
                    },
                    {
                        value: 'zhishengji43',
                        label: '直-9WZ'
                    },
                    {
                        value: 'zhishengji44',
                        label: '直-9训练机'
                    },
                    {
                        value: 'zhishengji45',
                        label: '直-9指挥侦察机'
                    }
                ]
            },
            {
                value: 'zhishengji5',
                label: '超美洲豹系列',
                xinghao: [
                    {
                        value: 'zhishengji51',
                        label: '超美洲豹'
                    }
                ]
            },
            {
                value: 'zhishengji6',
                label: '米-17系列',
                xinghao: [
                    {
                        value: 'zhishengji61',
                        label: '米-171'
                    },
                    {
                        value: 'zhishengji62',
                        label: '米-171E'
                    },
                    {
                        value: 'zhishengji63',
                        label: '米17-B7'
                    }
                ]
            },
        ]
    },
    {
        value: 'jiaolianji',
        label: '教练机',
        xilie: [
            {
                value: 'jiaolianji1',
                label: '初教-6系列',
                xinghao: [
                    {
                        value: 'jiaolianji11',
                        label: '初教-6'
                    }
                ]
            },
            {
                value: 'jiaolianji2',
                label: '轰运教-7系列',
                xinghao: [
                    {
                        value: 'jiaolianji21',
                        label: '轰运教-7'
                    },
                    {
                        value: 'jiaolianji22',
                        label: '轰运教-7A'
                    }
                ]
            },
            {
                value: 'jiaolianji3',
                label: '歼教-9系列',
                xinghao: [
                    {
                        value: 'jiaolianji31',
                        label: '歼教-9'
                    }
                ]
            },
            {
                value: 'jiaolianji4',
                label: '教-10系列',
                xinghao: [
                    {
                        value: 'jiaolianji41',
                        label: '教-10'
                    }
                ]
            },
            {
                value: 'jiaolianji5',
                label: '教-8系列',
                xinghao: [
                    {
                        value: 'jiaolianji51',
                        label: '教-8'
                    }
                ]
            },
            {
                value: 'jiaolianji6',
                label: '强教-5系列',
                xinghao: [
                    {
                        value: 'jiaolianji61',
                        label: '强教-5C'
                    },
                    {
                        value: 'jiaolianji62',
                        label: '强教-5D'
                    }
                ]
            },
            {
                value: 'jiaolianji7',
                label: '歼教-7系列',
                xinghao: [
                    {
                        value: 'jiaolianji71',
                        label: '歼教-7'
                    },
                    {
                        value: 'jiaolianji72',
                        label: '歼教-7A'
                    }
                ]
            }
        ]
    },
    {
        value: 'tezhongji',
        label: '特种机',
        xilie: [
            {
                value: 'tezhongji1',
                label: '空警-200系列',
                xinghao: [
                    {
                        value: 'tezhongji11',
                        label: '空警-200'
                    }
                ]
            },
            {
                value: 'tezhongji2',
                label: '空警-2000系列',
                xinghao: [
                    {
                        value: 'tezhongji21',
                        label: '空警-2000'
                    }
                ]
            },
            {
                value: 'tezhongji3',
                label: '空警-500系列',
                xinghao: [
                    {
                        value: 'tezhongji31',
                        label: '空警-500'
                    },
                    {
                        value: 'tezhongji32',
                        label: '空警-500A'
                    }
                ]
            },
            {
                value: 'tezhongji4',
                label: '轰-6系列',
                xinghao: [
                    {
                        value: 'tezhongji41',
                        label: '轰油-6'
                    }

                ]
            },
        ]
    },
    {
        value: 'wurenji',
        label: '无人机',
        xilie: [
            {
                value: 'wurenji1',
                label: '无人侦察机系列',
                xinghao: [
                    {
                        value: 'wurenji11',
                        label: '无侦-7无人机'
                    },
                    {
                        value: 'wurenji12',
                        label: '无侦-8无人侦察机'
                    },
                    {
                        value: 'wurenji13',
                        label: '无侦-9无人侦察机'
                    }
                ]
            },
            {
                value: 'wurenji2',
                label: 'JWS反辐射无人机系列',
                xinghao: [
                    {
                        value: 'wurenji21',
                        label: 'JWS02反辐射无人机'
                    },
                    {
                        value: 'wurenji22',
                        label: 'JWS03反辐射无人机'
                    }
                ]
            },
            {
                value: 'wurenji2',
                label: '攻击无人机系列',
                xinghao: [
                    {
                        value: 'wurenji21',
                        label: '攻击-2无人机'
                    },
                    {
                        value: 'wurenji22',
                        label: '无人攻击-1'
                    }
                ]
            }
        ]
    }
]
const zhanquLink = [
    {
        thisSelect: {
            value: 'bbzq',
            label: '北部空军'
        },
        nextSelect: [
            {
                value: 'com1',
                label: '13团',
            }
        ]
    },
]
const zhanquEx = [
    {
        value: 'bbzq',
        label: '北部战区',
        danwei: [
            {
                value: 'com1',
                label: 'L-03'
            },
            {
                value: 'com3',
                label: 'L-04'
            },
            {
                value: 'com4',
                label: 'L-05'
            },
        ]
    },
    {
        value: 'nbzq',
        label: '南部战区',
        danwei: [
            {
                value: 'com34',
                label: 'L-02'
            },
            {
                value: 'com35',
                label: 'L-08'
            },
        ]
    },
    {
        value: 'dbzq',
        label: '东部战区',
        danwei: [
            {
                value: 'com45',
                label: 'L-06'
            },
            {
                value: 'com46',
                label: 'L-09'
            },
            {
                value: 'com47',
                label: 'L-07'
            },
            {
                value: 'com48',
                label: 'L-10'
            },
            {
                value: 'com49',
                label: 'L-12'
            },
        ]
    },
    {
        value: 'zbzq',
        label: '中部战区',
        danwei: [
            {
                value: 'com55',
                label: 'F-01'
            },
            {
                value: 'com56',
                label: 'F-02'
            },
            {
                value: 'com57',
                label: 'F-03'
            },
            {
                value: 'com58',
                label: 'F-04'
            },
            {
                value: 'com59',
                label: 'T-01'
            },
        ]
    },
]
const leixingEx = [
    {
        value: 'yunshuji',
        label: '运输机',
        xilie: [
            {
                value: 'hx',
                label: 'H-X系列',
                xinghao: [
                    {
                        value: 'ylx',
                        label: 'Y-L'
                    }
                ]
            },
            {
                value: 'ix',
                label: 'I-X系列',
                xinghao: [
                    {
                        value: 'ymx',
                        label: 'Y-M'
                    },
                    {
                        value: 'ynx',
                        label: 'Y-N'
                    },
                ]
            },
            {
                value: 'cx',
                label: 'C-X系列',
                xinghao: [
                    {
                        value: 'zcx',
                        label: 'Z-C'
                    },
                    {
                        value: 'zex',
                        label: 'Z-E'
                    },
                    {
                        value: 'zfx',
                        label: 'Z-F'
                    },
                    {
                        value: 'zgx',
                        label: 'Z-G'
                    },
                    {
                        value: 'zhx',
                        label: 'Z-H'
                    }
                ]
            },
            {
                value: 'dx',
                label: 'D-X系列',
                xinghao: [
                    {
                        value: 'zdx',
                        label: 'Z-D'
                    }
                ]
            },
            {
                value: 'ex',
                label: 'E-X系列',
                xinghao: [
                    {
                        value: 'zix',
                        label: 'Z-I'
                    }
                ]
            },
            {
                value: 'jx',
                label: 'J-X系列',
                xinghao: [
                    {
                        value: 'zox',
                        label: 'Z-O'
                    },
                    {
                        value: 'zpx',
                        label: 'Z-P'
                    },
                ]
            },
        ]
    },
    {
        value: 'wuzhuangji',
        label: '武装机',
        xilie: [
            {
                value: 'nx',
                label: 'N-X系列',
                xinghao: [
                    {
                        value: 'z11x',
                        label: 'Z-11'
                    }
                ]
            },
            {
                value: 'kx',
                label: 'K-X系列',
                xinghao: [
                    {
                        value: 'zqx',
                        label: 'Z-Q'
                    },
                    {
                        value: 'zsx',
                        label: 'Z-S'
                    },
                    {
                        value: 'ztx',
                        label: 'Z-T'
                    },
                    {
                        value: 'zux',
                        label: 'Z-U'
                    },
                    {
                        value: 'zvx',
                        label: 'Z-V'
                    },
                    {
                        value: 'zwx',
                        label: 'Z-W'
                    },
                ]
            },
            {
                value: 'lx',
                label: 'L-X系列',
                xinghao: [
                    {
                        value: 'zxx',
                        label: 'Z-X'
                    },
                    {
                        value: 'zyx',
                        label: 'Z-Y'
                    }
                ]
            },
            {
                value: 'mx',
                label: 'M-X系列',
                xinghao: [
                    {
                        value: 'zz',
                        label: 'Z-Z'
                    }
                ]
            },
            
        ]
    },
    {
        value: 'jiaolianji',
        label: '教练机',
        xilie: [
            {
                value: 'ax',
                label: 'A-X系列',
                xinghao: [
                    {
                        value: 'zax',
                        label: 'Z-A'
                    }
                ]
            },
            {
                value: 'fx',
                label: 'F-X系列',
                xinghao: [
                    {
                        value: 'zjx',
                        label: 'Z-J'
                    }
                ]
            },
            {
                value: 'gx',
                label: 'G-X系列',
                xinghao: [
                    {
                        value: 'zkx',
                        label: 'Z-K'
                    }
                ]
            },
            
        ]
    },
    {
        value: 'tongyongji',
        label: '通用机',
        xilie: [
            {
                value: 'bx',
                label: 'B-X系列',
                xinghao: [
                    {
                        value: 'zbx',
                        label: 'Z-B'
                    }
                ]
            },
            
        ]
    },
]
export { zhanqu, leixing ,zhanquEx,leixingEx};