import { Moment } from 'moment';

export interface RawTimeRange {
  from: Moment | string;
  to: Moment | string;
}

export interface TimeRange {
  from: Moment;
  to: Moment;
  raw: RawTimeRange;
}

export interface IntervalValues {
  interval: string; // 10s,5m
  intervalMs: number;
}

export interface TimeZone {
  raw: string;
  isUtc: boolean;
}

export const parseTimeZone = (raw: string): TimeZone => {
  return {
    raw: raw,
    isUtc: raw === 'utc',
  };
};

export const DefaultTimeZone = parseTimeZone('browser');
