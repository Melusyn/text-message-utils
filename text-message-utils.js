const utils = require('./grapheme-splitter.js')
const models = require('./models.js')
const graphemeSplitter = new utils.GraphemeSplitter();

const getMessageSegmentInformation = data => {
  const segmentedMessage = new models.SegmentedMessage(data, 'auto', graphemeSplitter);
  return {
    count: segmentedMessage.segments.length,
    encoding: segmentedMessage.getEncodingName(),
    nonGSM7Characters: segmentedMessage.getIncompatibleEncodingCharacters()
  }
}

const countMessageSegments = data => getMessageSegmentInformation(data).count
const getMessageEncoding = data => getMessageSegmentInformation(data).encoding
const getMessageNonGSM7Characters = data => getMessageSegmentInformation(data).nonGSM7Characters

exports.getMessageSegmentInformation = getMessageSegmentInformation
exports.countMessageSegments = countMessageSegments
exports.getMessageEncoding = getMessageEncoding
exports.getMessageNonGSM7Characters = getMessageNonGSM7Characters