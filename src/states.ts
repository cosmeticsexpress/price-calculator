import { atom } from 'recoil';

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
};
