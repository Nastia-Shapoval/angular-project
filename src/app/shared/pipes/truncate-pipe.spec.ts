import { TruncatePipe } from './truncate-pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();

  it('повинен обрізати текст', () => {
    const result = pipe.transform('Hello world', 5);
    expect(result).toBe('Hello…');
  });

  it('не повинен змінювати короткий текст', () => {
    const result = pipe.transform('Hello', 10);
    expect(result).toBe('Hello');
  });
});
