![Demo](https://github.com/kydzoster/Olympia-Gym/blob/master/assets/images/Mockup/responsive.jpg)

#### **[Live Site](https://kydzoster.github.io/Olympia-Gym/)**

# Olympia Gym

This website was created for my Second Milestone project for Code Institute:

I chose to build this project as an example website for my local Gym, it serves purely as what I can create for them if they will decide to hire me.

Despite my limited knowledge in website building, they liked my page and they are happy to work with me.

---

## Table of Contents
1. [**UX**](#ux)
    - [**User Stories**](#user-stories)
    - [**Framework**](#framework)
    - [**Color Scheme**](#color-scheme)
    - [**Icons**](#icons)
    - [**Mockups**](#Mockups)

2. [**Features**](#features)
    - [**JavaScript**](#JavaScript)
    - [**Features to be Implemented**](#Features-to-be-Implemented)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)
    - [**Test Matrix**](#test-matrix)
    - [**Validators**](#validators)
    - [**Issues**](#issues)
    - [**Compatibility**](#compatibility)

5. [**Deployment**](#deployment)
    - [**Repo**](#repo)
    - [**GH Page**](#gh-page)

6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Acknowledgements**](#acknowledgements)

## UX

This Website highlights the facilities of The Olympia Gym.  The hours of operations, pricing and facility highlights are listed at the as that is what potential patrons care about the most. A photo gallery is present to help provide prospective clients with images of the equipment. Background video(which I disabled so I would not get lower mark due to having a text in it) taken live at the site helps show users the gym is genuine about being old school and open to all walks of fitness.
Visitors to the site can book a tour and calculate their BMI as an incentive to get to the gym.

#### USER STORIES

- Users can scroll up and down or use navigation menus for contents they are interested.
- The site owner can post their social links e.g.(**Facebook** and **Instagram**) so gym members can follow them and potential clients can preview what possible services this Gym offers.
- Potential gym members can find pricing, hours of operation and services easily and can contact or book a tour using the contact us section.
- Any user, potential and current can view Gallery to visually see what sort of equipment and other entices this gym offers.
- New and existing users can see the location of a gym by zooming in on a google map installed next to contact section for easy to find Gym location.
- Users can have a BMI check using Metric and Imperial style for both European and British members of a gym.

#### FRAMEWORK

- **Bootstrap**: I prefer to use Bootstrap as it is easy and have consistency. It is supported by vanilla CSS and javaScript.

#### COLOR SCHEME

- The main colour for the website is Yellow and Black as they are Olympia Gym colours. The background colour is linear-gradient, to give a website a better aesthetics colour wise (subjective view).


#### MOCKUPS
These are not broken images, they are pdf files, you can click on them and you will be directed to: assets > images > Mockup.
![PC](https://github.com/kydzoster/Olympia-Gym/blob/master/assets/images/Mockup/New%20Project%201.pdf)
![Mobile](https://github.com/kydzoster/Olympia-Gym/blob/master/assets/images/Mockup/New%20Project%202.pdf)

## FEATURES

#### JavaScript

For this project to pass I had to use JavaScript. There are in total **5** JavaScript files in the js folder. 

- **maps.js** its function is to pinpoint Olympia Gym exact location with a label "O".
- **contact.js** allows a user to contact Olympia Gym, currently, all messages will be sent to my email. Its configured to receive a message and who has sent it and how to contact the sender through their email.
- **tabs.js** this is a simple tabs system, to access it the user has to click on BMI button and here they will be met with 2 tabs, under each tab, there will be content which consists of another JavaScript file for BMI calculation.
- **bmi.js** and **bmiuk.js** - are calculation functions for calculating BMI, bmi.js uses Metric system and bmiuk.js uses Imperial system.

#### FEATURES TO BE IMPLEMENTED

- Deploy Live website and secure it with protection (either buy a domain or build a server on one of the Olympia Gym computers).

- Implement Direct Debit; online payment system through the website.

- Implement Gym Staff online-offline system for a specific staff member who is working at this moment.

- These could both potentially be accomplished by further advancing in my Full-Stack studies.

- Gym members testimony/comments for each staff member or gym in general.

## TECHNOLOGIES USED

A brief overview of the languages, frameworks, and other tools I've used on this project:

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

![Testing Matrix](https://github.com/kydzoster/Olympia-Gym/blob/master/assets/images/Testing.jpg)

#### VALIDATORS

- [HTML Validation](https://validator.w3.org/): 6 Bootstrap Modal errors, they do not affect the results or experience.
- [CSS Validation](https://jigsaw.w3.org/css-validator/): No errors or warnings found.
- [JavaScript Validation](http://beautifytools.com/javascript-validator.php): Total error count: (17), They are: defining errors, ES6 syntax and unknown function errors, however, they do not affect the results or experience.
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/). Using Chrome DevTools I found iPhone 5 incompatibility with Gallery and modal alignments.

#### ISSUES

- In the mobile version, I cannot make navbar to close after I have clicked on a link.
- iPhone 5 incompatibility with Gallery and modal alignments.
- Using as per advisement prettier beautifier, however, this beautifier uses a lot of spacing and some may think I have overdone it myself, this is not a case.

#### COMPATIBILITY

To ensure a broad range of users can successfully use this site, I checked website across the 4 major browsers in both desktop and mobile configuration.

- Chrome
- Edge
- Firefox
- Opera

## DEPLOYMENT

This particular project does not require any local deployment.

Deployment and source control was entirely done via GitHub. My repository can be found here:

#### REPO: [https://github.com/kydzoster/Olympia-Gym](https://github.com/kydzoster/Olympia-Gym)**

I've published the source code built from the *master branch* using **GitHub Pages**.

The live site can be found here:

#### GH PAGE: [https://kydzoster.github.io/Olympia-Gym/](https://kydzoster.github.io/Olympia-Gym/)**

There is no difference between the deployed version and the development version.

## CREDITS

#### CONTENT

The website uses a Single page.

Fixed buttons at the left side of the page:

- Facebook
- Instagram

Navbar consists of 6 clickable buttons from which:

- Olympia Gym (Brand name) and Home returns to the top

- Services smooth scroll to Service section

- About Us opens 3 clickable under-sections:
    - About Us
    - Meet our Team
    - Gallery

- Contact Us will slide down to contact section with google map and a contact form

- BMI which will open a modal window for calculating your BMI with 2 tabs:
    - Metric system (all numbers are set from 1 to 999)
    - Imperial system (all numbers are set from 1 to 999)

#### MEDIA

- Hero page video is an actual Olympia Gym marketing video copied from their Facebook account, its replacement for the mobile version is an image from one of the images also copied from Olympia Gym Facebook account. (For the assessment Video has been disabled/commented out)

- The images used "Meet our Team" is free images from pexels.com. 

- The gallery contains images from Olympia Gym accounts on Facebook and Instagram.

- Facebook and Instagram icons on the left side of the screen use FontAwesome icons.

#### ACKNOWLEDGEMENTS

- In this project, I used a lot of Bootstrap and their free snippets.

- For the Gallery, I used https://bootsnipp.com/snippets/ZXyEz by Monoxa ideas.

- https://codepen.io/imprakash/pen/GgNMXO

- I have also used the Code Institute google map API and integrated into my project.