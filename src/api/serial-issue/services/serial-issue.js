'use strict';

/**
 * serial-issue service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::serial-issue.serial-issue');
