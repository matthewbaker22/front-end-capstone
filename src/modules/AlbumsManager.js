const url = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${url}/albums`).then(resp => resp.json())
    },
    post(newArticle) {
        return fetch(`${url}/albums`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        }).then(resp => resp.json())
    }
}