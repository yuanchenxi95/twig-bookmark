import React from 'react';
import { inject, observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from 'antd';

import { translationKeys } from '../../i18n';
import { MyStore } from '../../stores';

interface LoginPageProps {
    login: () => void;
}

function container(props: LoginPageProps): React.ReactElement {
    const { login } = props;

    const { t } = useTranslation();
    const { login: loginKey } = translationKeys;

    return (
        <div>
            <Typography.Title>{t(loginKey)}</Typography.Title>
            <Button
                onClick={(e): void => {
                    e.preventDefault();
                    login();
                }}
            >
                {t(loginKey)}
            </Button>
        </div>
    );
}

function injectFn(stores: MyStore): LoginPageProps {
    const { authentication } = stores;
    const { login } = authentication;
    return { login };
}

export const LoginPage = inject(injectFn)(observer(container));
