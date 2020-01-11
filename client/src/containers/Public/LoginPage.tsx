import React from 'react';
import { inject, observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from 'antd';

import { translationKeys } from '../../i18n';
import { MyStore } from '../../stores';
import { setUserDataFnc } from '../../stores/authentication';
import {loginRequest} from '../../api/methods/authentication';
import {errorNotification} from '../../components/notification';

interface LoginPageProps {
    setUserData: setUserDataFnc;
}

function container(props: LoginPageProps): React.ReactElement {
    const { setUserData } = props;

    const { t } = useTranslation();
    const { login: loginKey } = translationKeys;

    console.log('hello');
    async function loginFnc() {
        try {
            const data = await loginRequest('hello', '1111');
        } catch (e) {
            errorNotification(e.message);
        }
    }

    return (
        <div>
            <Typography.Title>{t(loginKey)}</Typography.Title>
            <Button
                onClick={(e): void => {
                    e.preventDefault();
                    loginFnc();
                }}
            >
                {t(loginKey)}
            </Button>
        </div>
    );
}

function injectFn(stores: MyStore): LoginPageProps {
    const { authentication } = stores;
    const { setUserData } = authentication;
    return { setUserData };
}

export const LoginPage = inject(injectFn)(observer(container));
