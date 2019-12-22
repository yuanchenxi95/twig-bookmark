import axios from 'axios';
import { observable, action, computed } from 'mobx';
import { fromPromise, FULFILLED, IPromiseBasedObservable } from 'mobx-utils';

import isNil from 'lodash-es/isNil';
import { UserData } from '../../types/stores';

// import { getAccessToken, setAccessToken } from '../../util/cookies';
// import { getGithubProfile } from '../../api/methods/authentication';

async function getData(): Promise<UserData> {
    await axios.get('https://api.myjson.com/bins/e54co');
    return {
        username: 'hello',
        xAccessToken: 'world',
    };
}

export class Authentication {
    @observable userData: IPromiseBasedObservable<UserData>;

    constructor() {
        // this.xAccessToken = getAccessToken();
    }

    @action.bound resetData(): void {
        this.userData = null;
    }

    @action.bound login(): void {
        this.userData = fromPromise(getData());
    }

    @computed get isLoggedIn(): boolean {
        return !isNil(this.userData) && this.userData.state === FULFILLED && !isNil(this.userData.value);
    }

    // @action async getGithubProfile() {
    //     self.loading = true;
    //     try {
    //         const { data } = await getGithubProfile(self.xAccessToken);
    //         const { username, accessToken } = data;
    //         self.username = username;
    //         self.githubAccessToken = accessToken;
    //     } catch (e) {
    //         self.error = e.message;
    //         self.setXAccessToken(null);
    //     }
    //     self.loading = false;
    // }
    //
    // @action setXAccessToken(token) {
    //     self.xAccessToken = token;
    //     setAccessToken(token);
    // }
    //
    // @action logOut() {
    //     self.setXAccessToken(null);
    // }
}

export const authentication = new Authentication();
