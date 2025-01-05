import jwtDecode from 'jwt-decode';

export const getRoleFromToken = (token) => {
  if (!token) return null;
  const decoded = jwtDecode(token);
  return decoded.role || null;
};
