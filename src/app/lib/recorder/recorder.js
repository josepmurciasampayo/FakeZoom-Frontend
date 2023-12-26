
// function that handles recording the audio input
export const recordAudio = (audioStream) =>
  new Promise(async resolve => {
    // create the MediaRecorder object from the WebAudioAPI
    const mediaRecorder = new MediaRecorder(audioStream);

    // chunks of the input to be turned into a blob
    var audioChunks = [];

    // get the input chunk whenever it is ready and append it to the list of chunks
    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    // starts the recording
    const start = () => {
      // reinitialize the chunks to an empty array
      audioChunks = [];

      // start the MediaRecorder
      mediaRecorder.start();
    };


    // stops the recording
    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          // create an audio blob from the recorded chunks
          const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });

          // create an audio element
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);

          // the function that will play the audio
          const play = () => audio.play();

          // return the blob, audioUrl, audio and play function
          resolve({ audioBlob, audioUrl, play, audio });
        });

        // call the stop event on the mediaRecoder
        mediaRecorder.stop();
      });

      // the recordAudio object has start and stop as functions
      resolve({ start, stop });
  });
