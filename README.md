# audiobuffer-to-blob
```audiobuffer-to-blob``` is a Node.js package that provides a simple and efficient way to convert an AudioBuffer to a Blob in MP3 format. This package is especially useful for web developers who need to export synthesized audio from a web application to a downloadable MP3 file.

The package uses the wav package to encode the AudioBuffer data into a WAV format and then converts it to a Blob in MP3 format. The resulting Blob can be used to create an object URL and download the synthesized audio as an MP3 file.

```audiobuffer-to-blob``` is easy to use and integrates seamlessly with any Node.js application that works with AudioBuffers. It is also published to the npm registry, making it easy for developers to install and use in their projects.

## Installation
To install ```audiobuffer-to-blob```, use npm:

```
npm install audiobuffer-to-blob
```

## Usage
The package exposes a single function, which takes an AudioBuffer as input and returns a Blob in MP3 format:

```
const audiobufferToBlob = require('audiobuffer-to-blob');

// assume 'audioBuffer' is a valid AudioBuffer instance
const blob = audiobufferToBlob(audioBuffer);
```

You can then use the Blob to create an object URL and download the synthesized audio as an MP3 file, for example:

```
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'audio.mp3';
document.body.appendChild(link);
link.click();
```

```
git clone https://github.com/yourusername/audiobuffer-to-blob.git
cd audiobuffer-to-blob
node examples/example-node.js
```

## License
This package is licensed under the MIT License. See the LICENSE file for more information.```
