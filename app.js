$(function () {

  var API_KEY = 'GQ3em67Zs9xQMpZTtpU9';
  var STOCK_SYMBOLS = ['TSLA', 'FB', 'AMZN', 'AAPL'];

  STOCK_SYMBOLS.forEach(requestStockPrice);

  function requestStockPrice(stockSymbol) {
    var request = $.ajax({
      method: 'get',
      url: 'https://www.quandl.com/api/v3/datasets/WIKI/' + stockSymbol + '.json?api_key=' + API_KEY,
      dataType: 'json'
    });

    request.done(function (data) {
      var stockPrice = data.dataset.data[0][4];

      renderStockPrice(stockSymbol, stockPrice.toFixed(2));
    });
  }

  function renderStockPrice(stockSymbol, stockPrice) {
    $('[data-stock-price="' + stockSymbol + '"]').text('$' + stockPrice);
  }

});
