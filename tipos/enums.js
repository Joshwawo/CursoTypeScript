"use strict";
(() => {
    let AudiLevel;
    (function (AudiLevel) {
        AudiLevel[AudiLevel["min"] = 1] = "min";
        AudiLevel[AudiLevel["medium"] = 2] = "medium";
        AudiLevel[AudiLevel["max"] = 10] = "max";
    })(AudiLevel || (AudiLevel = {}));
    let currentAudio = AudiLevel.medium;
    console.log(currentAudio);
    console.log(AudiLevel);
})();
//# sourceMappingURL=enums.js.map