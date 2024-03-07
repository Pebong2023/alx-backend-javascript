export default function ngetResponseFromAPI() {
const myPromise = new Promise(resolve, reject) => {
//Simulating API response after a delay
setTimeout(() => {
// Simulating a succeeful API response
const responseData = {message: "API response recieved" };
resolve(responseData);

}, 200); // Simulate a delay of 2 seconds
});

return MyPromise;
}
