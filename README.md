
# Blockgum Node.js Client

The Blockgum Node.js client provides an easy interface to interact with the [Blockgum API](https://blockgum.com). It simplifies the process of performing blockchain-related operations such as creating addresses, managing transactions, and querying data.

## Installation

```bash
npm install blockgum-client
```

## Usage

First, initialize the client with your configuration:

```javascript
const Blockgum = require('blockgum-client');
const bgClient = new Blockgum({
    api_url: 'http://NODEURL',
    chain: 'eth',
    jwt_token: 'your_jwt_token',
    client_id: 'your_client_id',
    // Other configuration...
});
```

### Create Address

```javascript
bgClient.createAddress('user_id')
    .then(address => console.log(address))
    .catch(error => console.error(error));
```

### Search By UID

```javascript
bgClient.searchByUid('user_id')
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

### Get Transaction Info

```javascript
bgClient.transaction('tx_hash')
    .then(transaction => console.log(transaction))
    .catch(error => console.error(error));
```

## Methods

- `createAddress(uid)`: Creates a new address for the specified user ID.
- `searchByUid(uid)`: Searches for information using a user ID.
- `transaction(tx_hash)`: Retrieves information about a specific transaction.
- ... (list other methods similarly) ...

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/blockgumdev/blockgum-js/issues) if you want to contribute.

---
