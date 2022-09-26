import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {

  const pipe = new DurationPipe();
  
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('convert minute to "hh h min" format', () => {
    const mockData = 130;
    const result = pipe.transform(mockData);
    expect(result).toEqual('2 h 10 min');
  });

  it('convert only minutes to "1h" format', () => {
    const mockData = 40;
    const result = pipe.transform(mockData);
    expect(result).toEqual('40 min');
  });

  it('only convert minutes if duration is 60 min', () => {
    const mockData = 60;
    const result = pipe.transform(mockData);
    expect(result).toEqual('1 h');
  });

  it('if the incoming data is undefined', () => {
    const mockData = undefined;
    const result = pipe.transform(mockData);
    expect(result).toBe('time is set incorrectly');
  });
});
