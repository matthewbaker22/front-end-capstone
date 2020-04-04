const url = "http://localhost:5002"

export default {
    post(newFriend) {
        return fetch(`${url}/friends`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFriend)
        }).then(resp => resp.json())
    }
}