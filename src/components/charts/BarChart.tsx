import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarChartProps {
  data: { label: string; value: number }[];
  label: string;
  horizontal?: boolean;
}

export default function BarChart({ data, label, horizontal = false }: BarChartProps) {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label,
        data: data.map((item) => item.value),
        backgroundColor: '#00FFFF',
      },
    ],
  };

  const options = {
    indexAxis: horizontal ? 'y' as const : 'x' as const, // Explicitly type as 'x' or 'y'
    scales: {
      y: { beginAtZero: true, grid: { color: '#333' } },
      x: { grid: { display: false } },
    },
    plugins: { legend: { display: false } },
  };

  return <Bar data={chartData} options={options} />;
}