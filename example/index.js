const log = require("../lib");

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
