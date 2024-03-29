import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGa from 'react-ga'

const RouteChangeTracker = () => {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            // 환경 변수 사용
            ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
        }
        setInitialized(true);
    }, [])

    useEffect(() => {
        if (initialized) {
            ReactGa.pageview(location.pathname + location.search)
        }
    }, [initialized, location]);
}

export default RouteChangeTracker;