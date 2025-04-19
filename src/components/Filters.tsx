import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useAppStore } from '@/lib/store';
import { CATEGORIES } from '@/utils/constants';

export default function Filters() {
  const { category, setCategory, timeRange, setTimeRange } = useAppStore();

  return (
    <div className="p-4 bg-gray-800 rounded-lg mb-4">
      <div className="mb-4">
        <label className="block mb-2 text-white">Category</label>
        <select
          value={category || ''}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-gray-700 text-white p-2 rounded-lg"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-white">Time Range</label>
        <Slider
          range
          min={Math.floor(Date.now() / 1000) - 90 * 24 * 60 * 60}
          max={Math.floor(Date.now() / 1000)}
          value={timeRange}
          onChange={(value) => setTimeRange(value as [number, number])}
          trackStyle={{ backgroundColor: '#00FFFF' }}
          handleStyle={{ borderColor: '#00FFFF' }}
        />
      </div>
    </div>
  );
}