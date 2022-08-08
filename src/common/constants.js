const AppStateValues = {
  ACTIVE: 'active',
};

const AppStateEvents = {
  CHANGE: 'change',
};

const KeyboardEvents = {
  DID_SHOW: 'keyboardDidShow',
  DID_HIDE: 'keyboardDidHide',
};

const LoadStatus = {
  STARTED: 'STARTED',
  DONE: 'DONE',
};

const AccessibilityRole = {
  NONE: 'none',
  BUTTON: 'button',
  LINK: 'link',
  SEARCH: 'search',
  IMAGE: 'image',
  KEYBOARD_KEY: 'keyboardkey',
  TEXT: 'text',
  ADJUSTABLE: 'adjustable',
  IMAGE_BUTTON: 'imagebutton',
  HEADER: 'header',
  SUMMARY: 'summary',
  ALERT: 'alert',
  CHECKBOX: 'checkbox',
  COMBOBOX: 'combobox',
  MENU: 'menu',
  MENUBAR: 'menubar',
  MENUITEM: 'menuitem',
  PROGRESSBAR: 'progressbar',
  RADIO: 'radio',
  RADIO_GROUP: 'radiogroup',
  SCROLLBAR: 'scrollbar',
  SPIN_BUTTON: 'spinbutton',
  SWITCH: 'switch',
  TAB: 'tab',
  TAB_LIST: 'tablist',
  TIMER: 'timer',
  TOOLBAR: 'toolbar',
};

const CHANNEL_AMOUNT_LIMIT = 15000;
const MULTIPLIER_TO_MILLIS = 1000;
const PARSE_DEFAULT_RADIX = 10;
const STRING_EMPTY = '';
const STRING_SPACE = ' ';
const ENCODING_BASE_64 = 'base64';
const DEFAULT_DECIMAL_SEPARATOR = '.';
const REGEX_FLAG_GLOBAL = 'g';
const KEY_MAX_PERCENTAGE = 100;
const CLIPBOARD_CONTENT_MAX_LENGTH = 20;
const PHONE_NUMBER_LENGTH = 8;
const PHONE_NUMBER_MAX_LENGTH = 10;
const PHONE_NUMBER_MASK_LENGTH = 3;
const TOKEN_FULL_PERCENTAGE = 100;
const MAX_CODE_LENGTH = 8;

const REGEX_APP_STATE_INACTIVE_BACKGROUND = /inactive|background/;

export {
  AppStateValues,
  AppStateEvents,
  KeyboardEvents,
  LoadStatus,
  AccessibilityRole,
  CHANNEL_AMOUNT_LIMIT,
  STRING_EMPTY,
  STRING_SPACE,
  ENCODING_BASE_64,
  DEFAULT_DECIMAL_SEPARATOR,
  REGEX_FLAG_GLOBAL,
  PARSE_DEFAULT_RADIX,
  MULTIPLIER_TO_MILLIS,
  KEY_MAX_PERCENTAGE,
  CLIPBOARD_CONTENT_MAX_LENGTH,
  PHONE_NUMBER_LENGTH,
  PHONE_NUMBER_MAX_LENGTH,
  PHONE_NUMBER_MASK_LENGTH,
  REGEX_APP_STATE_INACTIVE_BACKGROUND,
  TOKEN_FULL_PERCENTAGE,
  MAX_CODE_LENGTH,
};
