declare const GraphemeSplitter: any;
declare const SegmentedMessage: any;
declare const graphemeSplitter: any;
declare enum Encoding {
    'GSM-7' = 0,
    'UCS-2' = 1
}
declare const getMessageSegmentInformation: (data: string) => {
    count: number;
    encoding: Encoding;
    nonGSM7Characters: string[];
};
