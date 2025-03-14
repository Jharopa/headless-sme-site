import { FaustHooks } from '@faustwp/core';

export class GQLEndpointPlugin {
  /**
   * @param {FaustHooks} hooks
   */
  apply(hooks) {
    const { _, addFilter } = hooks;

    addFilter('graphqlEndpoint', 'my-namespace', (graphqlEndpoint, context) => {
      return 'sadge';
    });
  }
}
