const apiURL = 'https://polar-basin-60578.herokuapp.com/api/v1/';

//testing the api call here
fetch(`${apiURL}posts`)
  .then(response => response.json())
  .then(data => $('#content').append(JSON.stringify(data, null , 2)))
