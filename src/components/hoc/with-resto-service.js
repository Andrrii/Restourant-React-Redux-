import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
                <RestoServiceContext.Consumer> {/* Прив'язуєм контекст сюди */}
                    { // Render - фунція
                        (RestoService) => {
                            return <Wrapped {...props} RestoService={RestoService} /> 
                        }
                    }
                </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;