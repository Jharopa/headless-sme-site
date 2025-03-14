import { FaustHooks } from '@faustwp/core';

export class GQLEndpointPlugin {
  /**
   * @param {FaustHooks} hooks
   */
  apply(hooks) {
    const { addAction, addFilter } = hooks;

    addFilter(
      'graphqlEndpoint',
      'faust',
      (graphqlEndpoint, context) => `${context.wpUrl}/sadge`
    );
  }
}
