import { BirthData } from '../astro/engine';

/**
 * Beatriz's birth data.
 *
 * Brazil has observed no daylight saving time since 2019, so São Paulo is
 * BRT (UTC-3) year-round — 08:57 local is 11:57 UTC.
 *
 * On the coordinates: these are São Paulo itself, rather than the exact
 * street address of Maternidade Santa Joana. That is deliberate, the same
 * way it was for Anton's chart — a few kilometres of difference within one
 * city moves the Ascendant and Midheaven by a negligible amount and changes
 * the house of nothing, so there is no reason to publish a family's exact
 * address to get an accurate chart. (Verify with `npm run chart` after
 * editing.)
 */
export const BEATRIZ: BirthData = {
  name: 'Beatriz',
  year: 2026,
  month: 10,
  day: 18,
  hour: 8,
  minute: 57,
  tzOffset: -3,
  tzLabel: 'BRT · UTC-3',
  latitude: -23.5505,
  longitude: -46.6333,
  place: {
    en: 'São Paulo, Brazil',
    pt: 'São Paulo, Brasil',
    de: 'São Paulo, Brasilien',
  },
};
