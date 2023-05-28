export const MONTH_WORKDAYS = 22;

type MinMax = {
  min: number;
  max: number;
};

interface AreaRanges {
  appointmentDuration: MinMax;
  appointmentPrice: MinMax;
}

export const RANGES: {
  SMALL_AREAS: AreaRanges;
  LARGE_AREAS: AreaRanges;
  ALL_BODY: AreaRanges;
} = {
  SMALL_AREAS: {
    appointmentDuration: {
      min: 5,
      max: 15,
    },
    appointmentPrice: {
      min: 20,
      max: 100,
    },
  },
  LARGE_AREAS: {
    appointmentDuration: {
      min: 15,
      max: 30,
    },
    appointmentPrice: {
      min: 100,
      max: 300,
    },
  },
  ALL_BODY: {
    appointmentDuration: {
      min: 20,
      max: 40,
    },
    appointmentPrice: {
      min: 300,
      max: 400,
    },
  },
};

export default { MONTH_WORKDAYS, RANGES };
