const countryList = document.getElementById('countries');
const sliderList = document.getElementById('slider-list');
let width;

let wArr = [];
let slArr = [];

async function func(array, cId){

	const country = {
		name: '' ,
		weather: '' ,
		temperature: '',
		img: '',
	}

	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cId}&appid=27b486ad2a86979f1954cf9b50a86cf0`);
	const data = await res.json();

	country.name = data.name
	country.weather = data.weather[0].main
	country.temperature = data.main.temp
	country.img = data.weather[0]['icon']

	array.push(country)

	 displayCountries();
	 displaySlider();
	 init();
}

function displayCountries() {
	let displayCountry = '';
	wArr.forEach((item, i) => {
		
		displayCountry += `
		<div class="country"> 
			<p class="cName whitesmoke"> ${item.name}</p>
			<p class="cWeather whitesmoke"> ${item.weather} </p>
			<p class="cDegrees whitesmoke"> ${Math.round(item.temperature - 273)} °C </p>
			<img class="cIcon" src="https://openweathermap.org/img/wn/${item.img}@2x.png"> 
		</div>
		`;
		countryList.innerHTML = displayCountry;
	});
}

function displaySlider() {
	let displaySlider = '';
	slArr.forEach((item, i) => {
		
		displaySlider += `
		<div class="country-slider"> 
			<p class="cName whitesmoke"> ${item.name}</p>
			<p class="cWeather whitesmoke"> ${item.weather} </p>
			<p class="cDegrees whitesmoke"> ${Math.round(item.temperature - 273)} °C </p>
			<img class="cIcon" src="https://openweathermap.org/img/wn/${item.img}@2x.png"> 
		</div>
		`;
		sliderList.innerHTML = displaySlider;
	});
}

function init() {
	let cSlider = document.querySelectorAll('.country-slider');
	width = document.getElementById('slider').offsetWidth;
	sliderList.style.width = width*cSlider.length + 'px';

	cSlider.forEach(item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	});
	rollSlider();
	console.log('')
}

let count = 0;

document.getElementById('slider-prev').addEventListener('click', () => {
	count--;
	if (count < 0 ) {
		count = slArr.length - 1;
	}
	rollSlider();
});

document.getElementById('slider-next').addEventListener('click', () => {
	count++;
	if (count >= slArr.length) {
		count = 0;
	}
	rollSlider();
});

function rollSlider() {
	sliderList.style.transform = 'translate(-'+count*width+'px)';
}

 window.addEventListener("load", function() {
	   
	 func(wArr , '8019846');
	 func(wArr , '1548797');
	 func(wArr ,'1710908');


//заполнение слайдера
	 func(slArr , '1899368');
	 func(slArr ,'1152479');
	 func(slArr , '2848051');
	 func(slArr , '3659926');
	 func(slArr ,'6355975');

 });

window.addEventListener('resize', init);





