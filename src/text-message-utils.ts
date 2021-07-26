const GraphemeSplitter = require('grapheme-splitter')
const { SegmentedMessage } = require('./models.js')
const graphemeSplitter = new GraphemeSplitter()

enum Encoding {
  'GSM-7',
  'UCS-2'
}

const getMessageSegmentInformation = (data: string) => {
  const segmentedMessage = new SegmentedMessage(data, 'auto', graphemeSplitter)
  return {
    count: segmentedMessage.segments.length as number,
    encoding: segmentedMessage.getEncodingName() as Encoding,
    nonGSM7Characters: segmentedMessage.getIncompatibleEncodingCharacters() as string[]
  }
}

exports.getMessageSegmentInformation = getMessageSegmentInformation