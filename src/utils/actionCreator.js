import { createAction } from 'redux-act';
/**
 * Creates action object
 *
 * @param  {string} moduleName A name of the module
 *
 * @return {function} A function that receives action name as a string and returns actions
 */

export const createAsyncAction = (type, payloadCreators = {}, metaCreators = {}) => ({
  cancel: createAction(type + '::CANCEL', payloadCreators.cancel, metaCreators.cancel),
  failure: createAction(type + '::FAILURE', payloadCreators.failure, metaCreators.failure),
  request: createAction(type + '::REQUEST', payloadCreators.request, metaCreators.request),
  success: createAction(type + '::SUCCESS', payloadCreators.success, metaCreators.success),
});

export default prefix => (type, ...args) => createAsyncAction(`${prefix}:${type}`, ...args);
