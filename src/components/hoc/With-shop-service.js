import React from 'react';
import ShopServiceContext from '../Shop-service-context/Shop-service-context';

const WithServiceContext = () => (Wrapped) => {
    return (props) => {
        return (
            <ShopServiceContext.Consumer>
                {
                    (ShopService) => {
                        return <Wrapped {...props} ShopService={ShopService} />
                    }
                }
            </ShopServiceContext.Consumer>
        )
    }
};

export default WithServiceContext;