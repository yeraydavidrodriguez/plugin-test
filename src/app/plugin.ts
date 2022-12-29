import {PluginAdapter} from '@coyoapp/plugin-adapter';

export class DemoPlugin {
    constructor() {
        new PluginAdapter().init().then((data:any) => {
            const name = data['claims.ctx.userName'];
            console.log("----------");
            console.log(JSON.stringify(data));
            console.log("==========");
            console.log(JSON.stringify(data.claims.ctx.userName));
            console.log("----------");
            this.changeName(name);
        });
    }

    private changeName(userName: string) {
        const nameElem = document.getElementById('userName')!;
        nameElem.innerText = userName;
    }
}