// var canvas = document.querySelector('canvas');
// const canvasContext = canvas.getContext('2d');
// const barGradient = canvasContext.createLinearGradient(0, 0, 1, canvas.height - 1);
// barGradient.addColorStop(0, '#ececec');
// barGradient.addColorStop(1, '#e2e2e2');

let canvas;
// canvas rendering for the audio
export class Spectrum{

    constructor(audioCtx, canvasElem){
        canvas = canvasElem;
        this.spectrumFFTSize = 128
        this.spectrumSmoothing = 0.8
        // create the analyser to be used for the canvas rendering and the pitch detection
        this.spectrumAudioAnalyser = audioCtx.createAnalyser();
        this.spectrumAudioAnalyser.fftSize = this.spectrumFFTSize;
        this.spectrumAudioAnalyser.smoothingTimeConstant = this.spectrumSmoothing;
        this.canvasContext = canvas.getContext('2d');
        this.barGradient = this.canvasContext.createLinearGradient(0, 0, 1, canvas.height - 1);
        this.barGradient.addColorStop(0, '#ececec');
        this.barGradient.addColorStop(1, '#e2e2e2');
    }

    setBarColor(voice){
        if(voice == "white"){
          this.barGradient = this.canvasContext.createLinearGradient(0, 0, 1, canvas.height - 1);
          this.barGradient.addColorStop(0, 'blue');
          this.barGradient.addColorStop(1, 'red');
        } else{
          this.barGradient = this.canvasContext.createLinearGradient(0, 0, 1, canvas.height - 1);
          this.barGradient.addColorStop(0, 'orange');
          this.barGradient.addColorStop(1, '#858585');
        }
    }

    render(){
        // get the frequency data and represent it as bars on a canvas
        var frequencyData = new Uint8Array(this.spectrumAudioAnalyser.frequencyBinCount);
        this.spectrumAudioAnalyser.getByteFrequencyData(frequencyData);

        this.canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        this.canvasContext.fillStyle = this.barGradient;

        var barWidth = canvas.width / frequencyData.length;
        for (let i = 0; i < frequencyData.length; i++) {
            var magnitude = frequencyData[i];
            this.canvasContext.fillRect(barWidth * i, canvas.height, barWidth - 1, -magnitude - 1);
        }
    }
}
