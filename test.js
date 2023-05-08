const assert = require('assert');
const audioBufferToBlob = require('./index');

describe('audioBufferToBlob', function() {
  it('should convert an AudioBuffer to a Blob in MP3 format', function() {
    const sampleRate = 44100;
    const numberOfChannels = 2;
    const lengthInSeconds = 1;
    const lengthInSamples = sampleRate * lengthInSeconds;
    const audioBuffer = new AudioBuffer({
      length: lengthInSamples,
      numberOfChannels: numberOfChannels,
      sampleRate: sampleRate
    });

    for (let channel = 0; channel < numberOfChannels; channel++) {
      const channelData = audioBuffer.getChannelData(channel);
      for (let i = 0; i < lengthInSamples; i++) {
        channelData[i] = Math.sin(i / (sampleRate / 440 * 2 * Math.PI));
      }
    }

    const blob = audioBufferToBlob(audioBuffer, 'audio/mp3');
    assert.equal(blob.type, 'audio/mp3');
    assert.ok(blob.size > 0);
  });
});
