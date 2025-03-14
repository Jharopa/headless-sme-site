import { setConfig } from '@faustwp/core';
import templates from './wp-templates';
import possibleTypes from './possibleTypes.json';
import { GQLEndpointPlugin } from './plugins/graphql-endpoint';

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates,
  plugins: [new GQLEndpointPlugin()],
  possibleTypes
});
