module.exports = function toReadable(number) {
    let result = '';
    const stringNumber = String(number);
    const digitLength = stringNumber.length;

    const digits = ['zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'];

    const otherDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const tensDigits = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety', 'eight', 'nine'];

    if (digitLength === 3) {
        // hundred
        for (let i = 0; i < digits.length; i++) {
            if (i === +stringNumber[0]) result += digits[i] + " hundred";
        }
        if(+stringNumber[1] !== 0) result += " ";
        // other
        if (+stringNumber[1] === 1) {
            for (let i = 0; i < otherDigits.length; i++) {
                if (i === +stringNumber[2]) result += otherDigits[i];
            }
        }
        //tens
        else {
            for (let i = 0; i < tensDigits.length; i++) {
                if (i === +stringNumber[1]) result += tensDigits[i];
            }
        //units
            for (let i = 1; i < digits.length; i++) {
                if (i === +stringNumber[2]) result += " " + digits[i];
            }
        } 
    }

    if (digitLength === 2) {
        // other
        if (+stringNumber[0] === 1) {
            for (let i = 0; i < otherDigits.length; i++) {
                if (i === +stringNumber[1]) result += otherDigits[i];
            }
        }
        //tens
        else {
            for (let i = 0; i < tensDigits.length; i++) {
                if (i === +stringNumber[0]) result += tensDigits[i];
            }
        //units
            for (let i = 1; i < digits.length; i++) {
                if (i === +stringNumber[1]) result += " " + digits[i];
            }
        } 
    }

    if (digitLength === 1) {
        //units
            for (let i = 0; i < digits.length; i++) {
                if (i === +stringNumber[0]) result += digits[i];
            }
        } 
 
    return result;
}
