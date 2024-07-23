const Fetch = async (url, method, data = {}, other = {}) => {
    if (method === "GET") {
        const response = await fetch(url, { method, ...other, headers: { "Authorization": "Bearer " + document.cookie.split('=')[1] } })
        return response
    }
    console.log(data, 'data')
    const response = await fetch(url, {
        method, ...other, headers: { "Authorization": "Bearer " + document.cookie.split('=')[1], "Content-Type": "application/json" }, credentials: "same-origin",
        body: JSON.stringify({...data})
    })
    return response
}

export default Fetch
