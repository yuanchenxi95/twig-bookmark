import { RouterStore } from 'mobx-react-router';

import { routing } from './routing';
import { Redirecting, redirecting } from './redirecting';
import { Authentication, authentication } from './authentication';

export type MyStore = {
    routing: RouterStore;
    redirecting: Redirecting;
    authentication: Authentication;
};

export const stores: MyStore = {
    routing,
    redirecting,
    authentication,
};
