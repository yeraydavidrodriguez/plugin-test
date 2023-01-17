import {PluginAdapter} from '@coyoapp/plugin-adapter';

export class DemoPlugin {
    constructor() {
        new PluginAdapter().init().then((data:any) => {
            const name = data.claims.ctx.userName;
            this.changeName(name);
            const debugelement = document.getElementById('info')!;
            debugelement.innerText = '---'+JSON.stringify(data)+'---';
        });

        document.getElementById('boton')?.addEventListener('click', (e) => {
            parent.postMessage({iss: "4de59b9c-211b-4b38-bea8-9b9bf38ad9de-3d53c666-6f61-4a61-bb4c-232ddd97bb76", 
                               sub: 'setHeight', height: '120'}, "*")
        })

        const debugelement = document.getElementById('info')!;
        debugelement.innerText = "Loading";
    }



    private changeName(userName: string) {
        const nameElem = document.getElementById('userName')!;
        nameElem.innerText = userName;
    }
}