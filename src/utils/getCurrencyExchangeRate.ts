const urlFirst = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='
const urlSecond = '&to_currency=';
const urlKey1 = '&apikey=7XOX5HDDXILNJFF6';
const urlKey2 = '&apikey=D6C4T0N51S8EYHEF';
const key1 = '7XOX5HDDXILNJFF6';
const key2 = 'D6C4T0N51S8EYHEF';

async function getCurrencyExchangeRate(currency1, currency2){
    const data = await fetch(`${urlFirst}${currency1}${urlSecond}${currency2}${urlKey1}`
    ).then(
        res =>{
            res.json();
        }
    ).then(
        data =>{
            console.log(`${urlFirst}${currency1}${urlSecond}${currency2}${urlKey1}`)
            return data;
        }
    )

    return data
}

export default getCurrencyExchangeRate;