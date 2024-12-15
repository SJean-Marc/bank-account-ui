import { AccountStatement } from './account-statement';

describe('AccountStatement', () => {
  it('should create an instance', () => {
    expect(new AccountStatement(new Date(), 10.1, 10.1)).toBeTruthy();
  });
});
