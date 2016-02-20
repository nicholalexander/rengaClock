#Renga Clock


##Overview
This was inspired by the amazing work of the students in BFS 2B and their teachers as they assembled a beautiful Renga poem matched to a clock.  Not wanting to loose it when they took it down from the display wall, I tried to translate it to a simple little website. 

The basic idea is that every time the hour changes, the corresponding poem changes.  This is simply done by setting each poem's filename to an hour in the 24 hour time cycle (0-23).  Then everytime the hour changes, we show the approrpiate photo.

The About us page has some description about the assignment and slide show of all the panels so that you don't have to wait until 2am to see the poem for 2am!

##Panels
The panels from the kids are just simple photos and are not currently processed to lower file size as they should be.

##Teaching
This is a very simple project and the javascript is minimal.  I think this is appropriate for 6th to 7th graders, no problem.  The main knowledge areas are HTML, CSS, and Javascript.  I am sure that there are a million very thoughtful ways to use this to invovle both the older kids and the younger producers of the art in an awesome cross disciplinary piece of work.

##Disclaimer
The javascript code is terrible.  Pretty much all the code is terrible.  Also, the site could be designed to look much nicer with the art work.

##Stack
A super basic [Yeoman](http://yeoman.io/) generated [webapp](https://github.com/yeoman/generator-webapp), deployed to Heroku.  

It uses a simple node server to serve the dist folder.  This is probably not the right way to do this.

The slideshow on the About page is a simple bootstrap carousel.  

##Requirements
1. git
2. heroku
3. node
4. npm

##Installation & Running Locally
1. `git clone git@github.com:nicholalexander/rengaClock.git`
2. `npm install`
3. `gulp serve`

##Deploying
###Via Heroku
1. Genearate the dist folder for production with `gulp`
2. `heroku create <app_name>`
3. `git push heroku master`

###Via [Surge](https://surge.sh/)
1. Ensure you have surge installed.  If not: `npm install -g surge`
2. `cd dist` and `surge`. (Love it!)
