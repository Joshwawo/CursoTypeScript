"use strict";
(() => {
    const fullName = (firstName, LastName, upper = false) => {
        if (upper) {
            return `${firstName} ${LastName || 'no last Name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${LastName || 'no last Name'}`;
        }
    };
    let noName;
    const name = fullName('maloso', 'stark', true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map