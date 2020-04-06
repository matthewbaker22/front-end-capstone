const url = "http://localhost:5002"

export default {
    getAllForAlbum(sharedAlbumId) {
        return fetch(`${url}/sharedPhotos?sharedAlbumId=${sharedAlbumId}`).then(resp => resp.json())
    },
    addNewPhoto(newPhoto) {
        return fetch(`${url}/sharedPhotos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPhoto)
        }).then(resp => resp.json())
    }
}