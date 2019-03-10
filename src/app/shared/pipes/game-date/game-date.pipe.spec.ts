import { GameDatePipe } from './game-date.pipe';

describe('GameDatePipe', () => {
  it('GameDatePipe to be moment Date', () => {
    const pipe = new GameDatePipe();
    expect(pipe.transform(new Date('1999-12-03 16:30'))).toBe('03/12/1999 16:30');
  });
});
