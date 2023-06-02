import { selector } from 'recoil';
import { RANGES, MONTH_WORKDAYS } from '@utils/values';
import CalculatorStates from '@utils/CalculatorStates';

export const monthWorkdaysState = selector({
  key: 'monthWorkdays',
  get: () => MONTH_WORKDAYS,
});

export const smallAreasStates = new CalculatorStates(
  'SMALL_AREAS',
  RANGES.SMALL_AREAS.appointmentDuration.min,
  RANGES.SMALL_AREAS.appointmentPrice.min
);

export const largeAreasStates = new CalculatorStates(
  'LARGE_AREAS',
  RANGES.LARGE_AREAS.appointmentDuration.min,
  RANGES.LARGE_AREAS.appointmentPrice.min
);

export const allBodyStates = new CalculatorStates(
  'ALL_BODY',
  RANGES.ALL_BODY.appointmentDuration.min,
  RANGES.ALL_BODY.appointmentPrice.min
);

const calculatorStates = [smallAreasStates, largeAreasStates, allBodyStates];

export const totalWorkingHoursState = selector({
  key: 'totalWorkingHours',
  get: ({ get }) =>
    calculatorStates
      .map((atom) => get(atom.workingHoursState))
      .reduce((acc, current) => acc + current),
});

export const totalMonthEarningsState = selector({
  key: 'totalMonthEarnings',
  get: ({ get }) =>
    calculatorStates
      .map((atom) => get(atom.monthEarningsState))
      .reduce((acc, current) => acc + current),
});
