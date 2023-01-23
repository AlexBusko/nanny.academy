import axios from "axios";

export function sendHttpRequestToSuiNode(url, dataMethod) {
  return axios({
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
      "Content-Security-Policy": "upgrade-insecure-requests;",
    },
    data: {
      jsonrpc: "2.0",
      method: dataMethod,
      id: 1,
    },
  }).then((response) => {
    return response.data;
  });
}
