// API URLs
export const API_URLS = {
  PROTOCOL: '',
  BASE_URL: '',
  AUTHENTICATE: 'jwt',
  CHECK_USER_AUTHENTICATED: 'check-user-authenticated',
  REMOVE_TOKEN: 'remove-token',
  FETCH_TEMPLATES: 'fetch-templates',
  FETCH_SERVICES: 'fetch-services',
  CHECK_NUMBERS: 'check-numbers',
  SEND_SMS_API: 'send',
  SEND_BROADCAST_API: 'send-broadcast',
  GET_MESSAGE_STATUS: 'get-message-status'
};

export const SETTINGS_TYPES = {
  LINE_TYPE_SWITCH: 'lineTypeSwitch',
  MESSAGING_SERVICE_SWITCH: 'messagingServiceSwitch',
  MEDIA_URL_SWITCH: 'mediaUrlSwitch',
  OPT_OUT_SWITCH: 'optOutSwitch',
  SCHEDULE_SWITCH: 'scheduleSwitch',
  BROADCAST_SWITCH: 'broadcastSwitch',
  ENABLE_GRAPH: 'enableGraph',
  LIMITS: 'limits',
  LINK_SHORTENING: 'linkShorteningSwitch'
}

export const CSVDATA_TYPES = {
  ALL_CSV_DATA : 'allCSVData',
  CSV_COLUMN_FIELDS: 'csvColumnFields',
  CSV_SELECTED_COLUMN: 'csvSelectedColumn',
  DELETE_ROW: 'deleteRow',
  UPDATE_DATA_CHUNK: 'updateDataChunk',
  UPDATE_ROW: 'updateRow',
  ADD_ROW: 'addRow'
}

export const MESSAGING_TYPES = {
  MESSAGE_TYPE_SELECTION: 'messageTypeSelection',
  SENDER_TYPE_SELECTION: 'senderTypeSelection',
  CHANNEL_SELECTION: 'channelSelection',
  SELECTED_SERVICE: 'selectedService',
  SELECTED_SINGLE_SENDER: 'selectedSingleSender',
  SELECTED_TEMPLATE: 'selectedTemplate',
  TEMPLATE_VARIABLES: 'templateVariables',
  CUSTOM_MESSAGE: 'customMessage',
  CUSTOM_MEDIA_URL: 'customMediaURL',
  SCHEDULED_DATE: 'scheduledDate',
  SEND_RESULTS_ARRAY: 'sendResultsArray',
  UPDATE_SEND_RESULTS_ARRAY_AFTER_SEND: 'sendResultsArrayUpdateAfterSend',
  UPDATE_DATA_CHUNK: 'updateDataChunk',
  DELETE_ROW: 'deleteRow',
  UPDATE_ROW: 'updateRow',
  ADD_ROW: 'addRow',
  UPDATE_STATUS_CHUNK: 'updateStatusChunk'
  
}

export const ACTION_TYPES = {
  LOOKUP_DATA_FOR_LOGS: 'lookupDataForLogs',
  TOTAL_LOGS: 'totalLogs',
  SEND_DATA_FOR_LOGS: 'sendDataForLogs',
  GET_STATUS_DATA_FOR_LOGS: 'getStatusDataForLogs',
  EMPTY_NUMBERS_FOR_LOGS: 'emptyNumbersForLogs',
  DUPLICATE_NUMBERS_FOR_LOGS: 'duplicateNumberDataForLogs',
  PROGRESS_BAR_COUNT: 'progressBarCount'
}

export const COMMON = {
  RESET_STATE: 'resetState'
}

export const CONTENT_TYPES = {
  'twilio/text': 'Text',
  'twilio/media': 'Media',
  'twilio/call-to-action': 'Call To Action',
  'twilio/quick-reply': 'Quick Reply',
  'twilio/card': 'Card',
  'twilio/list-picker': 'List Picker',
  'whatsapp/authentication': 'Whatsapp Authentication'
};