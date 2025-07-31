'use strict';

/**
 * library-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::library-config.library-config');
