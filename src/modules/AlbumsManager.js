const url = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${url}/albums?userId=${parseInt(sessionStorage.getItem("Active Id"))}`).then(resp => resp.json())
    },
    post(newArticle) {
        return fetch(`${url}/albums`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        }).then(resp => resp.json())
    },
    delete(id) {
        return fetch(`${url}/albums/${id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
    }
}