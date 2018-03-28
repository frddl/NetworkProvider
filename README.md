# Network Provider

Network Provider is an Ionic3-based provider that detects the network change in application and notifies the user with an alert.

  - Download and put the `network` folder
  - Import the provider in `app.module` and `app.component`
  - Call the `networkDetect()` function in `app.component` constructor
  - See the magic!     
       
---
### Installation

*app.module.ts*

```ts
import { Network } from '@ionic-native/network';
import { NetworkProvider } from '../providers/network/network';

@NgModule({
  ...
  providers: [
    ...
    Network,
    NetworkProvider,
  ],
})
```

*app.component.ts*

```ts
import { NetworkProvider } from '../providers/network/network';

@Component({
    templateUrl: "app.html"
})
class MyApp {
    constructor(network: NetworkProvider) {
        ...
        network.detectNetwork();
        ....
    }
    ...
}
```

### Todos

 - Add Network Detection on first run of the application
 - Add screenshots to README

License
----

MIT
