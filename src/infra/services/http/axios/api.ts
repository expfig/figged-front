/**
 * IMPORTS
 */

import Axios, { type AxiosRequestConfig } from "axios";
import { configAxios } from "../../../../config/axios/config-axios";

// instància do axios
const createAxiosInstance = () => {
	// configuração do  axios
	const instance = Axios.create(configAxios);

	// setando token para todas as requisiç��es feita com axios
	// setando token para todas as requisiç��es feita com axios
	instance.interceptors.request.use((value: AxiosRequestConfig | any) => {
		value.headers = {
			Authorization: `Token ${"ec4c56361ddbb8c058be23575e8bb7cff585c2c9"}`,
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
		};

		return value;
	});

	instance.interceptors.response.use(
		// caso aconteça algum error com a requisição o axios vai lançar o error
		(value: AxiosRequestConfig | any) => {
			if (value.data?.errors && value.data?.errors.length) {
				throw new Error(value.data?.errors);
			} else {
				return value;
			}
		},

		// Validando quais tipos de errors o axios está retornando
		async (error: any) => {
			// usuário está sem internet
			if (error?.message === "Network Error") {
				throw new Error(
					"Sem conexão com a internet, tente novamente mais tarde!"
				);
			}

			// servidor demorando muito para responder
			if (error.code === "ECONNABORTED") {
				throw new Error(
					"Nosso servidor demorou muito tempo para responder, tente novamente mais tarde!"
				);
			}

			// token expirado
			if (error?.response?.status === 401) {
				// get new token method
				throw new Error(
					"Usuário não possui autorização, tente novamente mais tarde!"
				);
			}

			// user não tem permissão para acessar endpoit
			if (error?.response?.status === 403) {
				throw new Error(error?.response?.data?.message);
			}

			// indica que o servidor não conseguiu processar a solicitação devido a informações inválidas enviadas pelo cliente.
			if (error?.response?.status === 400) {
				throw new Error(error?.response?.data?.message);
			}

			if (error?.response?.status === 422) {
				throw new Error(error?.response?.data?.message);
			}

			// qualquer outro error desconhecido iremos lançar
			if (error?.response?.data?.errors?.length) {
				throw new Error(error.response.data.errors[0]);
			}
			return error;
		}
	);

	return instance;
};

/**
 * EXPORTS
 */
export default {
	createAxiosInstance,
};
