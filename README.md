# emoji-logger [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/emoji-logger.svg)](https://www.npmjs.com/package/emoji-logger) [![Downloads](https://img.shields.io/npm/dt/emoji-logger.svg)](https://www.npmjs.com/package/emoji-logger) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Logging library based on flat colors and Emoji.

[![emoji-logger](http://i.imgur.com/rp8lm00.png)](#)

## Installation

```sh
$ npm i --save emoji-logger
```

## Example

```js
const log = require("emoji-logger");

// Info message
log("The default type is info.");
log("Show another info message", "info");
log("A success message.", "success");
log("Some nasty error", "error");
log("Warning! Do not touch!", "warn");

// Add a new type
log.add("fail", "disappointed", "pomegranateBg", 1);

// Show the fail message
log("Something went wrong.", "fail");
```

## Documentation

### `emojiLogger(msg, type, override)`
Logs the specified message.

#### Params
- **String** `msg`: The message to log.
- **String** `type`: The message type (default: `"info"`).
- **Object** `override`: An object to override the type object fields.

### `log(msg, type, override)`
Writes the input message having the type object.

#### Params
- **String** `msg`: The message to log.
- **Object** `type`: The type object.
- **Object** `override`: An object to override the type object fields.

### `add(type, icon, color, indent, stream)`
Adds a new logging type.

#### Params
- **String** `type`: The log type as string or an object containing:
- **String** `icon`: The emoji icon name interpreted by [`emojic`](https://github.com/IonicaBizau/emojic).
- **String** `color`: The color name (interpreted by [`color-it`](https://github.com/IonicaBizau/node-color-it)).
- **Number** `indent`: The indent width.
- **Stream** `stream`: The stream where the messages of this type will be written (default: `process.stdout`).

#### Return
- **Object** The type object.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`gh-notifier`](https://bitbucket.org/IonicaBizau/gh-notifier#readme)

 - [`github-emojify`](https://github.com/IonicaBizau/github-emojifiy#readme)

 - [`namly`](https://github.com/IonicaBizau/namly#readme)

 - [`tester`](https://github.com/IonicaBizau/tester#readme)

## Related

 - [`emojic`](https://github.com/IonicaBizau/emojic)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md