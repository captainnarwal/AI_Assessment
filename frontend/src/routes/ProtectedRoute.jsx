import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../redux/authSlice';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const userRoles = user?.roles || [];
  const hasAccess = userRoles.some((role) => allowedRoles.includes(role));

  return hasAccess ? <Outlet /> : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProtectedRoute;
