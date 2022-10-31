document.addEventListener('DOMContentLoaded', function(){
	var photosOnHouse = [
		{ position: {y: 30, x: 0}, identificator: '1', room: 'technical'},
		{ position: {y: 0, x: 50}, identificator: '2', room: 'technical'},
		{ position: {y: 50, x: 105}, identificator: '3', room: 'technical'},
		{ position: {y: 100, x: 145}, identificator: '4', room: 'technical'},
		{ position: {y: 235, x: 145}, identificator: '5', room: 'technical'},
		{ position: {y: 235, x: 65}, identificator: '6', room: 'technical'},
		{ position: {y: 200, x: 0}, identificator: '7', room: 'technical'},
		{ position: {y: 160, x: 0}, identificator: '8', room: 'technical'},
		{ position: {y: 65, x: 305}, identificator: '1', room: 'office'},
		{ position: {y: 135, x: 260}, identificator: '2', room: 'office'},
		{ position: {y: 135, x: 150}, identificator: '3', room: 'office'},
		{ position: {y: 135, x: 30}, identificator: '4', room: 'office'},
		{ position: {y: 65, x: 0}, identificator: '5', room: 'office'},
		{ position: {y: 0, x: 190}, identificator: '6', room: 'office'},
		{ position: {y: 0, x: 60}, identificator: '7', room: 'office'},
		{ position: {y: 310, x: 225}, identificator: '1', room: 'living'},
		{ position: {y: 150, x: 225}, identificator: '2', room: 'living'},
		{ position: {y: 20, x: 225}, identificator: '3', room: 'living'},
		{ position: {y: 0, x: 135}, identificator: '4', room: 'living'},
		{ position: {y: 40, x: 80}, identificator: '5', room: 'living'},
		{ position: {y: 240, x: 0}, identificator: '6', room: 'living'},
		{ position: {y: 395, x: 0}, identificator: '7', room: 'living'},
		{ position: {y: 585, x: 20}, identificator: '8', room: 'living'},
		{ position: {y: 585, x: 180}, identificator: '9', room: 'living'},
		{ position: {y: 450, x: 145}, identificator: '10', room: 'living'},
		{ position: {y: 545, x: 225}, identificator: '11', room: 'living'},
		{ position: {y: 0, x: 0}, identificator: '1', room: 'pantry'},
		{ position: {y: 85, x: 30}, identificator: '2', room: 'pantry'},
		{ position: {y: 70, x: 145}, identificator: '3', room: 'pantry'},
		{ position: {y: 85, x: 105}, identificator: '1', room: 'wash'},
		{ position: {y: 30, x: 0}, identificator: '2', room: 'wash'},
		{ position: {y: 85, x: 40}, identificator: '3', room: 'wash'},
		{ position: {y: 135, x: 225}, identificator: '1', room: 'master'},
		{ position: {y: 35, x: 225}, identificator: '2', room: 'master'},
		{ position: {y: 0, x: 80}, identificator: '3', room: 'master'},
		{ position: {y: 0, x: 0}, identificator: '4', room: 'master'},
		{ position: {y: 135, x: 0}, identificator: '5', room: 'master'},
		{ position: {y: 50, x: 0}, identificator: '1', room: 'shower'},
		{ position: {y: 85, x: 105}, identificator: '2', room: 'shower'},
		{ position: {y: 0, x: 105}, identificator: '3', room: 'shower'},
		{ position: {y: 0, x: 20}, identificator: '4', room: 'shower'},
		{ position: {y: 85, x: 85}, identificator: '1', room: 'wardrobe'},
		{ position: {y: 0, x: 0}, identificator: '2', room: 'wardrobe'},
		{ position: {y: 0, x: 105}, identificator: '3', room: 'wardrobe'},
		{ position: {y: 135, x: 20}, identificator: '1', room: 'badroom'},
		{ position: {y: 135, x: 160}, identificator: '2', room: 'badroom'},
		{ position: {y: 70, x: 225}, identificator: '3', room: 'badroom'},
		{ position: {y: 0, x: 100}, identificator: '4', room: 'badroom'},
		{ position: {y: 65, x: 0}, identificator: '5', room: 'badroom'},
		{ position: {y: 60, x: 225}, identificator: '1', room: 'room'},
		{ position: {y: 0, x: 0}, identificator: '2', room: 'room'},
		{ position: {y: 110, x: 0}, identificator: '3', room: 'room'},
		{ position: {y: 20, x: 225}, identificator: '4', room: 'room'},
		{ position: {y: 135, x: 205}, identificator: '5', room: 'room'},
		{ position: {y: 85, x: 105}, identificator: '1', room: 'bethroom'},
		{ position: {y: 85, x: 20}, identificator: '2', room: 'bethroom'},
		{ position: {y: 50, x: 145}, identificator: '3', room: 'bethroom'},
		{ position: {y: 0, x: 70}, identificator: '4', room: 'bethroom'},
		{ position: {y: 50, x: 75}, identificator: '1', room: 'mudroom'},
		{ position: {y: 85, x: 0}, identificator: '2', room: 'mudroom'},
		{ position: {y: 85, x: 125}, identificator: '3', room: 'mudroom'},
		{ position: {y: 20, x: 145}, identificator: '4', room: 'mudroom'},
		{ position: {y: 285, x: 25}, identificator: '1', room: 'coridor'},
		{ position: {y: 335, x: 115}, identificator: '2', room: 'coridor'},
		{ position: {y: 250, x: 135}, identificator: '3', room: 'coridor'},
		{ position: {y: 170, x: 160}, identificator: '4', room: 'coridor'},
		{ position: {y: 0, x: 190}, identificator: '5', room: 'coridor'},
		{ position: {y: 200, x: 225}, identificator: '6', room: 'coridor'},
		{ position: {y: 300, x: 225}, identificator: '7', room: 'coridor'},
		{ position: {y: 400, x: 225}, identificator: '8', room: 'coridor'},
		{ position: {y: 380, x: 160}, identificator: '9', room: 'coridor'},
	];

	var rooms = photosOnHouse
		.filter((item, index, self) => self.findIndex(itemm => item.room == itemm.room) === index)
		.map(item => item.room);
	var image = document.getElementById('homeImage');
	var loader = document.getElementById('imgLoader');

	photosOnHouse.forEach(function(photo) {
		var room = document.getElementsByClassName(photo.room)[0];

		var point = document.createElement('span');
		point.setAttribute('class', 'point');
		point.setAttribute('style', `top: ${photo.position.y}px; left: ${photo.position.x}px`);
		point.dataset.nameImg = 'electricion/' + photo.room + '_' + photo.identificator + '.jpg';
		point.onclick = function () {
			image.setAttribute('src', this.dataset.nameImg);
			image.setAttribute('style', 'display: none');
			loader.setAttribute('style', 'display: block');
		};
		room.append(point);
	});

	rooms.forEach(name => {
		var room = document.getElementsByClassName(name)[0];
		room.addEventListener('click', function() {
			rooms.forEach(name => document.getElementsByClassName(name)[0].classList.remove('showPoint'));
			this.classList.add('showPoint');
		});
	});

	image.onload = function() {
		loader.setAttribute('style', 'display: none');
		image.setAttribute('style', 'display: block');
	};

});