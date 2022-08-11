"use strict";
(() => {
    const fullName = (firstName, ...restoNombre) => {
        return `${firstName} ${restoNombre.join(' ')} `;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Pancho');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map