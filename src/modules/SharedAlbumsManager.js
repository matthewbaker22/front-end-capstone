const url = "http://localhost:5002"

export default {
    createSharedAlbum(newSharedAlbum) {
        return fetch(`${url}/sharedAlbums`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSharedAlbum)
        }).then(resp => resp.json())
    },
    getAll() {
        return fetch(`${url}/sharedAlbums?_expand=friend`).then(resp => resp.json())
    },
    getCoverPhoto(photoId) {
        return fetch(`${url}/sharedPhotos/${photoId}`).then(resp => resp.json())
    },
    setCoverPhoto(editedSharedAlbum) {
        return fetch(`${url}/sharedAlbums/${editedSharedAlbum.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedSharedAlbum)
        }).then(resp => resp.json())
    }
}