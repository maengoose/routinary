import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
import { Routine } from '../pages/DailyRoutines/DailyRoutines'

// Define a type for the slice state
interface RoutinesState {
  id: number;
  routines: Routine[];
  routine?: Routine;
}

// Define the initial state using that type
const initialState: RoutinesState = {
  id: 1,
  routines: [],
  routine: undefined,
}

const { reducer, actions } = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    addRoutine: (state, action: PayloadAction<Routine>) => {
      const routines: RoutinesState = {
        ...state,
        routines: [...state.routines, { ...action.payload, id: state.id }],
        id: state.id + 1,
      };

      localStorage.setItem('routines', JSON.stringify(routines.routines));

      return routines;
    },
    setRoutines: (state, action: PayloadAction<string | null>) => {
      if (action.payload === null) {
        return state;
      }

      const originRoutines = JSON.parse(action.payload);

      return {
        ...state,
        routines: originRoutines,
        id: originRoutines[originRoutines.length - 1].id + 1
      };
    },
    setRoutine: (state, action: PayloadAction<Routine>) => {
      if (action.payload === null) {
        return state;
      }
      return {
        ...state
      };
    },
    deleteRoutine: (state, action: PayloadAction<number>) => {
      const newRoutines = state.routines.filter(routine => routine.id !== action.payload);
      localStorage.setItem('routines', JSON.stringify(newRoutines));
      return {
        ...state,
        routines: newRoutines
      };
    },
    clickOpenEditModal: (state, { payload: id }: PayloadAction<number>) => {
      const routine = state.routines.find(routine => routine.id === id);
      if (!routine) {
        return state;
      }
      return {
        ...state,
        routine,
      }
    },
    editRoutine: (state, { payload: routine }: PayloadAction<Routine>) => {
      const routines: Routine[] = state.routines
        .map(i => (i.id === routine.id) ? routine : i);

      localStorage.setItem('routines', JSON.stringify(routines));

      return {
        ...state,
        routines: routines
      };
    }
  },
})

export const {
  addRoutine,
  setRoutines,
  setRoutine,
  deleteRoutine,
  clickOpenEditModal,
  editRoutine
} = actions;

export default reducer;
