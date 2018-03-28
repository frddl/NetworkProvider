
# Network Provider

Network Provider is an Ionic3-based provider that detects the network change in application and notifies the user with an alert.

  - Import the provider in `app.module` and `app.component`
  - Call the `networkDetect()` function in `app.component` constructor
  - See the magic!     
       
---
### Installation
Step 1. Install the `@ionic-native/network` and create a `network` provider.

*Inside of the project folder:*
`npm install @ionic-native/network --save`
`ionic g provider network`

Step 2. Replace the `providers/network` folder with the one from repository.  

Step 3. Add the provider to a `app.module` and `app.component` and call it in the `constructor`.

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
