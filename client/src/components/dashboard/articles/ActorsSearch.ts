import axios from "axios"

function ActorsSearch(values: string) {
	const options = {
		method: "GET",
		url: "https://online-movie-database.p.rapidapi.com/auto-complete",
		params: { q: values },
		headers: {
			"X-RapidAPI-Key": "503e2e6f97msh87785bb419cd305p1c860ajsn2334a4a9dd7a",
			"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
		},
	}
	axios.request(options).then(response => console.log(response.data))
}
export default ActorsSearch
