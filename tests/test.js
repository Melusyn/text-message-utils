const { getMessageSegmentInformation } = require('../lib/text-message-utils.js')

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
  const size = getMessageSegmentInformation(GSM7data).count
  expect(size).toBe(1);
});

test('Counts UCS-2 segments', () => {
  const size = getMessageSegmentInformation(UCS2data).count
  expect(size).toBe(2);
});

test('Check GSM-7 encoding', () => {
  const encoding = getMessageSegmentInformation(GSM7data).encoding
  expect(encoding).toBe('GSM-7');
});

test('Check UCS-2 encoding', () => {
  const encoding = getMessageSegmentInformation(UCS2data).encoding
  expect(encoding).toBe('UCS-2');
});

test('Get UCS-2 characters from GSM-7 data', () => {
  const nonGSM7Characters = getMessageSegmentInformation(GSM7data).nonGSM7Characters
  expect(nonGSM7Characters).toStrictEqual([]);
});

test('Get UCS-2 characters from UCS-2 data', () => {
  const nonGSM7Characters = getMessageSegmentInformation(UCS2data).nonGSM7Characters
  expect(nonGSM7Characters).toStrictEqual(['🚀']);
});