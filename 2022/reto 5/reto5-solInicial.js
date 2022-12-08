// Aun que da la solicion correcta, el procesamiento es muy lento y da timeout

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let result;
    if (giftsCities.length<=1){
        if (giftsCities <= maxGifts) {
            result = giftsCities[0];
        }
        else {
            result = 0;
        }
    }else {
        var ArrayCombinations = giftsCities;
        // console.log(ArrayCombinations);
        for (let i=1; i<maxCities;i++){
            var ArrayCombinations = ArrayCombinations.concat(ArrayCombinations.flatMap((v, i) => giftsCities.slice(i+1).map( w => v + w )));
            console.log(ArrayCombinations);
        }
        var ArrayCombinationsSort = ArrayCombinations.concat(giftsCities).sort((a,b) => a < b ? 1 : a > b ? -1 : 0);

        for (let numberArray of ArrayCombinationsSort) {
            if (result) continue;
            if (numberArray <= maxGifts) {
                result = numberArray;
            }
        }
    }
    console.log(result);
    return result;
}