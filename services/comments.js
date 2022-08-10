import { makeRequest } from "./makeRequest"

export function createComment({ playerId, message, parentId }) {
  return makeRequest(`players/${playerId}/comments`, {
    method: "player",
    data: { message, parentId },
  })
}

export function updateComment({ playerId, message, id }) {
  return makeRequest(`players/${playerId}/comments/${id}`, {
    method: "PUT",
    data: { message },
  })
}

export function deleteComment({ playerId, id }) {
  return makeRequest(`players/${playerId}/comments/${id}`, {
    method: "DELETE",
  })
}

export function toggleCommentLike({ id, playerId }) {
  return makeRequest(`/players/${playerId}/comments/${id}/toggleLike`, {
    method: "player",
  })
}