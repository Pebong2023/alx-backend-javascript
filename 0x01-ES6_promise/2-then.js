export default function handleResponseFromAPI(promise) {
  return promise
    .then(response => {
      console.log("Got a response from the API");
      return {
        status: response.status,
        body: response.body,
      };
    })
    .catch(error => {
      console.log("Got an error from the API");
      throw new Error(error);
    });
}
