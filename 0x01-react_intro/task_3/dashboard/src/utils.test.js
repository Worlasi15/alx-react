import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
test('getFullYear returns the correct year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toEqual(currentYear);
});

// Test for getFooterCopy function
test('getFooterCopy returns correct string for true argument', () => {
  const result = getFooterCopy(true);
  expect(result).toEqual('Holberton School');
});

test('getFooterCopy returns correct string for false argument', () => {
  const result = getFooterCopy(false);
  expect(result).toEqual('Holberton School main dashboard');
});

// Test for getLatestNotification function
test('getLatestNotification returns correct string', () => {
  const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toEqual(expectedString);
});
