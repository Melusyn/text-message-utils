const { countMessageSegments, getMessageEncoding, getMessageNonGSM7Characters } = require('./text-message-utils.js')

const UCS2data = `
Hi Michael!
Please be sure to be ready tomorrow morning 5am 🚀
See you tomorrow!
`

const GSM7data = `
Hi Michael!
Please be sure to be ready tomorrow morning 5am!
See you tomorrow!
`

test('Counts GSM-7 segments', () => {
  const size = countMessageSegments(GSM7data)
  expect(size).toBe(1);
});

test('Counts UCS-2 segments', () => {
  const size = countMessageSegments(UCS2data)
  expect(size).toBe(2);
});

test('Check GSM-7 encoding', () => {
  const encoding = getMessageEncoding(GSM7data)
  expect(encoding).toBe('GSM-7');
});

test('Check UCS-2 encoding', () => {
  const encoding = getMessageEncoding(UCS2data)
  expect(encoding).toBe('UCS-2');
});

test('Get UCS-2 characters from GSM-7 data', () => {
  const nonGSM7Characters = getMessageNonGSM7Characters(GSM7data)
  expect(nonGSM7Characters).toStrictEqual([]);
});

test('Get UCS-2 characters from UCS-2 data', () => {
  const nonGSM7Characters = getMessageNonGSM7Characters(UCS2data)
  expect(nonGSM7Characters).toStrictEqual(['🚀']);
});