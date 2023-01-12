import {PluginAdapter} from '@coyoapp/plugin-adapter';

export class DemoPlugin {
    constructor() {
        new PluginAdapter().init().then((data:any) => {
            const name = data.claims.ctx.userName;
            this.changeName(name);
            const debugelement = document.getElementById('info')!;
            debugelement.innerText = JSON.stringify(data);
        });

        const debugelement = document.getElementById('info')!;
        debugelement.innerText = "Loading";
    }

    private changeName(userName: string) {
        const nameElem = document.getElementById('userName')!;
        nameElem.innerText = userName;
    }
}