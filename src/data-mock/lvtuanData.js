let zhanquCost = {
    name: '天部战区 ',
    cost: 100000000,
    subCost: [{
            name: '大修费',
            cost: 3000
        },
        {
            name: '故障修理费',
            cost: 4000
        },
        {
            name: '标准计领费',
            cost: 3000
        },
    ],
    sub: [{
            name: '231团',
            cost: 3000,
            id: 1,
            subCost: [{
                    name: '大修费',
                    cost: 1000
                },
                {
                    name: '故障修理费',
                    cost: 1000
                },
                {
                    name: '标准计领费',
                    cost: 1000
                },
            ]
        },
        {
            name: '12团',
            cost: 3000,
            id: 2,
            subCost: [{
                    name: '大修费',
                    cost: 1000
                },
                {
                    name: '故障修理费',
                    cost: 1000
                },
                {
                    name: '标准计领费',
                    cost: 1000
                },
            ]
        },
        {
            name: '13团',
            cost: 4000,
            id: 3,
            subCost: [{
                    name: '大修费',
                    cost: 1000
                },
                {
                    name: '故障修理费',
                    cost: 2000
                },
                {
                    name: '标准计领费',
                    cost: 1000
                },
            ]
        },
    ]
}

for (let i = 0; i < 20; i++) {
    zhanquCost.sub.push({
        name: '962团',
        cost: 3000,
        id: 1,
        subCost: [{
                name: '大修费',
                cost: 1000
            },
            {
                name: '故障修理费',
                cost: 1000
            },
            {
                name: '标准计领费',
                cost: 1000
            },
        ]
    }, )
}

export { zhanquCost }