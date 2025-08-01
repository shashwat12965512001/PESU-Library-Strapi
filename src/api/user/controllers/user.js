'use strict';

module.exports = {
    async updateRole(ctx) {
        const { email, roleName } = ctx.request.body;

        const role = await strapi.db.query('plugin::users-permissions.role').findOne({
            where: { name: roleName },
        });

        if (!role) {
            return ctx.badRequest("Invalid role");
        }

        const user = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { email },
        });

        if (!user) {
            return ctx.badRequest("User not found");
        }

        await strapi.db.query('plugin::users-permissions.user').update({
            where: { id: user.id },
            data: { role: role.id },
        });

        ctx.send({ message: "Role updated successfully!" });
    }
};
