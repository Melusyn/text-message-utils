https://npmjs.org/package/to-text-message-utils/

Get a Text Message's size depending on it's content. Get it's encoding and which characters are not GSM-7 compatible.
Internally, we're using the very good Twilio message-segment-calculator tool (https://github.com/TwilioDevEd/message-segment-calculator) and Grapheme Splitter (https://github.com/orling/grapheme-splitter)
The difference is this library has no interface and can be imported within your project.

```js
import { countMessageSegments, getMessageEncoding, getMessageNonGSM7Characters } from 'text-message-utils'

const data = `
Hi Michael!
Please be sure to be ready tomorrow morning 5am 🚀
See you tomorrow!
`

const size = countMessageSegments(data)
// returns: 2

const encoding = getMessageEncoding(data)
// returns: 'GSM-7'

const nonGSM7Characters = getMessageNonGSM7Characters(data)
// returns: ['🚀']

const messageSegmentInformation = getMessageSegmentInformation(data)
// returns: { count: 2, encoding: 'GSM-7', nonGSM7Characters: ['🚀'] }

```

## License
(c) 2021 Hugo Cordier. MIT License
