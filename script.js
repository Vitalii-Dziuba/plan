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
	];

	photosOnHouse.forEach(function(photo) {
		var room = document.getElementsByClassName(photo.room)[0];

		var point = document.createElement('span');
		point.setAttribute('class', 'point');
		point.setAttribute('style', `top: ${photo.position.y}px; left: ${photo.position.x}px`);
		point.dataset.nameImg = 'electricion/' + photo.room + '_' + photo.identificator + '.jpg';
		point.onclick = function () {
			var image = document.getElementById('homeImage');
			image.setAttribute('src', this.dataset.nameImg);
		};
		room.append(point)

	});
});