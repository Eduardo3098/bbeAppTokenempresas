/* eslint-disable import/prefer-default-export */
export const getFootprintToken = jest.fn(() => {
  const result = {
    headers: {apikey: 'API_KEY', jwtvariable: 'JWT'},
    data: [
      {
        keyParameterId: 1,
        keyParameterName: 'background_time',
        keyParameterUnit: 'seconds',
        keyParameterValue: 180,
        active: true,
      },
      {
        keyParameterId: 1,
        keyParameterName: 'transactionTimeout',
        keyParameterUnit: 'seconds',
        keyParameterValue: '{ "time": 20 }',
        active: true,
      },
      {
        keyParameterId: 2,
        keyParameterName: 'max_value',
        keyParameterUnit: 'USD',
        keyParameterValue: 15000,
        active: true,
      },
      {
        keyParameterId: 3,
        keyParameterName: 'version_app',
        keyParameterUnit: '',
        keyParameterValue: '0.1.43',
        active: true,
      },
      {
        keyParameterId: 4,
        keyParameterName: 'forced_update',
        keyParameterUnit: '',
        keyParameterValue: 'yes',
        active: true,
      },
      {
        keyParameterId: 5,
        keyParameterName: 'downMaintenance',
        keyParameterUnit: 'Boolean',
        keyParameterValue: 'true',
        active: true,
      },
      {
        keyParameterId: 6,
        keyParameterName: 'force_enrollment',
        keyParameterUnit: 'Boolean',
        keyParameterValue: 'false',
        active: true,
      },
    ],
  };
  return result;
});
