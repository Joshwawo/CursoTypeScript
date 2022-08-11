"use strict";
(() => {
    const fullName = (firstName, LastName) => {
        return `${firstName} ${LastName}`;
    };
    let noName;
    const name = fullName(noName, 'maloso');
    console.log({ name });
})();
//# sourceMappingURL=args-required.js.map