import Sum from '../components/Sum/Sum';

test('Sum of two numbers', () => {
  const result = Sum(2, 6);

  expect(result).toBe(8);
});
