// Function to fetch sunrise and sunset times using the Sunrise Sunset API
async function getSunriseSunset() {
    try {
      const response = await fetch('https://api.sunrise-sunset.org/json?lat=30.4766&lng=76.5905&formatted=0');
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching sunrise and sunset data:', error);
      return null;
    }
  }
  
  // Function to determine if it's currently day or night based on sunrise and sunset times
  function isDaytime(sunrise, sunset) {
    const now = new Date();
    return now >= new Date(sunrise) && now <= new Date(sunset);
  }
  
  // Function to update the body class based on the time of day
  function updateBodyClass() {
    const $toggleDatNightBtn = $("#toggleDayNight");
    const $dayNightImg = $toggleDatNightBtn.find("img");

    getSunriseSunset().then(results => {
      if (results) {
        const { sunrise, sunset } = results;
        const isDay = !isDaytime(sunrise, sunset);
        $(".body").removeClass('light-mode', 'dark-mode');
        if (isDay) {
          $(".body").addClass('light-mode');
          $dayNightImg.attr("src", "./assets/img/night.png"); 
        } else {
          $(".body").addClass('dark-mode');
          $dayNightImg.attr("src", "./assets/img/day.png"); 
        }
      }
    });
  }

  // Call the updateBodyClass function to set the initial body class
  updateBodyClass();
  
  // Set up an interval to update the body class every hour (in milliseconds)
  setInterval(updateBodyClass, 60 * 60 * 1000);
  



