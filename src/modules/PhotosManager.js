const url = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${url}/photos`).then(resp => resp.json())
    },
    addNewPhoto(newPhoto) {
        return fetch(`${url}/photos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPhoto)
        }).then(resp => resp.json())
    },
    delete(id) {
        return fetch(`${url}/photos/${id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
    }
}