import { action } from 'mobx';
import { LOGIN_PAGE } from '../../constants/routes';

import { routing } from '../routing';

export class Redirecting {
    // @action redirectToMyStarPage(): void {
    //     routing.push(MY_STAR_PAGE);
    // }

    @action redirectToLoginPage(): void {
        routing.push(LOGIN_PAGE);
    }
}

export const redirecting = new Redirecting();
