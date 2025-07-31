'use strict';

/**
 * issued-book service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::issued-book.issued-book');
