module.exports = {
    routes: [
        {
            method: "GET",
            path: "/fetch-roles",
            handler: "role.fetchAllRoles",
            config: {
                auth: false, // or set to true if you want protected access
            },
        },
    ],
};
