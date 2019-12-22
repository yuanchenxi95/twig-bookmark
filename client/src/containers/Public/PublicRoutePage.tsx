import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Route, Switch } from 'react-router';

import { FallbackPage } from '../FallbackPage';
import { MyStore } from '../../stores';
import { LOGIN_PAGE, MY_HOME_PAGE } from '../../constants/routes';
import { LoginPage } from './LoginPage';

interface PublicRoutePageProps {
    isLoggedIn: boolean;
}

function container(props: PublicRoutePageProps): React.ReactElement {
    const { isLoggedIn } = props;

    if (isLoggedIn) {
        return <Redirect to={MY_HOME_PAGE} />;
    }

    return (
        <div>
            <Switch>
                <Route exact path={LOGIN_PAGE} component={LoginPage} />
                <Route component={FallbackPage} />
            </Switch>
        </div>
    );
}

function injectFn(stores: MyStore): PublicRoutePageProps {
    const { authentication } = stores;
    const { isLoggedIn } = authentication;
    return { isLoggedIn };
}

export const PublicRoutePage = inject(injectFn)(observer(container));
