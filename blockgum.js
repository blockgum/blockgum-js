/*
*Node connection Code 
* https://blockgum.com
*/
const axios = require('axios');
const jwt = require('jsonwebtoken');

class Blockgum {
    constructor(bg_config) {
        this.api_url = bg_config.api_url;
        this.chain = bg_config.chain;
        this.jwt_token = bg_config.jwt_token;
        this.client_id = bg_config.client_id;
        this.security_type = bg_config.security_type || 1;
        this.decimals = bg_config.decimals || 18;
    }

    async createAddress(uid) {
        const method_url = `createAddress/id/${uid}`;
        return await this.customGet(method_url);
    }
    async searchByUid(uid) {
        const method_url = `searchByUid/${uid}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async create10k(start, limit) {
        const method_url = `create10k/start/${start}/limit/${limit}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async searchAddresses(address) {
        const method_url = `search/address/${address}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async wildcardSearch(type, term) {
        const method_url = `search/${type}/${term}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async getWithdrawalInfo(order_id) {
        const method_url = `getWithdrawalInfo/order_id/${order_id}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }
    async transaction(tx_hash) {
        const method_url = `transaction/tx_hash/${tx_hash}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async transactionInfoDb(where, tx_hash) {
        const method_url = `transactionInfoDb/${where}/hash/${tx_hash}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async traceDeposit(tx_hash) {
        const method_url = `traceDeposit/tx_hash/${tx_hash}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async getAddressList(page = -1) {
        const method_url = `getAddressList?page=${page}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async watchToken(contact) {
        const method_url = `watchToken/${contact}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async deleteToken(contact) {
        const method_url = `deleteToken/${contact}`;
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }
    async stats() {
        const method_url = 'stats';
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async getTokenList() {
        const method_url = 'getTokenList';
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async moveDepositsToMainAccount() {
        const method_url = 'moveDepositsToMainAccount';
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async restartServer() {
        const method_url = 'restartServer';
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async about() {
        const method_url = 'about';
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async isAdvancedSecurity() {
        const method_url = 'isAdvancedSecurity';
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async shutdownServer() {
        const method_url = 'shutdownServer';
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async signInAPI() {
        const method_url = 'signInAPI';
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async getChainsFromEnv() {
        const method_url = 'getChainsFromEnv';
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    async isRunning() {
        const method_url = 'isRunning';
        const response = await this.customGet(method_url);
        return this.responseHandler(response);
    }

    // Post Methods
    async moveTokensToMainAccount(token_add) {
        const method_url = 'moveTokensToMainAccount';
        const post_array = { token_add };
        const response = await this.customPost(method_url, post_array);
        return this.respHandle(response);
    }
    async getLatestDeposits(token_add = '', to_add = '', type = "unrecorded", page = 1) {
        const method_url = 'getLatestDeposits';
        const post_array = { token_add, to_add, type, page };
        const response = await this.customPost(method_url, post_array);
        return this.respHandle(response);
    }
    async getLatestWithdrawals(token_add, to_add, page = 1) {
        const method_url = 'getLatestWithdrawals';
        const post_array = { token_add, to_add, page };
        const response = await this.customPost(method_url, post_array);
        return this.respHandle(response);
    }
    async sendTx(from_uid, from_add, to_add, amount, order_id = 0) {
        const method_url = 'sendTx';
        const post_array = { from_uid, from_add, to_add, amount, order_id };
        const response = await this.customPost(method_url, post_array);
        return this.respHandle(response);
    }

    async sendToken(from_uid, from_add, to_add, token_add, amount, order_id = 0) {
        const method_url = 'sendToken';
        const post_array = { from_uid, from_add, to_add, token_add, amount, order_id };
        const response = await this.customPost(method_url, post_array);
        return this.respHandle(response);
    }
    async withdrawFromMain(to_add, amount, token_add = 0, order_id = 0) {
        const method_url = 'withdrawFromMain';
        const post_array = { to_add, amount, token_add, order_id };
        const response = await this.customPost(method_url, post_array);
        return this.respHandle(response);
    }
    async getBalance(address, token_add = 0) {
        const method_url = 'getBalance';
        const post_array = { address, token_add };
        const response = await this.customPost(method_url, post_array);
        return this.respHandle(response);
    }
    async markAsRecorded(hash) {
        const method_url = 'markAsRecorded';
        const post_array = { hash };
        const response = await this.customPost(method_url, post_array);
        return this.respHandle(response);
    }


    // Convert PHP's customget to a Node.js version using axios
    async amountDecode(val, decimals = null) {
        const amount = this.formatNum(val, 0);
        decimals = decimals || this.decimals;
        return (amount / Math.pow(10, decimals)).toFixed(8);
    }

    async amountEncode(amount, decimals = null) {
        decimals = decimals || this.decimals;
        return Math.round(amount * Math.pow(10, decimals));
    }

    async respHandle(resp) {
        if (!resp) {
            return JSON.parse('{}');
        }
        let arrayResp = JSON.parse(resp);
        if (arrayResp.status === 0 && arrayResp.errorCode) {
            // Log the error
            return { status: 0, errorCode: arrayResp.errorCode, data: [], error: 'Service down, check logs' };
        }
        return arrayResp;
    }
    getHeader(data = {}) {
        if (this.security_type === 'off') {
            return {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${this.jwt_token}`,
                'x-api-key': this.client_id
            };
        } else {
            return {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${this.jwtEncode(data, this.jwt_token)}`,
                'x-api-key': this.client_id
            };
        }
    }
    async customGet(method_url) {
        try {
            const response = await axios.get(`${this.api_url}/${this.chain}/${method_url}`, {
                headers: this.getHeader(),
                // Additional configuration if needed
            });
            return response.data;
        } catch (error) {
            console.error(error);
            // Implement logging and error handling
            return {
                status: 0,
                data: [],
                error: 'Could not connect with Server or other issues'
            };
        }
    }
    async customPost(method_url, post_array) {
        try {
            const response = await axios.post(`${this.api_url}/${this.chain}/${method_url}`, post_array, {
                headers: this.getHeader(post_array),
                // Additional configuration if needed
            });
            return response.data;
        } catch (error) {
            console.error(error);
            // Implement logging and error handling
            return {
                status: 0,
                data: [],
                error: 'Could not connect with Server or other issues'
            };
        }
    }

    jwtEncode(payload, secret) {
        const token = jwt.sign(payload, secret, { algorithm: 'HS256' });
        return token;
    }
    base64UrlEncode(data) {
        return Buffer.from(data).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }
    logger(name, log) {
        console.log(`${name}:`, log);
    }
    formatNum(num, decimals = 8) {
        return Number(num).toFixed(decimals);
    }

}
