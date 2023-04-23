export const saveAccessTokenToCookie = (accessToken: string): void => {
  document.cookie = `accessToken=${accessToken}`;
};

export const saveUserIdToLocal = (currentUserId: string): void => {
  localStorage.setItem('currentUserId', currentUserId);
};
