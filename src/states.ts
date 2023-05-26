import { atom, selector } from 'recoil';

export const monthWorkdays = 25;

/**
  (תמחור לטיפול  *  זמן עבודה לטיפול)
  / 60
  * שעות עבודה
  = רווח מיום עבודה

  (appointmentPrice * appointmentDuration)
  / 60
  * workingHours
  = dayEarnings
*/

const getDayEarnings = (
  appointmentDuration: number,
  appointmentPrice: number,
  workingHours: number
) => (60 / appointmentDuration) * appointmentPrice * workingHours;

export const smallAreasStates = {
  appointmentDurationState: atom({
    key: 'smallAreas_appointmentDurationState',
    default: 5,
  }),
  appointmentPriceState: atom({
    key: 'smallAreas_appointmentPriceState',
    default: 100,
  }),
  workingHoursState: atom({
    key: 'smallAreas_workingHoursState',
    default: 1,
  }),
  dayEarningsState: selector({
    key: 'smallAreas_dayEarningsState',
    get: ({ get }) => {
      const appointmentPrice: number = get(
          smallAreasStates.appointmentDurationState
        ),
        appointmentDuration: number = get(
          smallAreasStates.appointmentPriceState
        ),
        workingHours: number = get(smallAreasStates.workingHoursState);

      return getDayEarnings(
        appointmentPrice,
        appointmentDuration,
        workingHours
      );
    },
  }),
  monthEarningsState: selector({
    key: 'smallAreas_monthEarningsState',
    get: ({ get }) => {
      const dayEarnings: number = get(smallAreasStates.dayEarningsState);
      return dayEarnings * monthWorkdays;
    },
  }),
};

export const largeAreasStates = {
  appointmentDurationState: atom({
    key: 'largeAreas_appointmentDurationState',
    default: 5,
  }),
  appointmentPriceState: atom({
    key: 'largeAreas_appointmentPriceState',
    default: 100,
  }),
  workingHoursState: atom({
    key: 'largeAreas_workingHoursState',
    default: 1,
  }),
  dayEarningsState: selector({
    key: 'largeAreas_dayEarningsState',
    get: ({ get }) => {
      const appointmentPrice: number = get(
          largeAreasStates.appointmentDurationState
        ),
        appointmentDuration: number = get(
          largeAreasStates.appointmentPriceState
        ),
        workingHours: number = get(largeAreasStates.workingHoursState);

      return getDayEarnings(
        appointmentPrice,
        appointmentDuration,
        workingHours
      );
    },
  }),
  monthEarningsState: selector({
    key: 'largeAreas_monthEarningsState',
    get: ({ get }) => {
      const dayEarnings: number = get(largeAreasStates.dayEarningsState);
      return dayEarnings * monthWorkdays;
    },
  }),
};

export const allBodyStates = {
  appointmentDurationState: atom({
    key: 'allBody_appointmentDurationState',
    default: 5,
  }),
  appointmentPriceState: atom({
    key: 'allBody_appointmentPriceState',
    default: 100,
  }),
  workingHoursState: atom({
    key: 'allBody_workingHoursState',
    default: 1,
  }),
  dayEarningsState: selector({
    key: 'allBody_dayEarningsState',
    get: ({ get }) => {
      const appointmentPrice: number = get(
          allBodyStates.appointmentDurationState
        ),
        appointmentDuration: number = get(allBodyStates.appointmentPriceState),
        workingHours: number = get(allBodyStates.workingHoursState);

      return getDayEarnings(
        appointmentPrice,
        appointmentDuration,
        workingHours
      );
    },
  }),
  monthEarningsState: selector({
    key: 'allBody_monthEarningsState',
    get: ({ get }) => {
      const dayEarnings: number = get(allBodyStates.dayEarningsState);
      return dayEarnings * monthWorkdays;
    },
  }),
};

export const totalMonthEarningsState = selector({
  key: 'totalMonthEarnings',
  get: ({ get }) => {
    return (
      get(smallAreasStates.monthEarningsState) +
      get(largeAreasStates.monthEarningsState) +
      get(allBodyStates.monthEarningsState)
    );
  },
});
