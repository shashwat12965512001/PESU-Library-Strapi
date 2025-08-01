module.exports = {
    routes: [
        {
            method: "GET",
            path: "/user-role",
            handler: "user-role.getRoleByEmail",
            config: {
                auth: false, // set to true if you want it protected
            },
        },
    ],
};  