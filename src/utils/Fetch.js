const Fetch = async (url, method, other = {}) => {
    const response = await fetch(url, {method, ...other, headers: { "Authorization": "Bearer " + document.cookie.split('=')[1] }})
    return response
}

export default Fetch
