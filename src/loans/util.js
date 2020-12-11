import numeral from 'numeral';

numeral.register('locale', 'fr', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: '€'
  }
});

numeral.locale('fr');

export function getAmount(monthly, rate, nbrMonth) {
  //K = M * (1 - (1+T)^-d) / T
  return monthly * (1 - Math.pow(1 + (rate / 12), -nbrMonth)) / (rate / 12);


}

export function getAmountMessage(monthly) {
  var total = getAmount(monthly, 0.059, 36);

  const msg = "Vous pouvez emprunter un montant maximum de " + numeral(total).format('0,0[.]00 $') + ' pour la somme de ' +
    numeral(monthly).format('0,0[.]00 $') + "/mois (durée du prêt : 36 mois, taeg : 5,9%). Ces informations sont données à titre indicatif et devront être confirmées par la banque que vous aurez choisie.";

  return msg;
}

export function retrieveBanks(banks, amount, nbrMonth) {
  return banks.reduce((result, b) => getBankRate(result, b, amount, nbrMonth), []).sort((a, b) => (a.sortCol - b.sortCol));
}

function getBankRate(result, bank, amount, nbrMonth) {

  let bankRate = {
    "bank": bank.name,
    "image": bank.image,
    "url": bank.url
  }

  var rates = getRates(bank, amount);
  if (rates && rates.length > 0) {
    var rate = getRate(rates, nbrMonth);
    if (rate) {
      var monthly = getMonthly(amount, rate, nbrMonth);
      var interest = getInterest(amount, monthly, nbrMonth);

      bankRate.taeg = "Taeg : " + numeral(rate).format('0.00%');
      bankRate.month = numeral(monthly).format('0,0[.]00 $') + "/mois";
      bankRate.sortCol = monthly;
      bankRate.interest = "Intérêts : " + numeral(interest).format('0,0[.]00 $');
      result.push(bankRate);
    }
  }
  return result;

}

function getRates(bank, amount) {

  if (!bank.amounts || bank.amounts.length === 0) {
    return null;
  }

  for (var i = 0; i < bank.amounts.length; i++) {
    if (amount > bank.amounts[i].amount) {
      continue;
    }

    // Montant trop petit pour cette banque
    if (i === 0) {
      return null;
    }

    return bank.amounts[i].rates;
  }
  return bank.amounts[bank.amounts.length - 1].rates;

}

function getRate(rates, nbrMonth) {
  for (var i = 0; i < rates.length; i++) {
    if (rates[i].months >= nbrMonth) {
      return rates[i].rate;
    }
  }
  return null;
  //return rates[rates.length-1].rate;
}

function getMonthly(amount, rate, nbrMonth) {
  //return (amount*( rate /12)) / (1- Math.pow((1+(rate/12)),-nbrMonth));
  var dur12 = nbrMonth / 12;
  var t101 = 1 + rate;
  var d12 = 1 / 12;
  var buf1 = Math.pow(t101, d12);
  var buf2 = Math.pow(1 / t101, dur12);
  var mens = (amount * (buf1 - 1)) / (1 - buf2);
  return Math.floor(mens * 100) / 100;
}

function getInterest(amount, monthly, nbrMonth) {
  return (monthly * nbrMonth) - amount;
}
