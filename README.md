# For Developers only

First time:

**Step 1:**<br>
Open a command terminal and navigate to the directory where you want to keep the project.

Run the following command to clone the repo (copy and paste https or ssh from GitHub)

### `git clone https:...`

Note: Do not close the terminal yet, you will be using after step 2.

**Step 2:**<br>
Inside of your file explorer, you will need to navigate to the project directory called `cafe-ordering-app`.

Create a new file named `.env`

Copy and paste the contents of the `envFile.txt` file into the `.env` file.

Save and exit the file.

Note: `envFile.txt` will be given in the Microsoft Teams Chat under `Files`. This file should not be uploaded to GitHub or any other site since it contains our API keys. If someone else gets this they could use our API keys to access our database.

**Step 3:**<br>
Inside the command terminal, navigate to the project directory.

### `cd cafe-ordering-app`

Install dependencies

### `npm install` or if on mac `yarn install`

Note: It is best practice to run this command after every pull, due to updates that may have been made to the package.json file. You must be in the project directory `cafe-ordering-app` for this to work correctly.

**Step 4:**<br>
In the project directory `cafe-ordering-app`, to run the project locally:

### `npm start`

Note: this will bring up a browser window with the app running on `http://localhost:3000`. You must be in the project directory `cafe-ordering-app` for this to work correctly.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
