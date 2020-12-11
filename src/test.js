function getMonthly(amount, rate, nbrMonth) {
    return (amount * (rate / 12)) / (1 - Math.pow((1 + (rate / 12)), -nbrMonth));
}

function thanks(amount, rate, nbrMonth) {
    var dur12 = nbrMonth / 12;
    var t101 = 1 + rate;
    var d12 = 1 / 12;
    var buf1 = Math.pow(t101, d12);
    var buf2 = Math.pow(1 / t101, dur12);
    var mens = (amount * (buf1 - 1)) / (1 - buf2);
    return Math.floor(mens * 100) / 100;

}

console.log(thanks(5000, 0.0549, 36));
