# [Text Message Utils](https://npmjs.org/package/text-message-utils/)

Get a Text Message's size depending on it's content.  
Get it's encoding and which characters are not GSM-7 compatible.  
Internally, we're using the following awesome resources:
- Twilio's [message-segment-calculator tool](https://github.com/TwilioDevEd/message-segment-calculator) 
- [Grapheme Splitter](https://github.com/orling/grapheme-splitter)

## Install

```sh
npm install @setkeeper/text-message-utils
```
or
```sh
yarn add @setkeeper/text-message-utils
```

## Usage
```js
import { getMessageSegmentInformation } from 'text-message-utils'

const dataUCS2 = `
Hi Michael!
Please be sure to be ready tomorrow morning 5am 🚀
See you tomorrow!
`

getMessageSegmentInformation(dataUCS2)
// returns: { count: 2, encoding: 'UCS-2', nonGSM7Characters: ['🚀'] }

const dataGSM7 = `
Hi Michael!
Please be sure to be ready tomorrow morning 5am
See you tomorrow!
`

getMessageSegmentInformation(dataGSM7)
// returns: { count: 1, encoding: 'GSM-7', nonGSM7Characters: [] }

```


## Publish a new version

```sh
npm run build
npm publish --access public
```

## License
(c) 2021 Hugo Cordier. MIT License
