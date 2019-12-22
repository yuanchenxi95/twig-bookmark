import React from 'react';
import { inject, observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from 'antd';

import { translationKeys } from '../i18n';
import { MyStore } from '../stores';

interface HomePageProps {
    redirectToLoginPage: () => void;
}

function container(props: HomePageProps): React.ReactElement {
    const { redirectToLoginPage } = props;

    const { t } = useTranslation();
    const { homePage, login } = translationKeys;

    return (
        <div>
            <Typography.Title>{t(homePage)}</Typography.Title>
            <Button onClick={redirectToLoginPage}>{t(login)}</Button>
        </div>
    );
}

function injectFn(stores: MyStore): HomePageProps {
    const { redirecting } = stores;
    const { redirectToLoginPage } = redirecting;
    return {
        redirectToLoginPage,
    };
}

export const HomePage = inject(injectFn)(observer(container));
