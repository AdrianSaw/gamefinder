import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('Capitalize string', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('test')).toBe('Test');
  });
});
