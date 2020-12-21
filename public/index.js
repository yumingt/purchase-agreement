/*
 * JS for client-side of purchase agreement form.
 */
"use strict";
(function() {

  window.addEventListener('load', init);

  /**
   * Set up event listeners to buttons. Checks if there is a previous game that can be resumed.
   */
  function init() {

  }

  /**
   * Creates and displays a descriptive server error message.
   * @param {object} err - Represents the error that occured while fetching
   * data from the server.
   */
  function handleError(err) {
    id("error").innerHTML = "";
    id("error").textContent = err;
  }

  /* --- HELPER FUNCTIONS --- */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
