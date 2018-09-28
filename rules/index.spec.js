import * as rules from './';

describe('@validate.it/rules', () => {
  /** @test **/
  it('imports accepted rule', () => {
    expect(rules.accepted).toBeTruthy();
  });

  /** @test **/
  it('imports after rule', () => {
    expect(rules.after).toBeTruthy();
  });

  /** @test **/
  it('imports afterOrEqual rule', () => {
    expect(rules.afterOrEqual).toBeTruthy();
  });

  /** @test **/
  it('imports alpha rule', () => {
    expect(rules.alpha).toBeTruthy();
  });

  /** @test **/
  it('imports alphaDash rule', () => {
    expect(rules.alphaDash).toBeTruthy();
  });

  /** @test **/
  it('imports alphaNum rule', () => {
    expect(rules.alphaNum).toBeTruthy();
  });

  /** @test **/
  it('imports array rule', () => {
    expect(rules.array).toBeTruthy();
  });

  /** @test **/
  it('imports before rule', () => {
    expect(rules.before).toBeTruthy();
  });

  /** @test **/
  it('imports beforeOrEqual rule', () => {
    expect(rules.beforeOrEqual).toBeTruthy();
  });

  /** @test **/
  it('imports between rule', () => {
    expect(rules.between).toBeTruthy();
  });

  /** @test **/
  it('imports boolean rule', () => {
    expect(rules.boolean).toBeTruthy();
  });

  /** @test **/
  it('imports confirmed rule', () => {
    expect(rules.confirmed).toBeTruthy();
  });

  /** @test **/
  it('imports date rule', () => {
    expect(rules.date).toBeTruthy();
  });

  /** @test **/
  it('imports dateEquals rule', () => {
    expect(rules.dateEquals).toBeTruthy();
  });

  /** @test **/
  it('imports dateFormat rule', () => {
    expect(rules.dateFormat).toBeTruthy();
  });

  /** @test **/
  it('imports different rule', () => {
    expect(rules.different).toBeTruthy();
  });

  /** @test **/
  it('imports digits rule', () => {
    expect(rules.digits).toBeTruthy();
  });

  /** @test **/
  it('imports digitsBetween rule', () => {
    expect(rules.digitsBetween).toBeTruthy();
  });

  /** @test **/
  it('imports distinct rule', () => {
    expect(rules.distinct).toBeTruthy();
  });

  /** @test **/
  it('imports email rule', () => {
    expect(rules.email).toBeTruthy();
  });

  /** @test **/
  it('imports greaterThan rule', () => {
    expect(rules.greaterThan).toBeTruthy();
  });

  /** @test **/
  it('imports greaterThanOrEqual rule', () => {
    expect(rules.greaterThanOrEqual).toBeTruthy();
  });

  /** @test **/
  it('imports image rule', () => {
    expect(rules.image).toBeTruthy();
  });

  /** @test **/
  it('imports in rule', () => {
    expect(rules.in).toBeTruthy();
  });

  /** @test **/
  it('imports inArray rule', () => {
    expect(rules.inArray).toBeTruthy();
  });

  /** @test **/
  it('imports integer rule', () => {
    expect(rules.integer).toBeTruthy();
  });

  /** @test **/
  it('imports ip rule', () => {
    expect(rules.ip).toBeTruthy();
  });

  /** @test **/
  it('imports ipv4 rule', () => {
    expect(rules.ipv4).toBeTruthy();
  });

  /** @test **/
  it('imports ipv6 rule', () => {
    expect(rules.ipv6).toBeTruthy();
  });

  /** @test **/
  it('imports json rule', () => {
    expect(rules.json).toBeTruthy();
  });

  /** @test **/
  it('imports lessThan rule', () => {
    expect(rules.lessThan).toBeTruthy();
  });

  /** @test **/
  it('imports lessThanOrEqual rule', () => {
    expect(rules.lessThanOrEqual).toBeTruthy();
  });

  /** @test **/
  it('imports max rule', () => {
    expect(rules.max).toBeTruthy();
  });

  /** @test **/
  it('imports mimeTypes rule', () => {
    expect(rules.mimeTypes).toBeTruthy();
  });

  /** @test **/
  it('imports mimes rule', () => {
    expect(rules.mimes).toBeTruthy();
  });

  /** @test **/
  it('imports min rule', () => {
    expect(rules.min).toBeTruthy();
  });

  /** @test **/
  it('imports notIn rule', () => {
    expect(rules.notIn).toBeTruthy();
  });

  /** @test **/
  it('imports notRegex rule', () => {
    expect(rules.notRegex).toBeTruthy();
  });

  /** @test **/
  it('imports nullable rule', () => {
    expect(rules.nullable).toBeTruthy();
  });

  /** @test **/
  it('imports numeric rule', () => {
    expect(rules.numeric).toBeTruthy();
  });

  /** @test **/
  it('imports present rule', () => {
    expect(rules.present).toBeTruthy();
  });

  /** @test **/
  it('imports regex rule', () => {
    expect(rules.regex).toBeTruthy();
  });

  /** @test **/
  it('imports required rule', () => {
    expect(rules.required).toBeTruthy();
  });

  /** @test **/
  it('imports requiredUnless rule', () => {
    expect(rules.requiredUnless).toBeTruthy();
  });

  /** @test **/
  it('imports requiredWith rule', () => {
    expect(rules.requiredWith).toBeTruthy();
  });

  /** @test **/
  it('imports requiredWithAll rule', () => {
    expect(rules.requiredWithAll).toBeTruthy();
  });

  /** @test **/
  it('imports requiredWithout rule', () => {
    expect(rules.requiredWithout).toBeTruthy();
  });

  /** @test **/
  it('imports requiredWithoutAll rule', () => {
    expect(rules.requiredWithoutAll).toBeTruthy();
  });

  /** @test **/
  it('imports requiredIf rule', () => {
    expect(rules.requiredIf).toBeTruthy();
  });

  /** @test **/
  it('imports same rule', () => {
    expect(rules.same).toBeTruthy();
  });

  /** @test **/
  it('imports size rule', () => {
    expect(rules.size).toBeTruthy();
  });

  /** @test **/
  it('imports string rule', () => {
    expect(rules.string).toBeTruthy();
  });

  /** @test **/
  it('imports url rule', () => {
    expect(rules.url).toBeTruthy();
  });
});
