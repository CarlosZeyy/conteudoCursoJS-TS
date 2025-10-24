const fs = require('fs').promises;
const path = require('path');

async function readDirectory(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walkDir(files, rootDir);
}

async function walkDir(files, rootDir) {
    for (let file of files) {
        const fullFilePath = path.resolve(rootDir, file);
        const stats = await fs.stat(fullFilePath);
        
        if (/\.git/g.test(fullFilePath)) continue;
        if (/\.node_modules/g.test(fullFilePath)) continue;
        // if (/\.json/g.test(fullFilePath)) continue; //* Para nao ler os arquivos .json

        if (stats.isDirectory()) {
            readDirectory(fullFilePath);
        }

        if (!/\.js/g.test(fullFilePath)) continue;
        console.log(fullFilePath);
    }
}

readDirectory('/home/carlos/Desktop/conteudoCursoJS-TS/Seção 10 - JavaScript - Node, Npm, Express e MongoDB (NodeJS)');