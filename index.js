// Import stylesheets
import './style.css';
import '@grapecity/wijmo.styles/wijmo.css';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcInput from '@grapecity/wijmo.input';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcGridFilter from '@grapecity/wijmo.grid.filter';

var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
var sortting ;
var grid = new wjcGrid.FlexGrid('#grid', {
  itemsSource: getData(),

  sortingColumn: (s) => {
    console.log('sorting');
    // save sort description
   console.log(s.collectionView.sortDescriptions);
    sortting = s.collectionView.sortDescriptions[0];
    var sd = JSON.stringify(s.collectionView.sortDescriptions);
   s.collectionView.sortDescriptions.clear();
  },
  sortedColumn: (s) => {
    console.log('sorted');
    console.log(s.collectionView.sortDescriptions[0]);
    var sd = JSON.stringify(s.collectionView.sortDescriptions);
    // clear here and above to fully disable client side
    // you can make api call to change data source
    s.collectionView.sortDescriptions.clear();
    console.log("sd", sd);
  }
});

var filter = new wjcGridFilter.FlexGridFilter(grid);

// create some random data
function getData() {
  var data = [];
  for (var i = 0; i < 200; i++) {
    data.push({
      id: i,
      country: countries[Math.floor(Math.random() * countries.length)],
      active: i % 5 != 0,
      downloads: Math.round(Math.random() * 200000),
      sales: Math.random() * 100000,
      expenses: Math.random() * 50000
    });
  }
  return data;
}