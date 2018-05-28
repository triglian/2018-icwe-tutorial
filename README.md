# 2018-icwe-tutorial

# Todo

- [x] Check if we need SVG Injector
- [x] Check if we need the notes plugin
- [ ] Do we need mathjax?
- [ ] Clean up `bower.json` of dependencies that are not needed (SVG Injector?)
- [ ] in-presentation task guide

# Prerequisites

* Google Chrome (version > `56`)
    - Download [here](https://www.google.com/chrome/)
* [Node](https://nodejs.org/en/) (version > `8.0`) with npm
    - Windows: [https://nodesource.com/blog/installing-nodejs-tutorial-windows/](https://nodesource.com/blog/installing-nodejs-tutorial-windows/)
    - Linux/ macOS (with nvm): [https://gist.github.com/d2s/372b5943bce17b964a79](https://gist.github.com/d2s/372b5943bce17b964a79)
* [Polymer CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli)
    - Run in a terminal:  `npm install -g polymer-cli`

# Part #1 - Demo

# Tasks

## Task 1 - Download the tutorial files

1. Visit [https://github.com/triglian/2018-icwe-tutorial/archive/master.zip](https://github.com/triglian/2018-icwe-tutorial/archive/master.zip) to download the tutorial files locally.
1. Unzip the file to get a tutorial directory.

## Task 2 - Launch the skeleton presentation locally

1. Navigate into `<turorial_dir>/skeleton/`, where `<turorial_dir>` is the directory you created in _Task 1_.
1.  Run in a terminal:  `polymer serve`
1.  Copy paste the "applications" URL in your browser window (for example: ` http://127.0.0.1:8081`).
1. Navigate the presentation to make sure it works

## Task 3 - Create you first ASQ exercise

In ASQ each exercise is represented using the `<asq-exercise>` tag. We will create an exercise that contains one simple text question. The simple text question is implemented using `<asq-text-input-q` element. All question types in ASQ end with the suffix `-q`.

1. Locate the second slide in `skeleton/index.html`. It is a `<section>` element with `id="task-3"`.
1. Copy paste the following snippet under the comment for _Task 3_  inside the `<section>` tags to create your first exercise:
```html
<asq-exercise>
    <asq-text-input-q id="ti-1" label="enter your name here">
        <asq-stem><h2>Enter your name</h2></asq-stem>
    </asq-text-input-q>
</asq-exercise>
```

## Task 4 - Add statistics for your question in a separate slide

Sometimes it's convenient to display statistics about a question type in a seperate slide. For `<asq-text-input-q>` questions we can do this using the `<asq-text-input-q-stats>` element. To indicate which `<asq-text-input-q>` we want to display statistics for we need to set the `for` attribute of `<asq-text-input-q>-stats` to the `id` of the `<asq-text-input-q>` target element.

1. Locate the third slide in `skeleton/index.html`. It is a `<section>` element with `id="task-4"`.
1. Copy paste the following snippet under the comment for _Task 4_  inside the `<section>` tags:
```html
<asq-text-input-q-stats for="ti-1"></asq-text-input-q-stats>
```


## Task n - Create an account in ASQ

1. Visit ASQ at [http://dev.asq.inf.usi.ch/](http://dev.asq.inf.usi.ch/)
1. [Register](https://dev.asq.inf.usi.ch/signup)
1.  [login](https://dev.asq.inf.usi.ch/login)

## Task n - Upload your presentation in ASQ

1. Make sure you are logged in in ASQ. 
1. Zip the _contents_ of the `skeleton/` directory. _NOT_ the skeleton directory itself
1. Go to the [uploads](https://dev.asq.inf.usi.ch/upload/) page.
1. Drag and drop the zip file
1. Give a name to your presentation
1. Click Upload
