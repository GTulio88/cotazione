export const instance = axios.create({
	baseURL: "http://economia.awesomeapi.com.br/json/last/EUR-BRL",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	},
});
