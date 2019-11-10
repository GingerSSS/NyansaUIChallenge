# Nyansa UI Challenge
   This is the take home project from Nyansa

### Note :
   The code is revised according to
      origin code: https://github.com/Nyansa/interview-app-devmgr
      ref : https://sites.google.com/a/nyansa.com/nyansa-programming-exercise-angular/

## 1. Getting Started

   To get you started you can simply clone the interview-app-devmgr repository and install the dependencies:

### (1) Prerequisites

   You need git to clone the interview-app-devmgr repository. You can get it from
[http://git-scm.com/](http://git-scm.com/).

   We also use a number of node.js tools to initialize and test interview-app-devmgr. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### (2) Clone interview-app-devmgr

   Clone the interview-app-devmgr repository using [git][git]:

```
git clone https://github.com/GingerSSS/NyansaUIChallenge.git
cd NyansaUIChallenge/interview-app-devmgr
```

### (3) Install Dependencies

   We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

   Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

* Note that the `bower_components` folder would normally be installed in the root folder but
interview-app-devmgr changes this location through the `.bowerrc` file.  Putting it in the src folder makes
it easier to serve the files by a webserver.*

### (4) Run the Application

   We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000`.

## 2. Using the Web App
   Note: Please clear the browsing data first!

### (1) Display top 5 CPU, Memory, TX and RX devices

#### Requirement: 
   Above the device table in the dashboard, we'd like to display the top 5 cpu, memory, TX and RX devices. Please create 4 separate panels that have the top 5 devices (highest usage first) in each of the four categories. For each device, please display the ip, the owner, and the field that is sorted. You must employ the DRY principle when creating these panels; JS frameworks have reusable Components/Directives for a reason.

#### To Use:
   No need personal operation, the 4 seperate panels automatically show above the devices table.

### (2) Enable editing of the owner's name

#### Requirement: 
   Update the device list UI to enable editing of the owner's name. Please make sure that if that device is displayed anywhere else on the screen the owners name should also be updated. Please refrain from using plugins or other's code.

#### To Use:
   Single click the owner's name you want to revise, input the new name you want to use, then click any where blank area in the page. 
   The corresponding owner's name will automatically update on any other fields using the same variable.

Eg: 
   * Single click the owner: Mary Morales,
   * Input new name: Jingjie Sheng, (No enter keyboard click!)
   * Click the black area in the page.
   * The corresponding data change: 
        * CPU: #5
        * Memory: #2
        * TX: #1
        * RX: #1

## 3. Structure
### (1) Tech Stack
   * Front-end: Augular.js
   * Back-end: Node.js
### (2) Project Structure
src file is the main function file the project structure list as follow:
   - src
      - app
         - app.js
         - dashboard
         - common
            -
      - assets
         - stylesheets
            - 
      - index.html
 what are the important files, and any additional information that can facilitate the review of the code.
