function promiseTest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Eu sou uma promise');
            resolve();
        }, 2000);
    })
}

export default async function () {
    await promiseTest();
    console.log('Promise finalizada.');
}