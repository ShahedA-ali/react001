const keyGenerator = () => {
    let randNums = Math.round(Math.random() * 9000 + 999);
    let key = ['', '-', randNums];
    const alphaNumGenerator = () => {
        let randAlpha = Math.ceil(Math.random() * 26);
        return randAlpha;
    };
    for (let i = 0; i < 4; i++) {
        let oneAlphaNum = alphaNumGenerator();
        key[0] += String.fromCharCode(oneAlphaNum + 64);
    }
    return key.join('');
};

export default keyGenerator