define(function(requrie, a, b) {
	b.exports = {
		color: ["#1ac7ca", "#b7a1e0", "#de66ab", "#ffba7b", "#da797f", "#8d97b4", "#e6d100", "#96b64b", "#96706c", "#5493f1"],
		title: {
			textStyle: {
				fontFamily: "微软雅黑",
				fontSize: "14",
				fontWeight: "normal"
			}
		},
		toolbox: {
			color: ["#37b4b3", "#37b4b3", "#37b4b3", "#37b4b3", "#37b4b3"]
		},
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "line",
				lineStyle: {
					color: "#dddddd",
					width: 2,
					type: "solid"
				}
			}
		},
		grid: {
			x: 80,
			y: 30,
			x2: 30,
			y2: 80
		},
		categoryAxis: {
			axisLine: {
				lineStyle: {
					color: "#bbbbbb"
				}
			},
			splitLine: {
				lineStyle: {
					color: ["#eeeeee"]
				}
			},
			boundaryGap: false
		},
		legend: {
			y: "bottom"
		},
		valueAxis: {
			axisLine: {
				lineStyle: {
					color: "#dddddd"
				}
			},
			splitLine: {
				lineStyle: {
					color: ["#eeeeee"]
				}
			}
		},
		line: {
			legendHoverLink: false,
			symbol: "none",
			showAllSymbol: false,
			smooth: true
		},
		pie: {
			grid: null,
			radius: "55%",
			center: ["50%", "50%"],
			tooltip: {
				trigger: "item",
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			}
		},
		map: {
			roam: false,
			itemStyle: {
				normal: {},
				emphasis: {
					color: "#9ca0d4",
					label: {
						show: true
					}
				}
			}
		},
		gauge: {
			startAngle: 170,
			endAngle: 10,
			center: ["50%", "90%"],
			radius: 60,
			pointer: {
				width: 4,
				length: "100%",
				color: "#374767"
			},
			axisLine: {
				lineStyle: {
					width: 30
				}
			}
		},
		dataRange: {
			min: 0,
			max: 1,
			x: "left",
			y: "bottom",
			text: ["高", "低"],
			calculable: true,
			color: ["#E71610", "#F79932", "#F7D73F", "#BFF762", "#42DD3E", "#24AB1C"],
			hoverLink: false
		}
	}
});