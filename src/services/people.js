const URL_PEOPLE = 'https://swapi.dev/api/people/?page=';

const getPeople = async (current) => {
    const response = await fetch(URL_PEOPLE + current);
    return await response.json();
}

export default getPeople;
