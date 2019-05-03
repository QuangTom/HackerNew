
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */

function parseJSON(response) {
    return response.json();
  }
/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
    console.log('checkStatus',response.data);
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
    


const urlGetNews = 'https://api.myjson.com/bins/tsy4w';
const urlGetSingleNew = 'https://api.myjson.com/bins/kjklc';

function getNewsFromApi() {
    return fetch(urlGetNews)
      .then(checkStatus)
      .then((resp) => parseJSON(resp))
      .then(news => news)
      .catch((error) => {
          console.error(error);
      });
  }

function getSingleNewFromApi(){
    return fetch(urlGetSingleNew)
      .then(checkStatus)
      .then((resp) => parseJSON(resp))
      .then(news2 => news2)
      .catch((error) => {
      console.error(error);
  });
}
  
export const Api = {getNewsFromApi}
export const Api2 = {getSingleNewFromApi}  
