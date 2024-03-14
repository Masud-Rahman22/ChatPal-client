import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../ContextApi/AuthProvider';
import Loading from '../components/Loading';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext)
    if (isLoading) {
        return <Loading />;
    }

    if (!isLoading && !user?.email) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;