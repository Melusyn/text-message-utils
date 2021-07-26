"use strict";
const GraphemeSplitter = require('grapheme-splitter');
const { SegmentedMessage } = require('./models.js');
const graphemeSplitter = new GraphemeSplitter();
var Encoding;
(function (Encoding) {
    Encoding[Encoding["GSM-7"] = 0] = "GSM-7";
    Encoding[Encoding["UCS-2"] = 1] = "UCS-2";
})(Encoding || (Encoding = {}));
const getMessageSegmentInformation = (data) => {
    const segmentedMessage = new SegmentedMessage(data, 'auto', graphemeSplitter);
    return {
        count: segmentedMessage.segments.length,
        encoding: segmentedMessage.getEncodingName(),
        nonGSM7Characters: segmentedMessage.getIncompatibleEncodingCharacters()
    };
};
exports.getMessageSegmentInformation = getMessageSegmentInformation;
