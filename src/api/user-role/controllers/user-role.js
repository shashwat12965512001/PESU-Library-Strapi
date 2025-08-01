'use strict';

module.exports = {
    async getRoleByEmail(ctx) {
        try {
            const { email } = ctx.query;

            if (!email) {
                return ctx.badRequest("Email is required");
            }

            const user = await strapi.db.query('plugin::users-permissions.user').findOne({
                where: { email },
                populate: ['role'],
            });

            if (!user) {
                return ctx.notFound("User not found");
            }

            ctx.send({
                role: user.role?.name || null,
            });

        } catch (err) {
            console.error(err);
            ctx.internalServerError("Something went wrong");
        }
    },
};