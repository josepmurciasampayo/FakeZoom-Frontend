export const sleep = time => new Promise(resolve => setTimeout(resolve, time));

export function generateFileName(recording_type) {
  return "recording_" + recording_type + ".wav";
}

// downloads the audio to the computer


export function onDecodeBufferError(e) {
  console.log('Error decoding buffer: ' + e.message);
  console.log(e);
}

// function called when the recording is done. it decodes and downloads the audio
export function decodeAndDownload(voice, audio, recording_type) {
  voice.audioCtx.decodeAudioData(
    audio,
    function make_download(abuffer) {
      // get duration and sample rate
      const duration = abuffer.duration,
        rate = abuffer.sampleRate,
        offset = 0,
        total_samples = abuffer.length;

      const blob = bufferToWave(abuffer, total_samples);
      const new_file = URL.createObjectURL(blob);

      const download_link: any= document.getElementById("download_link");
      download_link.href = new_file;
      const name = generateFileName(recording_type);
      download_link.download = name;

      download_link.click();
      voice.clear_nodes();
    }
    , onDecodeBufferError)
}

export function decodeFileAndAddInCollection(voice, audio, quizNum, collection) {
  voice.audioCtx.decodeAudioData(audio).then((abuffer) => {
    const duration = abuffer.duration,
    rate = abuffer.sampleRate,
    offset = 0,
    total_samples = abuffer.length;

    const blob = bufferToWave(abuffer, total_samples);

    collection.push(new File([blob], `${quizNum}.wav`));
    voice.clear_nodes();
    }).catch(onDecodeBufferError)
}


// creates a distortion wave that can be applied on top of the input audio
export function makeDistortionCurve(amount) {
  const k = typeof amount === 'number' ? amount : 50;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = 180 / Math.PI;
  let x;
  for (let i = 0; i < n_samples; ++i) {
    x = i * 2 / n_samples - 1;
    // curve[i] = Math.sin(i/(n_samples/180) * deg) ;
    curve[i] = ((3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x))) / 125;
  }
  return curve;
}

// Convert an AudioBuffer to a Blob using WAVE representation
export function bufferToWave(abuffer, len) {
  const numOfChan = abuffer.numberOfChannels;
  const length = len * numOfChan * 2 + 44;
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  const  channels = [];
  let i;
  let sample;
  let offset = 0;
  let pos = 0;

  // write WAVE header
  setUint32(0x46464952);                         // "RIFF"
  setUint32(length - 8);                         // file length - 8
  setUint32(0x45564157);                         // "WAVE"

  setUint32(0x20746d66);                         // "fmt " chunk
  setUint32(16);                                 // length = 16
  setUint16(1);                                  // PCM (uncompressed)
  setUint16(numOfChan);
  setUint32(abuffer.sampleRate);
  setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
  setUint16(numOfChan * 2);                      // block-align
  setUint16(16);                                 // 16-bit (hardcoded in this demo)

  setUint32(0x61746164);                         // "data" - chunk
  setUint32(length - pos - 4);                   // chunk length

  // write interleaved data
  for (i = 0; i < abuffer.numberOfChannels; i++)
    channels.push(abuffer.getChannelData(i));

  while (pos < length) {
    for (i = 0; i < numOfChan; i++) {             // interleave channels
      sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
      sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0; // scale to 16-bit signed int
      view.setInt16(pos, sample, true);          // write 16-bit sample
      pos += 2;
    }
    offset++                                     // next source sample
  }

  // create Blob
  return new Blob([buffer], { type: "audio/wav" });

  function setUint16(data) {
    view.setUint16(pos, data, true);
    pos += 2;
  }

  function setUint32(data) {
    view.setUint32(pos, data, true);
    pos += 4;
  }
}
