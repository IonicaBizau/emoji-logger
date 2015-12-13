const emoji = require("emojic")
    , indento = require("indento")
    , colorIt = require("color-it")
    , deffy = require("deffy")
    , Err = require("err")
    , ul = require("ul")
    ;

/**
 * emojiLogger
 * Logs the specified message.
 *
 * @name emojiLogger
 * @function
 * @param {String} msg The message to log.
 * @param {String} type The message type (default: `"info"`).
 * @param {Object} override An object to override the type object fields.
 */
function emojiLogger(msg, type, override) {

    // Get the type
    var _type = emojiLogger.types[type || "info"];
    if (!_type) {
        throw new Err(`There is no such logger type: ${type}`, "NO_SUCH_LOGGER_TYPE");
    }

    emojiLogger.log(msg, _type, override);
}

/**
 * log
 * Writes the input message having the type object.
 *
 * @name log
 * @function
 * @param {String} msg The message to log.
 * @param {Object} type The type object.
 * @param {Object} override An object to override the type object fields.
 */
emojiLogger.log = function (msg, type, override) {

    if (override) {
        type = ul.merge(override, type);
    }

    var message = emoji[type.icon] + " " + msg;

    type.stream.write(
        indento(
            colorIt(message)[type.color]().toString()
          , type.indent
        ) + "\n"
    );
};

// Initialize the types object
emojiLogger.types = {};

/**
 * add
 * Adds a new logging type.
 *
 * @name add
 * @function
 * @param {String} type The log type as string or an object containing:
 * @param {String} icon The emoji icon name interpreted by [`emojic`](https://github.com/IonicaBizau/emojic).
 * @param {String} color The color name (interpreted by [`color-it`](https://github.com/IonicaBizau/node-color-it)).
 * @param {Number} indent The indent width.
 * @param {Stream} stream The stream where the messages of this type will be written (default: `process.stdout`).
 * @return {Object} The type object.
 */
emojiLogger.add = function (type, icon, color, indent, stream) {

    var _icon = emoji[icon];
    if (!_icon) {
        throw new Err(`There is no such icon: ${icon}`, "NO_SUCH_ICON");
    }

    return emojiLogger.types[type] = {
        type: type
      , icon: icon
      , color: color
      , indent: deffy(indent, 2)
      , stream: stream || process.stdout
    };
};

// Add the core types
emojiLogger.add(
    "success"
  , "heavyCheckMark"
  , "green"
);

emojiLogger.add(
    "error"
  , "x"
  , "red"
);

emojiLogger.add(
    "warn"
  , "warning"
  , "orange"
);

emojiLogger.add(
    "info"
  , "informationSource"
  , "blue"
);

module.exports = emojiLogger;
