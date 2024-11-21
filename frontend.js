// frontend.js

// Function to fetch available cities
function fetchCities() {
    axios.get('/cities')
      .then(response => {
        const cities = response.data;
        // Populate dropdown menu or display cities on the frontend
        console.log('Available cities:', cities);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  }
  
  // Function to handle car rental request
  function rentCar() {
    const rentalData = {
      startDate: '2024-04-01',
      endDate: '2024-04-05',
      city: 'New York' // Example city
    };
  
    axios.post('/rent-car', rentalData)
      .then(response => {
        console.log('Car rental request successful:', response.data);
      })
      .catch(error => {
        console.error('Error renting car:', error);
      });
  }
  
  // Call fetchCities() when "Select City" button is clicked
  document.getElementById('select-city-btn').addEventListener('click', fetchCities);
  
  // Call rentCar() when "Rent Car" button is clicked
  document.getElementById('rent-car-btn').addEventListener('click', rentCar);
  