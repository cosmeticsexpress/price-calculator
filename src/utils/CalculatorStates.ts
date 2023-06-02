import { RecoilState, RecoilValueReadOnly, atom, selector } from 'recoil';
import getDayEarnings from '@utils/getDayEarnings';
import {
  Areas,
  DAY_EARNINGS_DIVISOR,
  MONTH_WORKDAYS,
  WORKING_HOURS,
} from '@utils/values';
import { totalWorkingHoursState } from '@utils/states';

export default class CalculatorStates {
  private stateKey: Areas;

  divisor: number;

  appointmentDurationState: RecoilState<number>;
  appointmentPriceState: RecoilState<number>;
  workingHoursState: RecoilState<number>;

  dayEarningsState: RecoilValueReadOnly<number>;
  monthEarningsState: RecoilValueReadOnly<number>;

  constructor(
    stateKey: Areas,
    appointmentDuration: number,
    appointmentPrice: number
  ) {
    this.stateKey = stateKey;

    this.divisor = DAY_EARNINGS_DIVISOR[stateKey];

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
