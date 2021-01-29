# Breathe

This project was created for my second Milestone Project with Code Institute in order to display my knowledge and understanding 
of HTML, CSS, Bootstrap, JavaScript and Jasmine Testing.

I wanted this project to be completely different from my MS1 and something that lots of people would use on a daily basis.

## Table of Contents
* [User Experience Design (UX)](#User-Experience)
    * [The Strategy Plane](#The-Strategy-Plane)
    * [User stories](#User-Stories)
    * [Design](#Design)
        * [Font](#Font)
        * [Colour Scheme](#Colour-Scheme)
        * [Logo](#Logo)
        * [Wireframes](#Wireframes)
* [Features](#Features)
    - [index.html Page](#index.html-Page)
    - [breathe.html Page](#breathe.html-Page)
    - [Modal](#Modal)
    - [Features Left to Implement](features-left-to-implement)
* [Technologies Used](#Technologies-Used)
* [Testing](#testing)
    - [Responsivity across devices](#responsivity-across-devices)
    

 * [Issues and Solutions](#issues-and-solutions)   
* [Deployment](#deployment)
    * [Initial Creation](#initial-creation)
    * [Deployment via GitHub](#deployment-via-github)
* [Credits](#credits)
    * [Content](#content)
    * [Media](#media)
    * [Acknowledgements](#acknowledgements)


## User Experience
 This website will target a wide range of people that are looking for different things from this website; some will want it for stres reduction, others to enhance their concentration and performance,
  while some may just want to take a few minutes to relax. The main focus of this site will be to get them started with their breathing exercise of choice so there won't be a lot of content to take 
  away from that.

### The Strategy Plane
This project was created to show the skills I have acquired in Javascript and jQuery since completing my MS1 and to provide all users a means of taking a time out from their hectic 
lives to focus on their breathing for a set amount of time.

The site will have different breathing techniques available to the users, each with a brief description of the practise and its benefits. This website will have a simple interface 
and will be easy for the user to interact with to make their selection.

After they choose their breathing method and the time they wish to practise for, they will begin and the counting for inhalation and exhalation will be displayed on the screen.

// Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.
### User Stories

- As a user, I want to understand the use of the website straight away.
- As a user, I want to be able to easily navigate throughout the site.
- As a user, I want to be informed about the breathing techniques before I pick the one I wish to practise.
- As a user, I want to decide when my practise starts.
- As a user, I want to be able to pause my practise.
- As a user, I want to decide how long I practise my breathing for.
- As a user, I want calming colours and images to help me relax.
- As a user, I want to be able to change my selection of breathing technique and/or timing even after my practise has begun.
- As a user, I want to see social media links so I can learn more about the company on a separate page.
- As a user, I want to control whether music is played or not during the breathing practise.

## Design
### Font 
Using the <a href="https://fontpair.co/">Font Pair</a> website, I chose two complimentary fonts; <a href="https://fonts.google.com/specimen/Asap">Asap</a> 
for the headings, and <a href="https://fonts.google.com/specimen/Roboto">Roboto</a> for the rest of the text.

### Colour Scheme
The colours used in the website will be #F3F3F3 (white), #202020 (black), #3C403D (brown grey), #a3dcbe (green cyan) and #DADED4 (Tanly)

### Logo
Using the colour #a3dcbe and the font Roboto with font-weight 800, I created the font logo "Breathe". <br> 
![Breathe Logo](assets/images/logo/site-logo.PNG)

### Wireframes 
Using <a href="https://balsamiq.com/">Balsamiq</a>, I created my wireframes for my website. 


![index.html wireframe for Desktop](assets/images/wireframes/index.html-Desktop.png)
![index.html wireframe for mobile](assets/images/wireframes/index.html-Mobile.png)

![Modal](assets/images/wireframes/Modal.png)

![breathe.html wireframe for Desktop](assets/images/wireframes/breathe.html-Desktop.png)
![breathe.html wireframe for mobile](assets/images/wireframes/breathe.html-Mobile.png)

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features
### index.html Page
- Transparent header containing site logo on top Left corner
- Hero image taking up 100vh and 100% of the width
- Transparent jumbotron in the centre of the hero image with text and button leading to breathe.html page 
- Under the hero image, heading and three text areas detailing the different breathing practises 
- An image in the breathing techniques container
- Footer to include social media links to open in separate tab

### breathe.html Page
- Site logo which contains an anchor tag to the index.html page
- Circle with breathing prompts
- Play/ stop button in the circle to control the breathing exercise
- Settings button to bring you to modal box

 ### Modal
- Modal content to include radio buttons to make choice of technique
- Fourth radio button is custom choice which when selected gives drop down range sliders for inhale, hold, exhale, hold
- Modal content to include submit button to start breathing exercise on breathe.html page
- Modal to include "exit" button to return to breathe.html page

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML5](https://en.wikipedia.org/wiki/HTML5) 
    - The project uses **HTML** as the main language for structuring the content
- [CSS3](https://en.wikipedia.org/wiki/CSS) 
    - The project uses **CSS** for styling the sites content
- [Javascript](https://www.javascript.com/)
    - The project uses **Javascript** to control the behaviour of the site
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [GitHub](https://github.com/) 
    - This is the hosting site where I first created the repository for this webpage and also where the live site is deployed from 
- [Git](https://git-scm.com/) 
    - This is the version control software used where can I commit and push the updated information to the hosting website GitHub
- [Bootstrap](https://getbootstrap.com/) 
    - This was used Bootstrap to help in the design and layout of the website in conjunction with HTML, CSS and Javascript
- [Font Awesome](https://fontawesome.com/) 
    - This was used to collect the social media icons for this site
- [Balsamiq](https://balsamiq.com/) 
    - This was used to create my rough wireframes
- [Google Fonts](https://fonts.google.com/) 
    - This was used to import the two fonts for this site, Asap and Roboto
- [Free Logo Design](https://www.freelogodesign.org/) 
    - This was used to create the site logo
- [Font Pair](https://fontpair.co/) 
    - This was used to choose complementary fonts
- [Tiny JPG](https://tinyjpg.com/) 
    - This was used this to compress my images

## Testing

### Responsivity across devices
- I checked the site across [Google Chrome](https://www.google.com/intl/en_ie/chrome/), [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/), [Safari](https://www.apple.com/safari/) 
and [Opera](https://www.opera.com/) and all pages were completely responsive  with the layout remaining intact, with the exception of [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/) where the button in the 
jumbotron appeared elongated.
- Using [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools), (to open I right-clicked anywhere on my website and clicked "Inspect" or clicked "F12" on the keyboard), I ran my site in mobile/tablet display 
across the following devices: Galaxy Note 3, Galaxy S III, Moto G4, iPhone 4, Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5/SE, iPhone 6/7/8, iPhone 6/7/8 Plus, iPhone X, iPad, iPad Pro. Everything 
ran normally on these devices. I also sent my site to some friends and family to open on their phones and nobody had any issues.


## Issues and Solutions


## Deployment

### Initial Creation
Breathe was first created by completing the following steps on GitHub:
1. Open [Github](https://github.com/) page up in browser
2. Log in using your username and password
3. Click the "New" green button to the left-hand side repository section
4. Click template dropdown menu and select the "Code Institute Full Template"
5. Enter name of project "breathe-MS2"
6. Click "Create repository"
7. Click the green "Gitpod" button ONCE to redirect to the Gitpod workspace
8. Open via [Gitpod Workspaces](https://gitpod.io/workspaces/) only from then on

Throughout development, three primary commands were used with the CLI [Git](https://git-scm.com/) and were as follows :

- "git add" followed by the file name you wish to stage or "git add ." stages all unstaged files
- "git commit -m" followed by a detailed comprehensive comment pertaining to the changes made since the previous commit
- "git push" makes all changes visible on the GitHub Repo

### Deployment via GitHub
1. Open [Github](https://github.com/) page up in browser
2. Log in using your username and password
3. Select "shielh/breathe-MS2" from repositories displayed on left-hand side of screen
4. Click "settings", the last option displayed in the navigation menu
5. Scroll down until you reach "GitHub Pages" section
6. Select "Master Branch" in the dropdown under the Source heading
7. Finally, click to confirm my selection
8. A live version of Breathe is now live on Github [here](https://shielh.github.io/breathe-MS2/)



## Credits

### Content
- The setInteral() and clearInterval() functions were created with the help of this [YouTube tutorial](https://www.youtube.com/watch?v=ubLC1JxMqfY).
- The custom slider was created with the guidance of this [YouTube tutorial](https://www.youtube.com/watch?v=BrpiNUf2XCk).

### Media
- The photos used on this site were obtained from [Unsplash](https://unsplash.com/).

### Acknowledgements
- 