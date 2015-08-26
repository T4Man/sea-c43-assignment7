//javascript for donutMaster.html CodeFellows Foundations 1 Assignment 7
var TopPotShop = function(shopLoc, minCustPerHour, maxCustPerHour,
    avgDonutPerCust, businessHours) {
  this.shopLoc = shopLoc;
  this.min = minCustPerHour;
  this.max = maxCustPerHour;
  this.avg = avgDonutPerCust;
  this.hrs = businessHours;
  this.donutsPerHour = function() {
    return (Math.random() * (this.max - this.min + 1) +
    this.min) * this.avg;
  };
    this.donutsPerDay = function() {
    return this.donutsPerHour() * this.hrs;
    };
  this.toHtml = function() {
      return '<td class="shopLoc">' + this.shopLoc + '</td>' +
             '<td class="hrs">' + this.hrs + '</td>' +
             '<td class="donutsPerHour">' + Math.round(this.donutsPerHour()) + '</td>' +
             '<td class="donutsPerDay">' + Math.round(this.donutsPerDay()) + '</td>';
  };
};
//---------------------------------------------------------------------
var DonutMaster = function() {
  this.stores = [];
  this.addNewShop = function(shopLoc, minCustPerHour,
      maxCustPerHour, avgDonutPerCust, businessHours) {
    var newShop = new TopPotShop(shopLoc, minCustPerHour,
      maxCustPerHour, avgDonutPerCust, businessHours);
    this.stores.push(newShop);
  };

  this.generateReport = function() {
    this.reportOut = [];
    for (var index = 0; index < this.stores.length; index++){
      this.reportOut.push(this.stores[index].shopLoc,
      this.stores[index].hrs,
      Math.round(this.stores[index].donutsPerHour()),
      Math.round(this.stores[index].donutsPerDay()));
    }
  };
  this.toHtml = function() {
    $.each(this.stores, function(index, store) {
      $tr = $('<tr>');
      $tr.append(store.toHtml());
      $('#dmTable').append($tr);
    });
  };
};
//---------------------------------------------------------------------
var dm = new DonutMaster();

dm.addNewShop("Belltown", 8, 43, 4.5, 14);
dm.addNewShop("Capitol Hill", 4, 37, 2.00, 14);
dm.addNewShop("South Lake Union", 9, 12, 6.33, 11);
dm.addNewShop("Roosevelt",2, 28, 1.25, 11);
dm.addNewShop("Ballard", 8, 58, 3.75, 12);
dm.addNewShop("Pioneer Square", 4, 48, 4, 11);

document.getElementById('newStoreBtn').addEventListener('click', function() {
  var newLoc = document.getElementById('newStoreLocation').value;
  var newMin = document.getElementById('newMinCustPerHour').value;
  var newMax = document.getElementById('newMaxCustPerHour').value;
  var newAvg = document.getElementById('newAvgDonutsPerCust').value;
  var newHrs = document.getElementById('newBusinessHours').value;
  var newShopInfo = [newLoc, newMin, newMax, newAvg, newHrs];
  dm.addNewShop(newShopInfo[0], newShopInfo[1],
  newShopInfo[2], newShopInfo[3], newShopInfo[4]);
  $('#dmTable tr:gt(0)').remove();
  dm.toHtml();
});

dm.generateReport();
//---------------------------------------------------------------------
$(function(){

  $('#glazedDonut').draggable();
  $('#coffeeCup').droppable({
    accept: "#glazedDonut",
      drop: function(event, ui) {
      ui.helper.remove();
      $(this).append(ui.draggable);
      }
  });

  $('#dmTable').hide();
  $('#tableButton').one('click', function(){
    $('#dmTable tr:gt(0)').remove();
    dm.toHtml();
  });

  $('#tableButton').on('click', function(){
    $('#dmTable').fadeToggle("slow", "linear");
  });

  $('.shopList').hide();
  $('#listStores').on('click', function(){
    $('.shopList').slideToggle("slow", "linear");
  });

  $('#BelltownShop').hide();
  $('#store1').on('click', function(){
    $('#BelltownShop').slideToggle("slow", "linear");
  });

  $('#CapHillShop').hide();
  $('#store2').on('click', function(){
    $('#CapHillShop').slideToggle("slow", "linear");
  });

  $('#SLUshop').hide();
  $('#store3').on('click', function(){
    $('#SLUshop').slideToggle("slow", "linear");
  });

  $('#RooseveltShop').hide();
  $('#store4').on('click', function(){
    $('#RooseveltShop').slideToggle("slow", "linear");
  });

  $('#BallardShop').hide();
  $('#store5').on('click', function(){
    $('#BallardShop').slideToggle("slow", "linear");
  });

  $('#PioneerSquareShop').hide();
  $('#store6').on('click', function(){
    $('#PioneerSquareShop').slideToggle("slow", "linear");
  });

  $('#newStoreForm').hide();
  $('#addStoreButton').on('click', function(){
    $('#newStoreForm').slideToggle("slow", "linear");
  });
});


