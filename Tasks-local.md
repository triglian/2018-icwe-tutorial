# Tasks

## Task 1 - Download the tutorial files

1. Visit [https://github.com/triglian/2018-icwe-tutorial/archive/master.zip](https://github.com/triglian/2018-icwe-tutorial/archive/master.zip) to download the tutorial files locally.
1. Unzip the file to get a tutorial directory.

## Task 2 - Launch the skeleton presentation locally

1. Navigate into `<turorial_dir>/skeleton/`, where `<turorial_dir>` is the directory you created in _Task 1_.
1. Open `index.html` with your browser

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

## Task 5 - Create an account in ASQ

1. Visit ASQ at [http://dev.asq.inf.usi.ch/](http://dev.asq.inf.usi.ch/)
1. [Register](https://dev.asq.inf.usi.ch/signup)
1.  [login](https://dev.asq.inf.usi.ch/login)

## Task 6 - Upload your presentation in ASQ

1. Make sure you are logged in in ASQ. 
1. Zip the _contents_ of the `skeleton/` directory. _NOT_ the skeleton directory itself
1. Go to the [uploads](https://dev.asq.inf.usi.ch/upload/) page.
1. Drag and drop the zip file
1. Give a name to your presentation
1. Click Upload

## Task 7 - Experiment with other ASQ question types

ASQ supports 13 question types! 

1. Use the links provided in the slide with `id="many-question-types"` to access the documentation of the question type that you want to try. 
1. Locate the fifth slide in `skeleton/index.html`. It is a `<section>` element with `id="task-5"`.
1. Use the pertinent code from the documentation to create a question type the comment for _Task 4_  inside the `<section>` tags. __DO NOT__ forget to enclose your question type inside `<asq-exercise>` tags!

## Task 8 - Update a presentation using curl

1. Go on the presentations page of your account following the "My Presentations link"
2. Click on the upload icon <img src="./upload_icon.png" alt="Upload Icon" style="height: 40px; position:relative; top: 12px;"> of the presentation you want to update
3. Copy paste the curl command in your terminal and press ENTER.
4. When the upload is done refresh your live presentation page!

