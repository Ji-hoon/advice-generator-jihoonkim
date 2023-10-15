export default async function fetchData (data) {
    const fetchResult = await fetch(data)
        .then( response => {
            if (!response.ok) {
                throw new Error(response.status);
            } else {
                return response.json();
            }
        })
        .catch( error => {
            console.log(error);
            return error;
        })
        
    return fetchResult;
}