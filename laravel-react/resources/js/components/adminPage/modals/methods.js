import {useTranslation} from 'react-i18next';

export const textHeader = type => {
    const {t} = useTranslation('', {useSuspense: false});

    if (type) {
        return t('add');
    } else {
        return t('edit');
    }
};
