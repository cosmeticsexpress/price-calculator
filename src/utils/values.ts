export const MONTH_WORKDAYS = 22;

export type MinMax = {
  min: number;
  max: number;
};

export type Areas = 'SMALL_AREAS' | 'LARGE_AREAS' | 'ALL_BODY';

export interface AreaRanges {
  appointmentDuration: MinMax;
  appointmentPrice: MinMax;
  workingHours?: MinMax;
}

export const RANGES: { [Area in Areas]: AreaRanges } = {
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

export const WORKING_HOURS: MinMax = {
  min: 0,
  max: 8,
};

export const DAY_EARNINGS_DIVISOR: { [Area in Areas]: number } = {
  SMALL_AREAS: 3,
  LARGE_AREAS: 2.5,
  ALL_BODY: 2.3,
};

export const COSMETICSEXPRESS_PHONE = '97235566104';
export const COSMETICSEXPRESS_EMAIL = 'cosmeticsexpress01@gmail.com';
export const COSMETICSEXPRESS_LOCATION_HE = 'רח׳ ההגנה 13, ראשון לציון';

export default {
  MONTH_WORKDAYS,
  RANGES,
  WORKING_HOURS,
  DAY_EARNINGS_DIVISOR,
  COSMETICSEXPRESS_PHONE,
  COSMETICSEXPRESS_EMAIL,
  COSMETICSEXPRESS_LOCATION_HE,
};
