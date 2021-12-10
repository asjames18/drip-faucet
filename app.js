
var $ABI_token = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_INT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"statsOf","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addrs","type":"address[]"}],"name":"removeAddressesFromWhitelist","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"removeAddressFromWhitelist","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"targetSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"remainingMintableSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"mintedBy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"taxRate","type":"uint8"}],"name":"setAccountCustomTax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"vaultAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalTxs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"removeAccountCustomTax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"calculateTransferTaxes","outputs":[{"name":"adjustedValue","type":"uint256"},{"name":"taxAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"addAddressToWhitelist","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newVaultAddress","type":"address"}],"name":"setVaultAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"whitelist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mintedSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isExcluded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"players","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addrs","type":"address[]"}],"name":"addAddressesToWhitelist","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"excludeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"includeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialMint","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"vault","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TaxPayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"WhitelistedAddressAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"WhitelistedAddressRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

var $ABI_faucet = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_src","type":"address"},{"indexed":true,"internalType":"address","name":"_dest","type":"address"},{"indexed":false,"internalType":"uint256","name":"_deposits","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_payouts","type":"uint256"}],"name":"BalanceTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"}],"name":"BeneficiaryUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Checkin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DirectPayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"HeartBeat","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"interval","type":"uint256"}],"name":"HeartBeatIntervalUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"referrals","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total_deposits","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total_payouts","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total_structure","type":"uint256"}],"name":"Leaderboard","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LimitReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ManagerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MatchPayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NewAirdrop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"upline","type":"address"}],"name":"Upline","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"CompoundTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ExitTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_UINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"airdrops","outputs":[{"internalType":"uint256","name":"airdrops","type":"uint256"},{"internalType":"uint256","name":"airdrops_received","type":"uint256"},{"internalType":"uint256","name":"last_airdrop","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"balanceLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"claimsAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractInfo","outputs":[{"internalType":"uint256","name":"_total_users","type":"uint256"},{"internalType":"uint256","name":"_total_deposited","type":"uint256"},{"internalType":"uint256","name":"_total_withdraw","type":"uint256"},{"internalType":"uint256","name":"_total_bnb","type":"uint256"},{"internalType":"uint256","name":"_total_txs","type":"uint256"},{"internalType":"uint256","name":"_total_airdrops","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"creditsAndDebits","outputs":[{"internalType":"uint256","name":"_credits","type":"uint256"},{"internalType":"uint256","name":"_debits","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"custody","outputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"last_heartbeat","type":"uint256"},{"internalType":"uint256","name":"last_checkin","type":"uint256"},{"internalType":"uint256","name":"heartbeat_interval","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_upline","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit_bracket_size","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dripVaultAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getCustody","outputs":[{"internalType":"address","name":"_beneficiary","type":"address"},{"internalType":"uint256","name":"_heartbeat_interval","type":"uint256"},{"internalType":"address","name":"_manager","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint8","name":"_level","type":"uint8"}],"name":"isBalanceCovered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"isNetPositive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"lastActivity","outputs":[{"internalType":"uint256","name":"_heartbeat","type":"uint256"},{"internalType":"uint256","name":"_lapsed_heartbeat","type":"uint256"},{"internalType":"uint256","name":"_checkin","type":"uint256"},{"internalType":"uint256","name":"_lapsed_checkin","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"maxPayoutOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"max_payout_cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"payoutOf","outputs":[{"internalType":"uint256","name":"payout","type":"uint256"},{"internalType":"uint256","name":"max_payout","type":"uint256"},{"internalType":"uint256","name":"net_payout","type":"uint256"},{"internalType":"uint256","name":"sustainability_fee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ref_balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"roll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"_pendingDiv","type":"uint256"}],"name":"sustainabilityFeeV2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_airdrops","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_bnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_deposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_txs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_users","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCompoundTax","type":"uint256"}],"name":"updateCompoundTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newBracketSize","type":"uint256"}],"name":"updateDepositBracketSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newExitTax","type":"uint256"}],"name":"updateExitTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_newRefBalances","type":"uint256[]"}],"name":"updateHoldRequirements","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newInitialDeposit","type":"uint256"}],"name":"updateInitialDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPayoutCap","type":"uint256"}],"name":"updateMaxPayoutCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPayoutRate","type":"uint256"}],"name":"updatePayoutRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRefBonus","type":"uint256"}],"name":"updateRefBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRefDepth","type":"uint256"}],"name":"updateRefDepth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"userInfo","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint256","name":"deposit_time","type":"uint256"},{"internalType":"uint256","name":"deposits","type":"uint256"},{"internalType":"uint256","name":"payouts","type":"uint256"},{"internalType":"uint256","name":"direct_bonus","type":"uint256"},{"internalType":"uint256","name":"match_bonus","type":"uint256"},{"internalType":"uint256","name":"last_airdrop","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"userInfoTotals","outputs":[{"internalType":"uint256","name":"referrals","type":"uint256"},{"internalType":"uint256","name":"total_deposits","type":"uint256"},{"internalType":"uint256","name":"total_payouts","type":"uint256"},{"internalType":"uint256","name":"total_structure","type":"uint256"},{"internalType":"uint256","name":"airdrops_total","type":"uint256"},{"internalType":"uint256","name":"airdrops_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint256","name":"referrals","type":"uint256"},{"internalType":"uint256","name":"total_structure","type":"uint256"},{"internalType":"uint256","name":"direct_bonus","type":"uint256"},{"internalType":"uint256","name":"match_bonus","type":"uint256"},{"internalType":"uint256","name":"deposits","type":"uint256"},{"internalType":"uint256","name":"deposit_time","type":"uint256"},{"internalType":"uint256","name":"payouts","type":"uint256"},{"internalType":"uint256","name":"rolls","type":"uint256"},{"internalType":"uint256","name":"ref_claim_pos","type":"uint256"},{"internalType":"uint256","name":"accumulatedDiv","type":"uint256"}],"stateMutability":"view","type":"function"}];

var app = new Vue({
    el: '#app',
    data: {
        drip_usd: 0,
        account: "0x287C7d1638E5771947BcdCBd8b174fAc4cF37E08",
        claimsAvailable: 0,
        payout_per_day:0,
        deposits: 0,
        deposit_last: 0,
        next_hydrate: 0,
        payout_max: 0,
        claimed: 0,
        reward_direct: 0,
        reward_indirect: 0,
        airdrop_sent: 0,
        airdrop_sent_last: 0,
        airdrop_received: 0,
        team_direct: 0,
        team_total: 0,

    },
    mounted: function() {
        setInterval(this.appTick, 30000);
        this.appTick();
        this.getAccount();
    },
    methods: {
        appTick() {
            this.getDripPrice();
        },
        toDrip(value) {
            return this.toNum(value / 1000000000000000000); // 18 decimals
        },
        toNum(value) {
            return parseFloat(value.toFixed(3));
        },
        sinceDays(epoch) {
            if (epoch == 0) { return "Never"; }
            return ((((new Date()).getTime() / 1000) - epoch) / 60 / 60 / 24).toFixed(1) + " days";
        },
        getDripPrice() {
            API_Get("https://api.drip.community/prices/", function (data) {
                app.drip_usd = data[data.length-1].value;
                document.title = app.drip_usd.toFixed(2) + " $ DRIP";
            });
        },
        accountChanged(event) {
            console.log("change");
            this.getAccount();
        },
        getAccount(address) {
            const NODE_URL = "https://bsc-dataseed.binance.org:443";
            let web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));
            // var contract_token = new web3.eth.Contract($ABI_token, '0x20f663cea80face82acdfa3aae6862d246ce0333');
            // contract_token.defaultAccount = this.account;
            // contract_token.methods.players().call(function(error, result){
            //     console.log(result);
            // });
    
            var contract_faucet = new web3.eth.Contract($ABI_faucet, '0xFFE811714ab35360b67eE195acE7C10D93f89D8C');
            contract_faucet.defaultAccount = this.account;
            //contract_faucet.methods.contractInfo().call(function(error, result) { console.log(result); });
            
            contract_faucet.methods.claimsAvailable(this.account).call(function(error, result) {
                if (error) { console.log(error); return false; };
                app.claimsAvailable = app.toDrip(result);
    
                contract_faucet.methods.userInfo(app.account).call(function(error, result) {
                    if (error) { console.log(error); return false; };
                    app.deposits = app.toDrip(result.deposits);
                    app.payout_per_day = app.toNum(app.deposits * 0.01);
                    app.deposit_last = app.sinceDays(result.deposit_time);
                    payout_max = app.toDrip(result.deposits * 3.65);
                    if (payout_max > 100000) { payout_max = 100000; }
                    app.payout_max = payout_max;
                    app.next_hydrate = app.toNum(app.claimsAvailable + app.deposits);
                    app.claimed = app.toDrip(result.payouts);
                    app.reward_direct = app.toDrip(result.direct_bonus);
                    app.reward_indirect = app.toDrip(result.match_bonus);
                    //console.log(result);
                });
    
            });
            contract_faucet.methods.airdrops(this.account).call(function(error, result) {
                if (error) { console.log(error); return false; };
                app.airdrop_sent = app.toDrip(result.airdrops);
                app.airdrop_sent_last = app.sinceDays(result.last_airdrop);
                app.airdrop_received = app.toDrip(result.airdrops_received);
                //console.log(result);
            });
            contract_faucet.methods.userInfoTotals(this.account).call(function(error, result) {
                if (error) { console.log(error); return false; };
                app.team_direct = result.referrals;
                app.team_total = result.total_structure;
                //console.log(result);
            });
            //contract_faucet.methods.balanceLevel(this.account).call(function(error, result) { console.log(result); });
            //contract_faucet.methods.payoutOf(this.account).call(function(error, result) { console.log(result); });
            //contract_faucet.methods.maxPayoutOf(this.account).call(function(error, result) { console.log(result); });
        }
    },
    filters: {
        toUSD(value) {
            try {
                return (value * app.drip_usd).toFixed(2) + "$";
            } catch {}
        },
        toNum2(value) {
            return parseFloat(value).toFixed(2);
        }
    }

});

// ----------------------------------------------------------------------------------------
// -- TOOLS -------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
async function API_Get(url, callback) {
    req = await fetch(url);
    res = await req.json();
    callback(res);
}

$Cookie = {
    get: function (c_name) {
        var i,x,y,ARRcookies=document.cookie.split(";");
        for (i=0;i<ARRcookies.length;i++) {
            x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x=x.replace(/^\s+|\s+$/g,"");
            if (x==c_name) { return unescape(y); }
        }
    },
    set: function (c_name, value, exdays)  {
        if (!exdays) { exdays = 365; }
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value + "; path=/";
    },
    delete: function (name) {  
        FW.Cookie.Set(name, "");
    }
};

// ----------------------------------------------------------------------------------------
// -- BOOTSTRAP ---------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
$(".btn").mouseup(function(){
  $(this).blur();
}).mouseleave(function(){
  $(this).blur();
});