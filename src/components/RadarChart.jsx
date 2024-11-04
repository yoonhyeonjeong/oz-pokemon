import {Radar} from "react-chartjs-2";
import {Chart, registerables} from "chart.js";

// Chart.js의 모든 요소, 스케일, 플러그인을 등록합니다.
Chart.register(...registerables);
const RadarChart = ({stats, statNames}) => {
    const data = {
        labels: statNames, // 스탯 이름
        datasets: [
            {
                label: "Pokémon Stats",
                data: stats, // 스탯 값
                backgroundColor: "#4285f4", // 채우기 색상
                borderColor: "#1062e9", // 테두리 색상
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: false,
                },
                suggestedMin: 0,
                suggestedMax: 100,
                pointLabels: {
                    font: {
                        size: 16, // 라벨 글씨 크기 조절
                    },
                },
                ticks: {
                    font: {
                        size: 14, // 데이터 값 글씨 크기 조절
                    },
                    display: false, // 숫자 숨기기
                    backdropColor: "rgba(255, 255, 255, 0.5)", // 데이터 값 배경 색상
                },
            },
        },
    };

    return (
        <Radar
            data={data}
            options={options}
        />
    );
};

export default RadarChart;
