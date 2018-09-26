import notIn from './notIn';

describe('notIn rule', () => {
  /** @test */
  it('should pass', () => {
    expect(notIn.check( __INPUT__ )).toBeTruthy();
  });
});
