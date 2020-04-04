const url = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${url}/albums?userId=${parseInt(sessionStorage.getItem("Active Id"))}`).then(resp => resp.json())
    },
    getSingleAlbum(id) {
        return fetch(`${url}/albums/${id}`).then(resp => resp.json())
    },
    getCoverPhoto(photoId) {
        return fetch(`${url}/photos/${photoId}`).then(resp => resp.json())
    },
    post(newAlbum) {
        return fetch(`${url}/albums`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAlbum)
        }).then(resp => resp.json())
    },
    delete(id) {
        return fetch(`${url}/albums/${id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
    },
    update(editedAlbum) {
        return fetch(`${url}/albums/${editedAlbum.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAlbum)
        }).then(resp => resp.json())
    },
    setCoverPhoto(editedAlbum) {
        return fetch(`${url}/albums/${editedAlbum.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAlbum)
        }).then(resp => resp.json())
    }

}