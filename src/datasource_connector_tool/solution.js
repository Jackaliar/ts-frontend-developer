// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).  

var prices= [{"buy":903072,"sell":882068,"id":5572536,"pair":"BTCSGD","timestamp":"2018-08-08T13:45:47"},
			 {"buy":6729,"sell":6455,"id":5572564,"pair":"LTCUSD","timestamp":"2018-08-08T13:47:06.806"},
			 {"buy":51917,"sell":49938,"id":5572570,"pair":"ETHSGD","timestamp":"2018-08-08T13:47:08.429"},
			 {"buy":86939,"sell":83519,"id":5572567,"pair":"BCHSGD","timestamp":"2018-08-08T13:47:07.356"},
			 {"buy":9173,"sell":8815,"id":5572565,"pair":"LTCSGD","timestamp":"2018-08-08T13:47:06.811"},
			 {"buy":666146,"sell":639774,"id":5572571,"pair":"BTCUSD","timestamp":"2018-08-08T13:47:08.994"},
			 {"buy":63904,"sell":61212,"id":5572566,"pair":"BCHUSD","timestamp":"2018-08-08T13:47:07.352"},
			 {"buy":38024,"sell":36687,"id":5572569,"pair":"ETHUSD","timestamp":"2018-08-08T13:47:08.424"}];

function getPrices(){
	
	for(let i=0; i<prices.length; i++){
			var sum=prices[i].buy + prices[i].sell;
			var mid= sum/2;
			var currency= prices[i].pair.substring(3);
			
			// array to store midprice and quotecurrency
			var promise= [];
			promise.push({[mid]: currency});
			
	}
	return promise;	
}




