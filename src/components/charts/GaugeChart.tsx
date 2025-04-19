import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface GaugeChartProps {
  value: number;
  label: string;
  color?: string;
}

export default function GaugeChart({ value, label, color = '#00FFFF' }: GaugeChartProps) {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, '#333'],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    rotation: -90,
    circumference: 180,
    cutout: '70%',
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
  };
  return (
    <div className="relative w-32 h-32">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold" style={{ color }}>{value}%</span>
        <span className="text-xs text-gray-400">{label}</span>
      </div>
    </div>
  );
}