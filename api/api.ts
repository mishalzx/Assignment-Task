import axios from "axios";

export const post = async (
  url: string,
  token?: string | null,
  data = {},
  _config = {}
) => {
  const config: any = { ..._config };
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return axios
    .post(url, data, { ...config })
    .then((res: any) => {
      if (res.status) {
        const { data, status } = res;
        return { data, status };
      } else {
        return {
          status: 200,
          data: res,
        };
      }
    })
    .catch(({ response }: any) => {
      return response;
    });
};

export const put = async (
  url: string,
  token?: string | null,
  data = {},
  _config = {}
) => {
  const config: any = { ..._config };
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return axios
    .put(url, data, { ...config })
    .then((res: any) => {
      if (res.status) {
        const { data, status } = res;
        return { data, status };
      } else {
        return {
          status: 200,
          data: res,
        };
      }
    })
    .catch(({ response }) => {
      if (response.status === 400) {
        return response.data;
      }
      return response;
    });
};

export const get = async (
  url: string,
  token?: string | null,
  _config: any = {}
) => {
  const config: any = { ..._config };
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return await axios.get(url, { ...config }).then((res: any) => res.data);
};

export const _delete = async (
  url: string,
  token?: string | null,
  _config: any = {}
) => {
  const config: any = { ..._config };
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return await axios.delete(url, { ...config }).then((res: any) => res.data);
};
