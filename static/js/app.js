// Assign the data from `data.js` to a descriptive variable
var tableData = data;

var submit = d3.select("#filter-btn");

submit.on("click", function(){

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

  console.log(filteredData);
  var tbody = d3.select("tbody");

  filteredData.forEach(function(sighting_data) {
    console.log(sighting_data);
    var row = tbody.append("tr");
    Object.entries(sighting_data).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

});
