const ObjectAllKeys = (obj) => {
    let keys = [];
    obj.forEach(element => {
        keys.push(...Object.keys(element))
    });
    // for (let i = 0; i < obj.length; i++) {
    //   keys.push(...Object.keys(obj[i]))
    // }
    const keySet = new Set(keys)
    return [...keySet]
}

export { ObjectAllKeys }