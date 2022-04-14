
'use strict';
/**
 * The file contains functions that handles pending transaction subscriptions
 * using the wss endpoint of a blockchain node
 */
const Web3 = require('web3')
const { printTransaction} = require('./formatter')

var TransactionCount //a variable to keep track of the number of transactions

/** Function sets the pendingTransaction subscriber using the wss endpoint
* @param    {String} _wssEndpoint   wss endpoint of the node
*/
function setSubscriber(_wssEndpoint){
    TransactionCount = 0 //set the count to zero
    const web3 = new Web3(_wssEndpoint) //creating a web3 object using wss endpoint
    //using the eth.subscribe function to  
    //subscribe to the stream of all pending transactions 
    //running through the connected node's mempool.
    web3.eth.subscribe('pendingTransactions', function(error, transactionHash){
        if (!error){
                //pass the transaction hash in order to retrieve and 
                // display the transaction
                processTransaction(transactionHash,web3)

        }else{
            console.error( `Subscription error : ${error}`)
        }
    })

    
}

/** Function gets the transaction using the transaction hash provided by the subscribe method
* @param    {String} _transactionHash  hash of a transaction
* @param    {object} _web3Object web3 object
*/
function processTransaction(_transactionHash,_web3Object){
    //using the eth.getTransaction to get the transaction details 
    _web3Object.eth.getTransaction(_transactionHash, function(error, data) {
        if (!error){
            //sometimes the getTransaction function returns null
            // the condition filters such values 
            if(data != null){
                    TransactionCount++ //increment the count
                    printTransaction(data,TransactionCount) //format and display the transaction
            }
        }else{
            console.error(`Transaction Error : ${error}`)
        }
      })

}

module.exports = {
    setSubscriber
}