# Hyattsville Watershed Implementation Project

Hyattsville municipal government would like to create a resource for their residents to refer to regarding watershed implementation to manage stormwater flooding and river pollution.  The city has conducted studies and implemented several management plans in the area, but would like to have this information also displayed on their website for residents to refer to. This plan will be especially valuable to the residents of Hyattsville after recent storms have flooded the city.

Our objective is to host educational infographics for Hyattsville residents that makes information regarding watershed issues and concerns in their city easily accessible and understandable.  Hyattsville will be one of the first municipalities to develop their own implementation plan.  Their plan will be based off of current Prince George’s County and Maryland state’s watershed implementation plans for the Chesapeake Bay area, and will be customized to fit their needs.

This repository houses the code used to display our website on our [Heroku](http://hyattsville-wip-infographs.herokuapp.com/), and it also includes the infographics that constitute our final deliverable to our client.  Currently the website is optimized to a 1280x800 screen, and was developed mainly for a Google Chrome browser.  Further improvements to design can be made by future developers, or the infographics and information can be copied and re-deployed by the Hyattsville IT department for their own website.

## Installation
If the Hyattsville IT department would like to copy over the infographics and the short descriptions, they are welcome to download the infographic images and copy the corresponding code directly from GitHub.  Otherwise, cloning the repository to the desktop is also an option.

To run locally after cloning the repository:
 - You need to have [Node](https://nodejs.org/en/download/) installed with a version of at least 13.2.0
 - Once installed, check your version of node using <code>node --version</code> in Terminal
 - Navigate to this repository on your local machine using Terminal
 - Run <code>npm install</code> to install dependencies
 - Run <code>npm start</code> to start the server
 - In your browser, type in <code>localhost:3000</code> in the address bar.  The page should then look like the website as seen on Heroku

However, you likely will not be able to update this repository.  This repository will not be updated by the current team, so you are encouraged to copy the code from this to your own GitHub.

### Heroku
Heroku is a platform used by this repository to serve the website.  If you would like to continue this set-up with your own GitHub repository, you need to first register for a [Heroku account](https://www.heroku.com/).  Following the site instructions, allow Heroku to access your GitHub repository.

Create an application:
1. "New" --> "Create new app" --> (**Note:** If you don't assign a name to your app, one will be generated for you.  This name will be a part of your URL) "Create app".
2. In your Deploy tab, select GitHub as your Deployment method.  Then, select your repository and your repo-name.
3. For ease of use, "Enable Automatic Deploys" if you are not using command line tools or the desktop Heroku app to develop.
4. Once automatic deploys are enabled, be sure to manually deploy your GitHub branch this first time by selecting your branch and clicking "Deploy Branch."
5. After the branch has finished deploying, you should be able to click "Open app" and see your web application.

With automatic deploys, once you push new code to your main branch, Heroku will automatically start building and processing your app.  Heroku updates after GitHub processes your latest changes.

## Common Errors
If your page is running nicely on localhost but will not be displayed on Heroku:
1. Your node modules may not be up to date.  Delete your "node_modules" folder and "package-lock.json".  Rerun <code>npm install</code>.  Run <code>npm start</code> and check to see if localhost is working.  Then, wait for your Heroku to finish deploying your latest update and check the website.  **If you edit package.json, you must repeat this step to properly update your "node_modules" and "package-lock.json"**
2. If you have edited the name of the folder holding your files (here, the folder name is "content"), make sure that change is reflected in "server.js" "app.use(express.static('content'));".  There is a strange bug with Heroku so that if you name the folder "pages", it will be unable to read your files.  To be safe, you can name the folder "content" or "public".

## How the Application Works
The structure of each page is written in a separate HTML file.  The infographics are embedded as image files on each page.  The pages also import a CSS stylesheet for basic formatting and text decoration.  Using server.js (written in JavaScript) and Node.js, Heroku and localhost are able to run the code to simulate a live website.  The map of Hyattsville was created by James Nicol using JavaScript map elements.

## Further Communication
Contact Jessica Tsai at <jtsai123@terpmail.umd.edu> for any other questions concerning this repository.
