let tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
let papanSkor = document.querySelector('.skor');
let papanWaktu = document.querySelector('.waktu');

let selesai;
let angkaSebelumnya;
let skor;
let time = 10;
papanWaktu.innerHTML = time;

function angkaRandom(tanah){
	let angka =  Math.floor(Math.random() * tanah.length);	
	let tanahRandom = tanah[angka];
	if(tanahRandom == angkaSebelumnya){
		angkaRandom(tanah);
	}
	angkaSebelumnya = tanahRandom;
	return tanahRandom;
}

function munculTikus(){
	let muncul = angkaRandom(tanah);
	muncul.classList.add('muncul');

	setTimeout(() => {
		muncul.classList.remove('muncul');
		if (selesai == false) {
			munculTikus();
		}
	}, 1000);
}

let coba = function waktu(){
	let times = 10
	setInterval(function(){
		times--;
		papanWaktu.innerHTML = times;
		if(times < 0){
			clearInterval(coba);
			papanWaktu.innerHTML = "Waktu Habis";
		}
	}, 1000);

}

function mulai(){
	selesai = false;
	skor = 0;
	papanSkor.innerHTML = skor;
	coba();
	munculTikus();

	setTimeout(function() {
		selesai = true
	}, 10000);
}

function pukul(){
	skor++;
	this.parentNode.classList.remove('muncul');
	papanSkor.innerHTML = skor;
}

tikus.forEach(t => {
  t.addEventListener('click', pukul);
});
