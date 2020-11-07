export function fetchPopularRepos (language) {
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`) 

  return fetch(endpoint) // make a request
    .then((res) => res.json()) // turn response into json
    .then((data) => {
      if(!data.items) { //if there are no item, something went wrong, throw error 
        throw new Error(data.message)
      }
      // Return array of items
      return data.items
    })
}