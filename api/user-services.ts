import { get, post, put, _delete } from "./api";
const BASE_URL = "https://demo6396395.mockable.io";

export async function getmember(token?: string) {
  return get(`${BASE_URL}/prompts`, token);
}


export async function getboards(token?: string) {
  return get(`${BASE_URL}/bcf-boards`, token);
}