export interface Accumulator {
  readonly value: number;
  add(x: number): Accumulator;
}
