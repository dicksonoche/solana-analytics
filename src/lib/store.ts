import { create } from 'zustand';

// Define the AppState interface with explicit types
interface AppState {
  category: string | null;
  timeRange: [number, number];
  setCategory: (category: string) => void;
  setTimeRange: (timeRange: [number, number]) => void;
}

// Use create with proper typing
export const useAppStore = create<AppState>((set) => ({
  category: 'transactions',
  timeRange: [
    Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60,
    Math.floor(Date.now() / 1000),
  ],
  setCategory: (category: string) => set({ category }),
  setTimeRange: (timeRange: [number, number]) => set({ timeRange }),
}));