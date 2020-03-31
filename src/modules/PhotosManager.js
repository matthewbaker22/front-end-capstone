const url = "http://localhost:5002"

export default {
    getAllForAlbum(albumId) {
        return fetch(`${url}/photos?albumId=${albumId}`).then(resp => resp.json())
    },
    getPhoto(id) {
        return fetch(`${url}/photos/${id}`).then(resp => resp.json())
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
    },
    update(editedPhoto) {
        return fetch(`${url}/photos/${editedPhoto.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedPhoto)
        }).then(resp => resp.json())
    },
    checkIfCoverPhoto(photoId) {
        return fetch(`${url}/albums?photoId=${photoId}`)
        .then(resp => resp.json())
    }
}