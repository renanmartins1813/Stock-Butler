const url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=';
const urlKey1 = '&apikey=7XOX5HDDXILNJFF6';
const urlKey2 = '&apikey=D6C4T0N51S8EYHEF';
const key1 = '7XOX5HDDXILNJFF6';
const key2 = 'D6C4T0N51S8EYHEF';

async function getQuoteEndpoint(symbol){
    const data = await fetch(`${url}${symbol}${urlKey2}`
    ).then(
        res=>{
            return res.json();
        }
    ).then(
        data =>{
            return data;
        }
    )

    return data;
}

export default getQuoteEndpoint;