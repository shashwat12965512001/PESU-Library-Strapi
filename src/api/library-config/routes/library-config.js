'use strict';

/**
 * library-config router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::library-config.library-config');
