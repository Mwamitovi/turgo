/**
 * A custom URL mapping function
 *
 * It maps front-end urls to the backend endpoints (Django REST Framework).
 * We check if a "resource" was mapped, and then call the corresponding endpoint.
 */
const mapURL = (urls: object, resource: string) =>
  /**
   * @param {Object} urls front-end URL(s), e.g. '{ providerusersview: "users" }'
   * @param {String} resource Name of the resource to fetch, e.g. 'users'
   * @returns {Object} { url, options } The HTTP request parameters
   */
  Object.prototype.hasOwnProperty.call(urls, resource) ? urls[resource] : null;

export default mapURL;
