import { RecoilState, RecoilValueReadOnly, atom, selector } from 'recoil';
import { RANGES, WORKING_HOURS, MONTH_WORKDAYS } from '@utils/values';
import getDayEarnings from '@utils/getDayEarnings';

export const monthWorkdaysState = selector({
  key: 'monthWorkdays',
  get: () => MONTH_WORKDAYS,
});

class CalculatorStates {
  private stateKey: string = '';
  private divisor: number = 2.3;

  appointmentDurationState: RecoilState<number>;
  appointmentPriceState: RecoilState<number>;
  workingHoursState: RecoilState<number>;

  dayEarningsState: RecoilValueReadOnly<number>;
  monthEarningsState: RecoilValueReadOnly<number>;

  constructor(
    stateKey: string = '',
    appointmentDuration: number,
    appointmentPrice: number
  ) {
    this.stateKey = stateKey;

    switch (this.stateKey) {
      case 'smallAreas':
        this.divisor = 3;
        break;
      case 'largeAreas':
        this.divisor = 2.5;
        break;
    }

    this.appointmentDurationState = atom({
      key: `${this.stateKey}_appointmentDurationState`,
      default: appointmentDuration,
    });

    this.appointmentPriceState = atom({
      key: `${this.stateKey}_appointmentPriceState`,
      default: appointmentPrice,
    });

    this.workingHoursState = atom({
      key: `${this.stateKey}_workingHoursState`,
      default: WORKING_HOURS.min,
      effects: [
        ({ onSet, setSelf, getPromise }) => {
          onSet(async (newValue) => {
            const totalWorkingHours = await getPromise(totalWorkingHoursState);

            const valueToSet =
              totalWorkingHours <= WORKING_HOURS.max
                ? newValue
                : newValue + WORKING_HOURS.max - totalWorkingHours;

            setSelf(() => valueToSet);
          });
        },
      ],
    });

    this.dayEarningsState = selector({
      key: `${this.stateKey}_dayEarningsState`,
      get: ({ get }) =>
        getDayEarnings({
          appointmentDuration: get(this.appointmentDurationState),
          appointmentPrice: get(this.appointmentPriceState),
          workingHours: get(this.workingHoursState),
        }) / this.divisor,
    });

    this.monthEarningsState = selector({
      key: `${this.stateKey}_monthEarningsState`,
      get: ({ get }) => get(this.dayEarningsState) * MONTH_WORKDAYS,
    });
  }
}

export const smallAreasStates = new CalculatorStates(
  'smallAreas',
  RANGES.SMALL_AREAS.appointmentDuration.min,
  RANGES.SMALL_AREAS.appointmentPrice.min
);

export const largeAreasStates = new CalculatorStates(
  'largeAreas',
  RANGES.LARGE_AREAS.appointmentDuration.min,
  RANGES.LARGE_AREAS.appointmentPrice.min
);

export const allBodyStates = new CalculatorStates(
  'allBody',
  RANGES.ALL_BODY.appointmentDuration.min,
  RANGES.ALL_BODY.appointmentPrice.min
);

export const totalWorkingHoursState = selector({
  key: 'totalWorkingHours',
  get: ({ get }) =>
    get(smallAreasStates.workingHoursState) +
    get(largeAreasStates.workingHoursState) +
    get(allBodyStates.workingHoursState),
});

export const totalMonthEarningsState = selector({
  key: 'totalMonthEarnings',
  get: ({ get }) =>
    get(smallAreasStates.monthEarningsState) +
    get(largeAreasStates.monthEarningsState) +
    get(allBodyStates.monthEarningsState),
});
