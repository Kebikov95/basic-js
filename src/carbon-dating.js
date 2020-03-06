const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity !== "string") return false;

    let floatActivity = parseFloat(sampleActivity);
    if(floatActivity > 0 && floatActivity <= MODERN_ACTIVITY){
        return Math.ceil((Math.log(MODERN_ACTIVITY / floatActivity)
        * HALF_LIFE_PERIOD) / 0.693);
    }
    return false;
};
