var ec_provincesWithFatalCasesNationwide = echarts.init(document.getElementById('provincesWithFatalCasesNationwide'), "macarons");
var ec_provincesWithFatalCasesNationwide_Option = {
    title: {
        text: "全国有无死亡病例省份数量",
        textStyle: {
            color: 'black',
            fontSize: '22'
        },
        left: 'center',
        top: 10
    },
    legend: {
        data: [],
        left: 'center',
        top: 80,
        textStyle: {
            color: '#000',
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    grid: {
        left: '4%',
        right: '6%',
        bottom: '8%',
        top: 50,
        containLabel: true
    },
    series: [{
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: [],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        label: {
            show: true,
            fontSize: 16
        }
    }
    ]
};

ec_provincesWithFatalCasesNationwide.setOption(ec_provincesWithFatalCasesNationwide_Option)
