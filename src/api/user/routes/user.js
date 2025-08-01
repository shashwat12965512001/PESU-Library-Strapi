module.exports = {
    routes: [
        {
            method: "PUT",
            path: "/update-user-role",
            handler: "user.updateRole",
            config: {
                auth: false,
            },
        },
    ],
};
