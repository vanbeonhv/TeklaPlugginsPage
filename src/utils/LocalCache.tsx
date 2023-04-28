export const saveAccessTokenToCookie = (accessToken: string): void => {
  document.cookie = `accessToken=${accessToken}`;
};

export const saveUserIdToLocal = (currentUserId: string): void => {
  localStorage.setItem('currentUserId', currentUserId);
};

export const getDataFromLocal = (field: string) => {
  const storedUserId = localStorage.getItem(field);
  let parsedUserId: string;
  if (storedUserId) {
    parsedUserId = JSON.parse(storedUserId);
    return parsedUserId;
  } else {
    return null;
  }
};
