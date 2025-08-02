'use strict';

/**
 * book controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::book.book', ({ strapi }) => ({
    async delete(ctx) {
        try {
            const { id } = ctx.params;

            console.log('🛠️ Deleting book with ID:', id);

            const deletedBook = await strapi.entityService.delete('api::book.book', id);

            return ctx.send({ message: 'Book deleted successfully', data: deletedBook }, 200);
        } catch (err) {
            console.error('❌ Delete error:', err);
            return ctx.send({ error: 'Failed to delete book' }, 500);
        }
    },
}));
