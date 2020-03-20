const url = "http://localhost:5002"

export default {
    post(newUser) {
        return fetch(`${url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(resp => resp.json())
    },
    getAll() {
        return fetch(`${url}/users`).then(resp => resp.json())
    }
}