import notRegex from './notRegex';

describe('notRegex rule', () => {
  /** @test */
  it('should pass', () => {
    expect(notRegex.check( __INPUT__ )).toBeTruthy();
  });
});
