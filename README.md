# MemExplorer

Your friendly Neighborhood Pending Transaction Explorer

## Getting Started

---

The following code helps the user fetch and analyze pending transactions from a list of different blockchain networks. Pending transactions are the transactions that are yet to be part of a block. They are stored in an in-memory cache of a blockchain node, called mempool (Hence the name MemExplorer :D ). The user can access these transactions by connecting to a node that is part of a particular blockchain network and "subscribing" to the stream of pending transactions running through the node's memory pool. The code aims to enable easy access to these transactions and also helps the user analyze these transactions by displaying the relevant information regarding these transactions.

## Project Details

---

The code makes use of the wss node endpoint and the web3.js library to access the pending transactions. The project aims to keep the accessing process as general and modular as possible to allow the users to connect to several different nodes that are part of several different networks. The user can use this code and connect to any EVM-based nodes like Ethereum, Polygon, Binance Smart Chain, Avalanche, fantom, etc.

The project structure is as follows :

```
    ├── config.json
    ├── index.js
    ├── lib
    │   ├── formatter.js
    │   ├── parser.js
    │   ├── prompter.js
    │   └── subscriber.js
    ├── package.json
    └── README.md
```

| Filename      | Usage                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------ |
| config.json   | Contains the platform names and the wss endpoints of nodes in the platforms                |
| formatter.js  | Functions for formatting the text for display                                              |
| parser.js     | Functions for reading,parsing and validating the contents of config.json file              |
| prompter.js   | Functions for helping the user select between the platforms for accessing the transactions |
| subscriber.js | Functions for setting up subscribers for pending transactions                              |

## Running the program

---

### Prerequisites

Make sure you have the following prerequisites in your system.

* Node | ^v12.22.7
* NPM  ^6.14.15

### Install Dependencies

Go to the root project folder and run

    npm install

### Edit config.json

The config file is one of the key components of the whole project. It contains the names of the blockchain and also the wss endpoint of a single node that is part of the blockchain network. The data is structured in nested-json format and the user is free to add the data regarding multiple networks and its corresponding nodes . The general template of the file is as follows :
```
    {
        "name-of-network" : {
            "wss" : "wss-endpoint-of-the-node"
        }
    }

```
a sample config.json file looks like this :

```
    {
        "polygon":
            {
                "wss": "wss://polygon-mainnet.g.com/1234567"
            },
        "ethereum":
            {
                "wss":"wss://mainnet.ethereum.io/9ae5c24092fc"
            }
    }

```
The user is free to add or modify the data according to their convenience. The program use this file in order to connect ot various networks and their nodes. So,while editing, make sure that

  * You don't change the name of the file
  * you don't change the location of the file
  * you always add the "wss" keyword for supplying the endpoint details
  
If there is a change in the name or location of the file, then you need to make corresponding changes to code before you can run it.

### Execute the file

Once you have completed all the previous steps, then all you need to do is go to the root folder and run
```
 npm start
```

---