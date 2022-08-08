import {NativeModules} from 'react-native';

const register = (url, code) =>
  new Promise(resolve => {
    NativeModules.RNDetectIdModule.registerDevice(
      url,
      code,
      (success, response) => resolve({success, code: response}),
    );
  });

const setLastAccountName = name =>
  new Promise(resolve => {
    NativeModules.RNDetectIdModule.setLastAccountName(name, success =>
      resolve(success),
    );
  });

const getAccounts = () =>
  new Promise(resolve => {
    NativeModules.RNDetectIdModule.getAccounts(accounts => resolve(accounts));
  });

const getToken = account =>
  new Promise(resolve => {
    NativeModules.RNDetectIdModule.getToken(account, (token, time) =>
      resolve({token, time}),
    );
  });

const setAccountName = (account, name) =>
  new Promise(resolve => {
    NativeModules.RNDetectIdModule.setAccountName(account, name, success =>
      resolve(success),
    );
  });

const removeAccount = account =>
  new Promise(resolve => {
    NativeModules.RNDetectIdModule.removeAccount(account, success =>
      resolve(success),
    );
  });

export {
  register,
  setLastAccountName,
  getAccounts,
  getToken,
  setAccountName,
  removeAccount,
};
