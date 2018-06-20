/*
    nebulas.js
 */
var Nebulas = require("./neb/nebulas");

/*
    nebpay.js
 */
var NebPay = require('./nebpay/nebpay');


function Nebrella(){
    this.neb = new Nebulas.Neb(this);
    this.pay = new NebPay(this);
}

Nebrella.account = Nebulas.Account;
Nebrella.request = Nebulas.HttpRequest;
Nebrella.transaction = Nebulas.Transaction;
Nebrella.utils = Nebulas.Utils;
Nebrella.cryptoUtils = Nebulas.CryptoUtils;
Nebrella.unit = Nebulas.Unit;
Nebrella.nvm = Nebulas.NVM;

module.exports = Nebrella
