import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { translationKeys, languages } from '../i18n';

export function AppContainer(): ReactElement {
    const { t, i18n } = useTranslation();

    function changeLang() {
        i18n.changeLanguage(languages.zh).then(res => {
            console.log(i18n.language);
            console.log(i18n.languages);
            console.log(t(translationKeys.welcome));
        });
    }
    return (
        <div>
            <Button onClick={changeLang}>Change</Button>
            {t(translationKeys.welcome)}
        </div>
    );
}
