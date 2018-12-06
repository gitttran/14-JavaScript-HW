// Assign the data from `data.js` to a descriptive variable
var tableData = data;

var submit = d3.select("#filter-btn");


var tbody = d3.select("tbody");

tableData.forEach(function(sighting_data) {
  // console.log(sighting_data);
  var row = tbody.append("tr");
  Object.entries(sighting_data).forEach(function([key, value]) {
    // console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
  });
});

submit.on("click", function(){
  var filter_count=0;

  d3.event.preventDefault();
  d3.select("tbody").selectAll("*").remove()

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  var inputElement2 = d3.select("#city");
  var inputValue2 = inputElement2.property("value")

  var inputElement3 = d3.select("#state");
  var inputValue3 = inputElement3.property("value")

  var inputElement4 = d3.select("#country");
  var inputValue4 = inputElement4.property("value")

  var inputElement5 = d3.select("#shape");
  var inputValue5 = inputElement5.property("value")

  var filteredData = [];

  if (inputValue !=""){
    filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
    filter_count += 1;
    console.log(filter_count);
  };

  if (inputValue2 !=""){
    if(filteredData ===[]){
      filteredData = tableData.filter(sightings => sightings.city === inputValue2);
      filter_count += 1;
    }
    else{
      filteredData = filteredData.filter(sightings => sightings.city === inputValue2);
    }
    console.log(filter_count);
  };
  if (inputValue3 !=""){
    if(filter_count ===0 ){
      filteredData = tableData.filter(sightings => sightings.state === inputValue3);
      filter_count += 1;
    }
    else{
      filteredData = filteredData.filter(sightings => sightings.state === inputValue3);
    }
    console.log(filter_count);
  };

  if (inputValue4 !=""){
    if(filter_count ===0){
      filteredData = tableData.filter(sightings => sightings.country === inputValue4);
      filter_count += 1;
    }
    else{
      filteredData = filteredData.filter(sightings => sightings.country === inputValue4);
    }
    console.log(filter_count);
  };

  if (inputValue5 !=""){
    if(filter_count === 0){
      filteredData = tableData.filter(sightings => sightings.shape === inputValue5);
      filter_count += 1;
    }
    else{
      filteredData = filteredData.filter(sightings => sightings.shape === inputValue5);
    }
    console.log(filter_count);
  };

  // console.log(filteredData);
  var tbody = d3.select("tbody");

  filteredData.forEach(function(sighting_data) {
    // console.log(sighting_data);
    var row = tbody.append("tr");
    Object.entries(sighting_data).forEach(function([key, value]) {
      // console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

});
filter_count = 0;
