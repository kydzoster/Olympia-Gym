![Demo](https://github.com/kydzoster/Olympia-Gym/blob/master/assets/images/3prbl6.gif)

#### **[Live Site](https://kydzoster.github.io/Olympia-Gym/)**

# Olympia Gym

This website was created for my Second Milestone project for Code Institute:

I chose to build this project as an example website for my local Gym, it serves purely as what I can create for them if they will decide to hire me.

Despite my limited knowledge in website building they liked my page and they are happy to work with me.

## UX

#### USER STORIES

- Users are able to scroll up and down or use navigation menus for contents they are interested.
- Users are able to open links to facebook and instagram, which will open in separate tab..
- Users are able to contact or book a tour using a contact us section.
- Users are able to see a location of a gym by zooming in on a google map installed next to contact section.
- Users are able to have a BMI check in Metric and Imperial style for both European and British members of a gym.

#### FRAMEWORK

- **Bootstrap**: I prefer to use Bootstrap as it is easy and have consistency. It is supported by vanilla CSS and javaScript.

#### COLOR SCHEME

- The main colour for website is Yellow and Black as they are Olympia Gym colours. background colour is linear-gradient, to give a website better aesthetics colour wise (subjective view).


#### MOCKUPS
These are not broken images, they are pdf files, you can click on them and you will be directed to: assets > images > Mockup.
![PC](https://github.com/kydzoster/Olympia-Gym/blob/master/assets/images/Mockup/New%20Project%201.pdf)
![Mobile](https://github.com/kydzoster/Olympia-Gym/blob/master/assets/images/Mockup/New%20Project%202.pdf)

## FEATURES

#### JavaScript

For this project to pass I had to use JavaScript. There are in total **5** JavaScript files in js folder. 

- **maps.js** its function is to pinpoint Olympia Gym exact location with an label "O".
- **contact.js** allows a user to contact Olympia Gym, currently all messages will be sent to my personal email. Its configured to receive a message and who has sent it and how to contact sender through their email.
- **tabs.js** this is a simple tabs system, to access it user has to click on BMI button and here they will be met with 2 tabs, under each tab there will be content which consists of another JavaScript file for BMI calculation.
- **bmi.js** and **bmiuk.js** - are calculation functions for calculating BMI, bmi.js uses Metric system and bmiuk.js uses Imperial system.

#### FEATURES TO BE IMPLEMENTED

- Deploy Live website and secure it with protection (either buy a domain or build a server on one of the Olympia Gym computers).

- Implement Direct Debit; online payment system through website.

- Implement Gym Staff online-offline system for specific staff member who is working at this moment.

- These could both potentially be accomplished by further advancing in my Full-Stack studies.

- Gym members testimony/comments for each staff member or gym in general.

## TECHNOLOGIES USED

Brief overview of the languages, frameworks, and other tools I've used on this project:

- [VSCode]
- [HTML5]
- [CSS3]
- [Bootstrap]
- [JavaScript]
- [jQuery]
- [EmailJs API]
- [Google maps API]
- [Font Awesome]

## TESTING

#### TEST MATRIX

I borrowed [testing matrix](https://github.com/TravelTimN/ci-milestone02-ifd/blob/master/testing/testing-ci-milestone02-ifd.xlsx) from https://github.com/TravelTimN

![Testing Matrix](https://github.com/TravelTimN/ci-milestone02-ifd/blob/master/testing/testing-ci-milestone02-ifd.png)

- [HTML Validation](https://validator.w3.org/): No errors or warnings found.
- [CSS Validation](https://jigsaw.w3.org/css-validator/): No errors or warnings found.
- [JavaScript Validation](http://beautifytools.com/javascript-validator.php): Total error count: (20), however, they are not affecting produced results on website.
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/).

#### Issues

- In mobile version, I cannot make navbar to close after I have clicked on a link.

- In BMI I cannot hide scrollbar and be able to scroll up and down.

#### COMPATIBILITY

To ensure a broad range of users can successfully use this site, I tested it across the 4 major browsers in both desktop and mobile configuration.

- Chrome
- Edge
- Firefox
- Opera

## DEPLOYMENT

This particular project does not require any local deployment.

Deployment and source control was entirely done via GitHub. My repository can be found here:

- **Repo: [https://github.com/kydzoster/Olympia-Gym](https://github.com/kydzoster/Olympia-Gym)**

I've published the source code built from the *master branch* using **GitHub Pages**.

The live site can be found here:

- **GH Pages: [https://kydzoster.github.io/Olympia-Gym/](https://kydzoster.github.io/Olympia-Gym/)**

There are no difference between the deployed version and the development version.

## CREDITS

#### CONTENT

Website uses Single page.

Fixed buttons at the left side of the page:

- Facebook
- Instagram

Nav bar consists of 6 clickable buttons from which:

- Olympia Gym (Brand name) and Home returns to the top

- Services smooth scroll to Service section

- About Us opens 3 clickable under-sections:
	- About Us
	- Meet our Team
	- Gallery

- Contact Us will slide down to contact section with google map and contact form

- BMI which will open a popup windows for calculating your BMI with 2 tabs:
	- Metric system
	- Imperial system

#### MEDIA

- Hero page video is an actual Olympia Gym marketing video copied from their Facebook account, its replacement for mobile version is an image from one of the images also copied from Olympia Gym Facebook account. 

- The images used "Meet our Team" is free images from pexels.com. 

- Gallery contains images from Olympia Gym accounts on Facebook and Instagram.

- Facebook and Instagram icons on the left side of the screen uses FontAwesome icons.

#### ACKNOWLEDGEMENTS

- In this project i used a lot of Bootstrap and their free snippets.

- For the Gallery I used https://bootsnipp.com/snippets/ZXyEz by Monoxa ideas.

- https://codepen.io/imprakash/pen/GgNMXO

- I have also used Code Institute google map API and integrated in my project.