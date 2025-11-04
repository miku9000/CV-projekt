const fs = require('fs');
const path = require('path');

const imagesFolder = path.join(__dirname, '../images/portraits');

const album = fs.readdirSync(imagesFolder)
    .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map(file => `images/portraits/${file}`);

const jsContent = `const album = ${JSON.stringify(album, null, 2)};`;

fs.writeFileSync('js/generatedAlbum.js', jsContent);

console.log('generatedAlbum.js file created with image paths');