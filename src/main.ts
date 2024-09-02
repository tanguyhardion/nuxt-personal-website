import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');

/*
To deploy to gh-pages
```
npm run build
git add dist && git commit -m "deploy to gh-pages"
git subtree push --prefix dist origin gh-pages
```
*/