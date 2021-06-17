/* 
	TODO [] Criar interface de áudio;
	TODO [] Criar tipos de som por frequência;
	TODO [] Documentar as notas musicais para o tunePad

*/

const audioCTX = new (window.AudioContext || window.webkitAudioContext);
const oscillator = audioCTX.createOscillator()

const controllers = {
	frequency: document.querySelector('[name=frequency]')
}
let frequencyNow = 0;

const allPads = document.querySelectorAll('[data-frequency]')

allPads.forEach(item => item.addEventListener('mouseenter',
	({ target }) => setValueFrequency(target.dataset.frequency))
)


const setValueFrequency = (value) => {
	oscillator.type = 'sine';
	oscillator.frequency.setValueAtTime(Number(value), audioCTX.currentTime);
	oscillator.connect(audioCTX.destination);
}
oscillator.start()
window.document.addEventListener("keypress", e => {
	allPads.forEach(({dataset}) => 
		dataset.keyboard == e.code.toLocaleLowerCase() && setValueFrequency(dataset.frequency)
		)
})