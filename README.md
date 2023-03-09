# Starrtup Application

## Elevator Pitch
Have you ever wanted to eat healthier? Have you struggled to keep track of your recepies? Or do you feel like you eat the same thing every day/week?

PlanMyMeals is an app that assists you in overcoming all these problems. PlanMyMeals stores all of your receipies to a database, and then periodically reccomends them to you as you get on the app to plan you meals every week. PlanMyMeals tracks what you want to eat every week and will create a shopping list of all the items you will need to buy before you make those meals. This app will alleiviate the headache of remembering meal options and compiling a shopping list accordingly.




## Design/Images
![Startup 1](https://user-images.githubusercontent.com/103144986/214980747-8330ef7f-4b8f-4895-ac31-b0a1617cae4f.png)

![Startup 2](https://user-images.githubusercontent.com/103144986/214980809-63c883e1-6298-49c3-9a16-889e269689cf.png)

![Startup 3](https://user-images.githubusercontent.com/103144986/214980833-e99cf9a0-1753-4565-8465-55821c133ecb.png)


## Key Features
- Each user can log in with their own credentials
- Individuals can select the meals they want to eat in the coming week
- The app will pull associated ingredients from the database to compile a shopping list
- Users can post favorite recepies on a common page to share with each other
- Users can see who else is on and ask for recepies
- Ability for users to edit receipies as they wish
- Suggest receipies that are favorites/have not been eaten in a while
- Map meals on a calendar


# What Am I Learning?
The deployment script:
./deployFiles.sh -k ~/CS260/TannerChildKey.pem -h tannerchild.com -s simon

First, I became much more comfortable using git and github to
- Create a repository on GitHub
- Clone that repository to my computer
- Add, Stage, and Push changes to that repository on GitHub

I learned that when writing HTML it is very useful to use the table tag to make rows of text/items rather than trying to line up divs next to each other.

I now realize that when I wrote (very) basic HTML for another class, I was trying to do too much styling/centering/formating using HTML. It makes much more sense to do it this way, where we have a very clear structure in HTML and will style it when we apply CSS.

I learned how to use LiveServer to view my HTML as I edited it :) That was really nice.

Finally, I realized that I had an error in the deployment script filepath that didn't allow me to deploy my changes to the site. I was able ti fix this and resolve the error.


As I have applied CSS to my Startup application and my Simon application, I have learned so much about how CSS works. 
- Very importantly, I became familiar with how one bit of CSS can overwrite another. That is important if you want to overwrite a piece, you have to be aware of where you are putting it
- I also have become very comfortable with media queries. These are very important so that my web page can be displayed on both desktop and mobile. 
- As I have been practicing more with CSS, I have also become much better at debugging issues. If something isn't displaying as I had been expecting, I am now very comfortable using the chrome debugger to see where the issue might be.

can import fonts with @import url('https.com');

reverses the content display.
div {
display: flex;
flex-direction: column-reverse;
}
div> hello 
world< would instead be: world hello

PALS BEFORE MARRIAGE HAHA



As I did the simon and startup JS, I realized that I had to be Very careful to spell everything correctly and to make sure I wasn't sitting on an await. (I did this when I forgot to add the sound files.) 

I also feel like I have learned LOTS and become very comfortable at manipulaing the DOM using JS. On my Startup project I dynamically re-created the whole page using JS to show meal objects that the person put on their queue

Arrow functions:
JS const f = y => ++y;
console.log(f(3));
(answer = 4)

JS List methods:
1. map( )
This method creates a new array with the results of calling a provided function on every element in this array.

2. filter( )
This method creates a new array with only elements that passes the condition inside the provided function.

3. sort( )
This method is used to arrange/sort array’s elements either in ascending or descending order. 

4. forEach( )
This method helps to loop over array by executing a provided callback function for each element in an array.

5. concat( )
This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.

9. join( )
This method returns a new string by concatenating all of the array’s elements separated by the specified separator.

10. reduce( )
This method applies a function against an accumulator and each element in the array to reduce it to a single value. (basically sum all of the elements in an array if you did .reduce((total, current) => total + current);

11. find( )
This method returns the value of the first element in an array that pass the test in a testing function.

12. findIndex( )
This method returns the index of the first element in an array that pass the test in a testing function.

18. pop( )
This method removes the last element from the end of array and returns that element.

html	The page container
head	Header information
title	Title of the page
meta	Metadata for the page such as character set or viewport settings
script	JavaScript reference. Either a external reference, or inline
include	External content reference
body	The entire content body of the page
header	Header of the main content
footer	Footer of the main content
nav	Navigational inputs
main	Main content of the page
section	A section of the main content
aside	Aside content from the main content
div	A block division of content
span	An inline span of content
h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
p	A paragraph of text
b	Bring attention
table	Table
tr	Table row
th	Table header
td	Table data
ol,ul	Ordered or unordered list
li	List item
a	Anchor the text to a hyperlink
img	Graphical image reference
dialog	Interactive component such as a confirmation
form	A collection of user input
input	User input field
audio	Audio content
video	Video content
svg	Scalable vector graphic content
iframe	Inline frame of another HTML page

&	&amp;
<	&lt;
>	&gt;
"	&quot;
'	&apos;
😀	&#128512;

.match() returns everything that matches the regex contained

.map() does the contained function to each member of a list

document.querySelector('p').addEventListener(asdfsdfsdf) -this only applies the event listener to the first p tag, not all

valid functions:
const f = (x) => {}
function f(x) {}
const f = function(x) {}


JS object example:
{ n:1 }

textContent:
sets the child text for the an element


how to create a hyperlink:
<a href='https://c.com'>x</a>

will turn only the text in a div with class header blue:
div.header { color: blue; }

Valid JSON:
{"x":3}

Makes a script executable:
chmod +x deploy.sh


to point to another DNS record, you hsould use: CNAME

80 insuecure
443 secure
