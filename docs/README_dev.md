# Fleedom

## Background

Have you ever had a moment where you're busy working on the computer, but a co-worker, supposed-friend, or roommate decides to start a full-fledged conversation with you?  It can be hard to get them to leave you alone without coming across as offensive.  However, this Chrome extension solves such dicey social situations by providing a number of options to get you back to work in no time.

Fleedom can generate a number of seemingly innocent excuses through hotkey assignment, allowing you to covertly execute whichever one best fits the situation, which will provide you a socially acceptable reason to cut short the conversation without discomfort.

## Functionality & MVP

This extension will allow users to:

  - Send a text to their phone.
  - Sound an immediate reminder alarm on their computer.
  - Distort a webpage enough to warrant an urgent call to "tech support".
  - Use hotkeys to activate these features.
  - Save data via popup buttons.

## Wireframes

![fleedom_menu](docs/wireframes/Fleedom_menu.png)  

## Technologies & Challenges

While this extension will be largely based on the standard HTML, CSS, and JavaScript technology, the first challenge it faces is the need to make an external API request in order to send a text message.

With this in mind, it will need to import jQuery in order to make AJAX calls to work with the external Textbelt API that will be responsible for firing the request to send a text message to the specified number.

In addition, Fleedom will need the capability to save both the phone number and the reminder/alert message.  This will require us to use the Chrome storage API so that users can log into Chrome on another computer or after an expired session and still find their settings the same as they left them.

The function that imitates a webpage error will likely need to search for text to reformat and even replace, which will be done using a jQuery to identify HTML elements and reassign their classes to match the styling present in an included CSS file.

Finally, Fleedom will need to constantly run event listeners, waiting for the hotkeys that will fire off the respective events.

Overall, Fleedom will contain the following files:

  - manifest.json
    - The standard Chrome extension file that will run Fleedom in the background on every page.


  - background.js
    - This file will wait for hotkeys that will activate the corresponding function.


  - textMessage.js
    - This file will contain the code necessary to fire off an API request to send a text to the specified number.


  - alert.js
    - This file will contain code to sound an alert based on the pre-defined message.


  - pageError.js
    - This file will contain code to imitate a page error.


  - popup.html
    - This file will contain the menu that shows the hotkey assignments and also the option to change the phone number and alert message.


  - popup.js
    - This file will contain the code that saves (or overwrites) the phone number and reminder/alert message using Chrome's storage API.


## Implementation Timeline

### Day 1
Build out the structure of the extension, ensuring that all files correctly communicate with each other.

  - Complete manifest.json.
  - Successfully incorporate jQuery.
  - All files are in place and require each other correctly.

### Day 2
Begin hot key assignment testing and incorporation, as well as work on adding functionality for Textbelt API.

  - Get background.js running, with hotkeys firing.
  - Make a successful Textbelt API call via hotkey.

## Day 3
Build out popup to save phone number and message with Chrome storage API.

  - Popup saves information via Chrome storage API.
  - textMessage.js relies on saved information to make Textbelt API request.

## Day 4
Incorporate alert functionality using saved data.  Begin work on webpage error feature.

  - alert.js relies on saved information to make Chrome storage API request.
  - Alert is fired using hotkey.
  - Use jQuery to identify current page elements.

## Day 5
Expand on page error feature with jQuery.  Create CSS file and successfully distort webpage.  Finish project.

  - pageError.js & pageError.html fire upon hotkey assignment and mess up page formatting.
  - All functions fire via hotkeys and app functionality is complete.
