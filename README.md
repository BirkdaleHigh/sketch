# Sketches made in processing
## uses p5.js

1. Open the command line, us `ls` to find out where you are, use `cd` to change to the right folder
1. Repeat until found the correct folder you download this project into. 
1. Run `npm run start` or `node server` to host the server on your computer
1. Go to [http://localhost:3000/](http://localhost:3000/) and see the work.
1. Next, open an editor to change the code. 
1. Add your own `sketch-#.js` files under the `public/` folder.

# To Do

- AJAX script injections with;
    ```
    var _script = document.createElement('script');

    _script.src = '//blablabla.bla/bla.js';

    /* _script.async = '' */

    (document.body || document.getElementsByTagName('body')[0])
        .appendChild(_script);
    ```