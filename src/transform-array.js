module.exports = function transform(arr) {
    if(!Array.isArray(arr)) {
        throw new Error();
    }

    const final = [];

    for (let i = 0; i < arr.length; i++) {

        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;

            case '--discard-prev':
                final.pop();
                break;

            case '--double-next':
                if (i < arr.length - 1) {
                    final.push(arr[i + 1]);
                }
                break;

            case '--double-prev':
                if (i > 0) {
                    final.push(arr[i - 1]);
                }
                break;

            default:
                final.push(arr[i]);

        }
    }


    return final;
};
