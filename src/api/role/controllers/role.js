'use strict';

module.exports = {
    async fetchAllRoles(ctx) {
        try {
            const roles = await strapi.db.query('plugin::users-permissions.role').findMany({
                select: ['id', 'name', 'description'],
            });

            ctx.send(roles);
        } catch (error) {
            console.error("❌ Error fetching roles:", error);
            ctx.throw(500, error.message || 'Error fetching roles');
        }
    },
};