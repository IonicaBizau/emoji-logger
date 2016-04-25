## Documentation

You can see below the API reference of this module.

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

