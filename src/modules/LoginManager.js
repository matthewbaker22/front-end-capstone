const url = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${url}/users`).then(resp => resp.json())
    },
    getAlbumsByUserId(userId) {
        return fetch(`${url}/albums/${userId}`)
    }
}