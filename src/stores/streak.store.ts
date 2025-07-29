import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StreakState {
  streakDates: string[];
  currentStreak: number;
  longestStreak: number;
  addStreakDate: (date: Date) => void;
}

export const useStreakStore = create<StreakState>()(
  persist(
    (set, get) => ({
      streakDates: [],
      currentStreak: 0,
      longestStreak: 0,
      addStreakDate: (date) => {
        const todayISO = new Date(date).toISOString().split('T')[0];

        const streakDates = get().streakDates;
        const lastDateISO = streakDates[streakDates.length - 1];

        // if already streak today
        if (lastDateISO === todayISO) {
          return;
        }

        const yesterday = new Date(
          new Date(date).setDate(new Date(date).getDate() - 1)
        )
          .toISOString()
          .split('T')[0];

        // checking if the last date is not yesterday so we can break the streak
        if (lastDateISO !== yesterday) {
          return set((state) => ({
            streakDates: [todayISO],
            currentStreak: 1,
            longestStreak: Math.max(state.longestStreak, 1),
          }));
        }

        return set((state) => ({
          streakDates: [...state.streakDates, todayISO],
          currentStreak: state.currentStreak + 1,
          longestStreak: Math.max(state.longestStreak, state.currentStreak + 1),
        }));
      },
    }),
    {
      name: 'streak-storage',
    }
  )
);
