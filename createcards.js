const createCards = (data, dayOfTheWeek) => {
  const container = document.querySelector('.container');
  // Create the elements with Data
  const card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);

  const imageBox = document.createElement('div');
  imageBox.classList.add('imgBx');
  card.appendChild(imageBox);

  const cardImg = document.createElement('img');
  cardImg.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
  imageBox.appendChild(cardImg);

  const contentBox = document.createElement('div');
  contentBox.classList.add('contentBx');
  card.appendChild(contentBox);

  const cardHeader = document.createElement('h2');
  cardHeader.innerHTML = dayOfTheWeek;
  contentBox.appendChild(cardHeader);

  const tempDescription = document.createElement('h4');
  tempDescription.innerHTML = data.weather[0].description;
  contentBox.appendChild(tempDescription);

  const currentTempBox = document.createElement('div');
  currentTempBox.classList.add('color');
  contentBox.appendChild(currentTempBox);

  const currentTempHeader = document.createElement('h3');
  currentTempHeader.innerHTML = 'Temp:';
  currentTempBox.appendChild(currentTempHeader);

  const currentTemp = document.createElement('span');
  currentTemp.classList.add('current-temp');
  currentTemp.innerHTML = data.main.temp + '°C';
  currentTempBox.appendChild(currentTemp);

  const minMaxTemperatures = document.createElement('div');
  minMaxTemperatures.classList.add('details');
  contentBox.appendChild(minMaxTemperatures);

  const minMaxTempHeader = document.createElement('h3');
  minMaxTempHeader.innerHTML = 'More:';
  minMaxTemperatures.appendChild(minMaxTempHeader);

  const minTemp = document.createElement('span');
  minTemp.classList.add('min-temp');
  minTemp.innerHTML = data.main.temp_min + '°C';
  minMaxTemperatures.appendChild(minTemp);

  const maxTemp = document.createElement('span');
  maxTemp.classList.add('max-temp');
  maxTemp.innerHTML = data.main.temp_max + '°C';
  minMaxTemperatures.appendChild(maxTemp);
};

export default createCards;
