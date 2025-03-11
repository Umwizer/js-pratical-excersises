// Create a function called transactionFilter that filters purchase transactions
//  over $40 and returns them sorted by amount.
function transactionFilter(transaction){
    return transaction.filter(t=>t.amount > 40).sort((a,b)=>b.amount - a.amount);
}

const transactions = [
    { id: 1, amount: 50 },
    { id: 2, amount: 100 },
    { id: 3, amount: 30 }]

 console.log(transactionFilter(transactions))   