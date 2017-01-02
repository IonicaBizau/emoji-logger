const tester = require("tester")
    , log = require("../lib")
    ;

tester.describe("errors", test => {

    // log(...)
    test.it("should throw NO_SUCH_LOGGER_TYPE when the type is invalid.", () => {
        test.expect(() => {
            log("foo", "does-not-exist");
        }).toThrow(Error, "There is no such logger type: doesn-not-exist");
    });

    // log.add(...)
    test.it("should throw NO_SUCH_ICON when the icon is invalid.", () => {
        test.expect(() => {
            log.add("foo", "does-not-exist");
        }).toThrow(Error, "There is no such icon: doesn-not-exist");
    });
});

tester.describe("streams", test => {
    test.it("should support custom streams", () => {
        log("test", "info", {
            stream: {
                write: (msg) => {
                    test.expect(/test/.test(msg)).toBe(true);
                }
            }
        });
    });
});
