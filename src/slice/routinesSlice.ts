import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
import { Routine } from '../pages/DailyRoutines/DailyRoutines'

// Define a type for the slice state
interface RoutinesState {
  id: number;
  routines: Routine[];
}

// Define the initial state using that type
const currentRoutines: Routine[] = JSON.parse(localStorage.getItem('routines') || '[]');
const initialState: RoutinesState = {
  routines: currentRoutines,
  id: currentRoutines.length ? currentRoutines[currentRoutines.length - 1].id + 1 : 1,
}

const { reducer, actions } = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    addRoutine: (state, action: PayloadAction<Routine>) => {
      const result = {
        ...state,
        routines: [...state.routines, { ...action.payload, id: state.id }],
        id: state.id + 1,
      };

      localStorage.setItem('routines', JSON.stringify(result.routines));

      return result;
    },
    setRoutines: (state, action: PayloadAction<string | null>) => {
      if (action.payload === null) {
        return state;
      }

      return {
        ...state,
        routines: JSON.parse(action.payload),
      };
    }
  },
})

export const {
  addRoutine,
  setRoutines
} = actions;

export default reducer;