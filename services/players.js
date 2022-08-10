import { makeRequest } from "./makeRequest"

export function getPlayers() {
  return makeRequest("/players")
}

export function getPlayer(id) {
  return makeRequest(`/players/${id}`)
}