# Overview
Azal only really touched 4 parts of this site
- The Homepage
- The header design
- The styling
- The markdown to site file generator

I'm going to go through each of the changes

# Notes
TODO:
- [ ] Break up some of the styles o=in `/assets/mainStyle.css`
## The Homepage
This was largely self explanatory, and I dont think requires much information on. It's a static site homepage with theming. 

## The Header Design
The header was annoying, because github has a weird thing when it comes to having javascript "know" the current page's location and update links. For the header linking, I used a delayed loading system detailed (here)[https://www.tutorialspoint.com/how-do-i-include-a-header-and-footer-file-on-every-html-page]. 
If you want to modify elements of the header, you need to know the relative link from the home directory of the file, and what kind of menu button. There are dropdowns and standard buttons. These all use hyperlinks, and I've labeled the sublinks with filetype for now. Changing the headers from `header.html` is all you need to do, and the whole site will update. 

DO NOT CHANGE ANY HTML FILES WITH LINES THAT INCLUDE THE WORD HEADER. The header has a style script (`/assets/header-css.css`), an associated div that needs to be loaded at the top of the body (`<div id="header-placeholder"></div> `), and a script to run at the end of the body (`<script src="../../header-loader.js"></script>`)

## Styling
Full disclosure, a lot of the CSS styling for this part i asked claude to write on a dummy page and then verbally tweaked it. I need to go through and clean this up _substantially_. All the pages have a consistent style though, found in `/assets/mainStyle.css`. PLEASE KEEP IT THIS WAY. 

*DO NOT MAKE INLINE STYLES FOR YOUR HTML. ITS BAD*

## Markdown to HTML Generator
Another thing I cant take credit for. I had the pandoc idea but claude wrote the bash script to loop recursivley through files and update link references. In a nutshell though, we use an html template which includes the header and imports, and then when you modify a markdown file somewhere in the project and run the script, it will regenerate the HTML. Claude was especially helpful for making mathjax autoimport with the right divs.
IMPORTANT: If you custom modified an HTML, and run the script, *IT WILL OVERRIDE YOUR WORK*!
To make the bash script executable run
```
chmod -x markdownEnMasse.sh
```
Then run it in the directory of this project (NOT YOUR GLOBAL DIRECTORY. IF YOU DONT KNOW WHAT THIS MEANS DONT RUN IT) with 
```
./markdownEnMasse.sh
```