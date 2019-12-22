import React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Route, Switch } from 'react-router';

import { FallbackPage } from '../FallbackPage';
import { MyStore } from '../../stores';
import { LOGIN_PAGE, MY_HOME_PAGE } from '../../constants/routes';
import { MyHomePage } from './MyHomePage';

interface ProtectedRoutePageProps {
    isLoggedIn: boolean;
}

function container(props: ProtectedRoutePageProps): React.ReactElement {
    const { isLoggedIn } = props;

    if (!isLoggedIn) {
        return <Redirect to={LOGIN_PAGE} />;
    }

    return (
        <div>
            <Switch>
                <Route exact path={MY_HOME_PAGE} component={MyHomePage} />
                <Route component={FallbackPage} />
            </Switch>
        </div>
    );
}

function injectFn(stores: MyStore): ProtectedRoutePageProps {
    const { authentication } = stores;
    const { isLoggedIn } = authentication;
    return { isLoggedIn };
}

export const ProtectedRoutePage = inject(injectFn)(observer(container));
