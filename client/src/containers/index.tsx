import React, { ReactElement } from 'react';

import { RoutePage } from './RoutePage';

export function AppContainer(): ReactElement {
    return (
        <div className="container">
            <RoutePage />
        </div>
    );
}

export default AppContainer;
