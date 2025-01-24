import apiClient from "../utils/api-client";

//제품id와 수량을 db에 저장
export function addToCartAPI(id, quantity) {
  return apiClient.post(`/cart/${id}`, { quantity });
}

//유저별로 저장된 카트정보를 가져오기
export function getCartAPI() {
  return apiClient.get("/cart");
}
//백엔드에 카트아이템삭제  patch는 업데이트에 사용(삭제,수정)
export function removeFromCartAPI(id) {
  return apiClient.patch(`/cart/remove/${id}`);
}
