/***************************************************************************
 * Segmented Message Class                                                 *
 *                                                                         *
 * Parse a message and build the segments based on the chosen encoding.    *
 ***************************************************************************/
export class SegmentedMessage {
    constructor(message: any, encoding: any, graphemeSplitter: any);
    charClass: typeof GSM7EncodedChar | typeof UCS2EncodedChar;
    encoding: any;
    splitter: any;
    encodedChars: (GSM7EncodedChar | UCS2EncodedChar)[];
    segments: any;
    buildSegments(useTwilioReservedBits: any): any;
    charClassForEncoding(encoding: any): typeof GSM7EncodedChar | typeof UCS2EncodedChar;
    getEncodingName(): "GSM-7" | "UCS-2" | "Unkown";
    getIncompatibleEncodingCharacters(): any[];
    hasIncompatibleEncoding(): boolean;
    encodeChars(message: any): (GSM7EncodedChar | UCS2EncodedChar)[];
    get totalSize(): number;
    get messageSize(): number;
}
declare class GSM7EncodedChar extends EncodedChar {
    static codeUnitSizeInBits(): number;
}
declare class UCS2EncodedChar extends EncodedChar {
    static codeUnitSizeInBits(): number;
    constructor(char: any, graphemeSize: any);
    graphemeSize: any;
}
/*****************************************************************
 * Encoded Character Classes                                     *
 *                                                               *
 * Utility classes to represent a character in a given encoding. *
 *****************************************************************/
declare class EncodedChar {
    static codeUnitSizeInBits(): undefined;
    constructor(char: any);
    raw: any;
    codeUnits: any;
    isGSM7: boolean;
    sizeInBits(): number;
}
export {};
