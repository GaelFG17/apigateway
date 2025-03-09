const services = [
    {
        name : "auth",
        url : "http://localhost:3000",
        path : "/api/auth",
        headers: {
            "Content-Type": "application/json"
        },
    },
    {
        name : "users",
        url : "http://localhost:3001",
        path : "/api/users",
        headers: {
            "Content-Type": "application/json"
        },
    },
]

module.exports = {services};