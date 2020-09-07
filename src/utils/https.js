import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000
});

httpClient.interceptors.response.use(
  (response) => {
    // eslint-disable-next-line no-console
    console.log(response)
    return response;
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.error(`response in error: ${error}`);
    const {response} = error
    return response;
  }
);

export const isSuccessRequest = (code) => {
  return code >= 200 && code < 300;
}

export default httpClient;
