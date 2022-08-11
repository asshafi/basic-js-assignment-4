
function radianToDegree(radian) {
    // input validity check
    if (typeof radian == 'number' ) {
        const degree = radian * 180 / Math.PI;
        return degree.toFixed(2);
    }
    else {
        return 'Please enter valid input.';
    }
}
console.log(radianToDegree(199));