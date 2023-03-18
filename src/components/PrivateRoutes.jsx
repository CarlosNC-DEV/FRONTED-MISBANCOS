import { Navigate ,Outlet} from 'react-router-dom';

const PrivateRoutes = () => {

    const isLogadding = localStorage.getItem("JWT_ASESOR");
    if(!isLogadding){
        return <Navigate to={'/'}/>
    }
    return (
        <Outlet/>
    );
}

export default PrivateRoutes;
