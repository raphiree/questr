# Welcome to Questr

[![image](https://i.imgur.com/aFJFHt1.png)](http://questr-aa.herokuapp.com)


## Questr is an image-sharing app dedicated to sharing your in-game screenshots with your in-game community.

FFXIV has a rather robust built-in screenshot tool, `/gpose`, which can be improved further with custom graphic shaders. 
A dedicated community has formed out of sharing game pictures they've taken. This project aims to create an application where
players can come together and share their favorite pictures with one another. Everyone is welcome to use the site as long as it's
within its intended purpose.

## Demo
---
[Visit the live site here!](http://questr-aa.herokuapp.com)

### Make an account, and click on the cloud icon to upload your images

![image](https://i.imgur.com/4axSbhq.png)

Clicking on upload will take you to your landing page where you can view all the images you've submitted

### Click on an image and use the thumbnails or left-right arrows to look through their album

![image](https://i.imgur.com/KZxB5ld.png)

---

## Scheduled Features
1. Ability for users to delete images
2. Ability for users to comment/like each other's images
3. Customized Photostreams of liked images
4. Tagging images by category type
5. Search by tag functionality
6. User profile/custom avatar setup
7. Custom albums/collection galleries
8. Click-drag to upload

---

## Technologies Used
Questr is built using:
- React JS
- Redux JS
- PostgreSQL
- Ruby on Rails

## Technical Challenges

| Brick-style index layout |
| --- |

A particular challenge was in replicating the brick-style gallery layout using only Javascript and CSS without using external modules. 
Thanks to Rahul's handy tutorial at https://w3bits.com/css-grid-masonry/, I was able to replicate a similar look.

![image](https://i.imgur.com/0YXCeIf.png)

```
let displayImage = new Image();
// 50 pixels is the default size of each grid
let rowSpan = (Math.ceil([displayImage.height * 480 / displayImage.width / 50]));
let gridStyle = { 
  gridRowEnd: `span ${rowSpan}`,
  maxWidth: '480px',
}
```

This method divides the entire page into a series of CSS grids, uses Javascript to calculate the dimensions of the image, then sets the necessary row span as it's being loaded.

|  |
|---|


## Known Issues
1. Index page renders images before styling can be applied with onLoad
2. Uploading images redirects before images have finished uploading, causing them to not appear on initial render

---

### Me finding yet another bug in the code after committing at 2 AM:
![image](https://i.imgur.com/xnQS7T2.gif)