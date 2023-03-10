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

## JavaScript
As I worked on the JavaScript Section of the Startup Project, I learned SOOOO much
One of the biggest and most impactful things that I learned was being able to manipulate teh DOM depending on what the user did. I implimented this in what meals are being displayed. Now, all of the meal cards on my startup application are dynamically loaded onto the page depending on what Data I stored in the fake DataBase and what meals you select to eat in a given week. (If no meals are selected for a given week, then a card suggesting that you plan your meals will appear.
I was also able to use this by implimenting a search function to the contacts list so that a person can search a contact from the list and all of the other ones will disappear.

Another thing I used JavaScript for on this assignment was collecting data from the user, when you choose meals in the planning stage of the app, they are stored in a list in the browser and repopulated when you see the upcoming meals. I also collected data from the user when a date is entered before the planning stage, this date is taken and compared to the current day to see how many days need to be planned. *This is not functional now. I hardcoded this to be 7 days so that when grading the TAs wouldn't put in something 9 years from now and be adding meals endlessly. But upon completion, this will collect the number of days, and see how many meals need to be planned

Thankfully, now with JavaScript, I have a mostly working application, now I just need to store data in a DataBase and this will be really usable. Applying JavaSCript made my Application come to life!!!
