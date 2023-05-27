import { RecoilState, RecoilValueReadOnly, atom, selector } from 'recoil';

export const monthWorkdays = 25;

export const monthWorkdaysState = selector({
  key: 'monthWorkdays',
  get: () => monthWorkdays,
});

class CalculatorGroupStates {
  private stateKey: string = '';

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
      default: 2,
    });

    this.dayEarningsState = selector({
      key: `${this.stateKey}_dayEarningsState`,
      get: ({ get }) => 
        getDayEarnings(
          get(this.appointmentPriceState),
          get(this.appointmentDurationState),
          get(this.workingHoursState)
        ),
    });

    this.monthEarningsState = selector({
      key: `${this.stateKey}_monthEarningsState`,
      get: ({ get }) => get(this.dayEarningsState) * monthWorkdays,
    });
  }
}

const getDayEarnings = (
  appointmentDuration: number,
  appointmentPrice: number,
  workingHours: number
) => (60 / appointmentDuration) * appointmentPrice * workingHours;

export const smallAreasStates = new CalculatorGroupStates('smallAreas', 5, 100);

export const largeAreasStates = new CalculatorGroupStates(
  'largeAreas',
  15,
  200
);

export const allBodyStates = new CalculatorGroupStates('allBody', 20, 300);

export const totalMonthEarningsState = selector({
  key: 'totalMonthEarnings',
  get: ({ get }) => (
    get(smallAreasStates.monthEarningsState) +
    get(largeAreasStates.monthEarningsState) +
    get(allBodyStates.monthEarningsState)
  ),
});
