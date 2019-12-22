import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { translationKeys, languages } from '../../i18n';
import { Person } from './Person';

export function AppContainer(): ReactElement {
    const { t, i18n } = useTranslation();

    async function changeLang(): Promise<void> {
        await i18n.changeLanguage(languages.zh);
    }

    return (
        <div>
            <Person />
            <Button onClick={changeLang}>Change</Button>
            {t(translationKeys.welcome)}
        </div>
    );
}
