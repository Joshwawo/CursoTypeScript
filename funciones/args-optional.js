"use strict";
(() => {
    const fullName = (firstName, LastName) => {
        return `${firstName} ${LastName || 'no last Name'}`;
    };
    let noName;
    const name = fullName('maloso');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map