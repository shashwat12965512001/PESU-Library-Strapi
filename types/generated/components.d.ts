import type { Schema, Struct } from '@strapi/strapi';

export interface SettingsAiFeatures extends Struct.ComponentSchema {
  collectionName: 'components_settings_ai_features';
  info: {
    displayName: 'AI Features';
    icon: 'alien';
  };
  attributes: {
    autoCategorizeBooks: Schema.Attribute.Boolean;
    chatbotEnabled: Schema.Attribute.Boolean;
    smartDueDatePredictions: Schema.Attribute.Boolean;
  };
}

export interface SettingsCirculationPolicies extends Struct.ComponentSchema {
  collectionName: 'components_settings_circulation_policies';
  info: {
    displayName: 'Circulation Policies';
    icon: 'chartCircle';
  };
  attributes: {
    allowRenewals: Schema.Attribute.Boolean;
    gracePeriodDays: Schema.Attribute.Integer;
    maxRenewalsPerBook: Schema.Attribute.Integer;
    restrictByCategory: Schema.Attribute.Boolean;
  };
}

export interface SettingsLibraryInfo extends Struct.ComponentSchema {
  collectionName: 'components_settings_library_infos';
  info: {
    displayName: 'Library Info';
    icon: 'information';
  };
  attributes: {
    Address: Schema.Attribute.Text;
    Code: Schema.Attribute.String;
    contactEmail: Schema.Attribute.Email;
    establishedYear: Schema.Attribute.Integer;
    Name: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    Website: Schema.Attribute.String;
  };
}

export interface SettingsNotifications extends Struct.ComponentSchema {
  collectionName: 'components_settings_notifications';
  info: {
    displayName: 'Notifications';
    icon: 'bell';
  };
  attributes: {
    enableDueAlerts: Schema.Attribute.Boolean;
    enableEmail: Schema.Attribute.Boolean;
    enableReminders: Schema.Attribute.Boolean;
    enableSMS: Schema.Attribute.Boolean;
  };
}

export interface SettingsOperatingHours extends Struct.ComponentSchema {
  collectionName: 'components_settings_operating_hours';
  info: {
    displayName: 'Operating Hours';
    icon: 'clock';
  };
  attributes: {
    closedOnHolidays: Schema.Attribute.Boolean;
    weekdayClose: Schema.Attribute.Time;
    weekdayOpen: Schema.Attribute.Time;
    weekendClose: Schema.Attribute.Time;
    weekendOpen: Schema.Attribute.Time;
  };
}

export interface SettingsPreferences extends Struct.ComponentSchema {
  collectionName: 'components_settings_preferences';
  info: {
    displayName: 'Preferences';
    icon: 'cog';
  };
  attributes: {
    currency: Schema.Attribute.String;
    finePerDay: Schema.Attribute.Integer;
    Language: Schema.Attribute.String;
    loanPeriodDays: Schema.Attribute.Integer;
    maxBooksPerUser: Schema.Attribute.Integer;
  };
}

export interface SettingsPrivacy extends Struct.ComponentSchema {
  collectionName: 'components_settings_privacies';
  info: {
    displayName: 'Privacy';
    icon: 'key';
  };
  attributes: {
    allowDataExport: Schema.Attribute.Boolean;
    dataRetentionMonths: Schema.Attribute.Integer;
    shareWithVendors: Schema.Attribute.Boolean;
  };
}

export interface SettingsUserExperience extends Struct.ComponentSchema {
  collectionName: 'components_settings_user_experiences';
  info: {
    displayName: 'User Experience';
    icon: 'user';
  };
  attributes: {
    darkModeDefault: Schema.Attribute.Boolean;
    dashboardWidgets: Schema.Attribute.JSON;
    showTooltips: Schema.Attribute.Boolean;
  };
}

export interface SharedTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tag';
    icon: 'priceTag';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'settings.ai-features': SettingsAiFeatures;
      'settings.circulation-policies': SettingsCirculationPolicies;
      'settings.library-info': SettingsLibraryInfo;
      'settings.notifications': SettingsNotifications;
      'settings.operating-hours': SettingsOperatingHours;
      'settings.preferences': SettingsPreferences;
      'settings.privacy': SettingsPrivacy;
      'settings.user-experience': SettingsUserExperience;
      'shared.tag': SharedTag;
    }
  }
}
