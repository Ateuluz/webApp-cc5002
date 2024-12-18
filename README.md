# Project Documentation

**Author:** Lucas Zulueta  
**Date:** 2024-09-03

---

This file is yet to be fully organized, for now all info was dumped on [summary](#subsection-30-summary). It will all be later organized on the respective areas. For now, I'm sorry for the hassle.

---

## Index

[T1](#homework-1)
[T2](#homework-2) 
[T3](#homework-3) 


1. [Section 1: Folder Structure](#section-1-folder-structure)
   - [Subsection 1.1: CSS Folder](#subsection-11-css-folder)
   - [Subsection 1.2: HTML Folder](#subsection-12-html-folder)
   - [Subsection 1.3: IMG Folder](#subsection-13-img-folder)
   - [Subsection 1.4: JS Folder](#subsection-14-js-folder)
     - [Index](#subsection-141-index)
     - [Agregar Donacion](#subsection-142-agregar-donacion)
     - [Ver Dispositivos](#subsection-143-ver-dispositivos)
     - [Información Dispositivos](#subsection-144-información-dispositivos)
   - [Subsection 1.5: JSON Folder](#subsection-15-json-folder)
2. [Section 2: Project Overview](#section-2-project-overview)
   - [Subsection 2.1: Purpose of the Project](#subsection-21-purpose-of-the-project)
   - [Subsection 2.2: Key Features](#subsection-22-key-features)
     - [Subsection 2.2.1: Device Listing](#subsection-221-device-listing)
     - [Subsection 2.2.2: Add Device](#subsection-222-add-device)
     - [Subsection 2.2.3: Commenting System](#subsection-223-commenting-system)
     - [Subsection 2.2.4: Form Validation](#subsection-224-form-validation)
     - [Subsection 2.2.5: Input Field Management](#subsection-225-input-field-management)
   - [Subsection 2.3: Future Improvements](#subsection-23-future-improvements)
3. [Section 3: Technical Details](#section-3-technical-details)
   - [Subsection 3.0: Summary](#subsection-30-summary)

---

## Homework 1

## Section 1: Folder Structure

[Back to Index](#index)

This section provides an overview of the folder structure used in the project, explaining the purpose and content of each folder.

### Sub-Index

- [CSS](#subsection-11-css-folder)
- [HTML](#subsection-12-html-folder)
- [IMG](#subsection-13-img-folder)
- [JS](#subsection-14-js-folder)
- [JSON](#subsection-15-json-folder)

---

### Subsection 1.1: CSS Folder

[Back to Section 1](#section-1-folder-structure)

The CSS folder contains stylesheets that define the visual presentation of the HTML elements across the project.

**Files:**
- `index.css`: Stylesheet for the index.
- `agregar-donacion.css`: Stylesheet for agregar-donaciones.html.
- `ver-dispositivos.css`: Stylesheet for ver-dispositivos.html.
- `informacion-dispositivo.css`: Stylesheet for informacion-dispositivo.html.

As of now, organization is poorly implemented, for there is repetition within
the stylesheets.

**Consideration:** Integrate all stylesheets into a single main file for better maintainability and easier updates.

---

### Subsection 1.2: HTML Folder

[Back to Section 1](#section-1-folder-structure)

The HTML folder includes the core structure files for the website. Each file corresponds to a specific page or component of the project.

**Files:**
- `index.html`: The main landing page of the website.
- `agregar-donacion.html`: Page for adding donations.
- `ver-dispositivos.html`: Page for displaying devices.
- `informacion-dispositivo.html`: Page for single device information display.

**Consideration:** Ensure semantic HTML is used for better accessibility and SEO, probably not going to implement it for this semester, not so far.

---

### Subsection 1.3: IMG Folder

[Back to Section 1](#section-1-folder-structure)

The IMG folder holds all images used within the project.

**Consideration:** Organize images into subfolders (e.g., `devices`, `icons`) for easier management.

---

### Subsection 1.4: JS Folder

[Back to Section 1](#section-1-folder-structure)

### Sub-Index

- [Index](#subsection-141-index)
- [Agregar Donacion](#subsection-142-agregar-donacion)
- [Ver Dispositivos](#subsection-143-ver-dispositivos)
- [Información Dispositivos](#subsection-144-información-dispositivos)

The JS folder contains all JavaScript files that add interactivity, validate forms, and manage dynamic content on the site.

**Files:**
- `index.js`: Handles button interactions and main menu display.
- `agregar-donacion.js`: Manages the functionality for adding new devices and information validation.
- `ver-dispositivos.js`: Manages the functionality for viewing and interacting with listed devices.
- `informacion-dispositivo.js`: Manages the functionality for viewing and interacting with a single device.

**Consideration:** Separate functionalities into modular files for better maintainability and easier updates.

---

#### Subsection 1.4.1: Index

[Back to JS Folder](#subsection-14-js-folder)

The `index.js` file is responsible for handling button interactions and displaying the main menu on the website. It ensures smooth navigation between different sections of the site.

**Implementation Details:**
- **Button Interactions:** The `index.js` file contains event listeners that trigger various functions when buttons are clicked. For instance, and for now the only feature, the navigation buttons allow users to switch between different pages.
- **Menu Display:** None so far.
- **Optimization Consideration:** None so far.

**Consideration:** None so far.

---

#### Subsection 1.4.2: Agregar Donacion

[Back to JS Folder](#subsection-14-js-folder)

The `agregar-donacion.js` file manages the functionality for adding new devices and information validation. It ensures that users can submit new device listings with all the required details correctly filled out.

**Implementation Details:**
- **Dynamic Device Fields** The script handles unlimited field creation using a `javascript` function that creates a div from scratch with all needed information to later on append it as child into the devices container html div.
- **Form Handling:** This script is responsible for managing the form used to submit new devices. It captures user inputs, validates them, and then processes the submission.
- **Validation:** The script includes various validation checks, such as ensuring that all required fields are filled out, file types are correct, and input values meet specified criteria (e.g., valid email, correct file format). It also provides feedback to users by changing display style on invalid fields, as well as a specific error dialog on top of individual incomplete fields.
- **Data Submission:** As of this version, data submission is limited to just stop displaying the data. Later on, a backend will be added for data handling.
  
**Optimization Consideration:** As the form grows more complex with additional fields and validation rules, a break down of the the validation logic into smaller functions or modules may be considered to improve maintainability.

---

#### Subsection 1.4.3: Ver Dispositivos

[Back to JS Folder](#subsection-14-js-folder)

The `ver-dispositivos.js` file handles the functionality for viewing and interacting with the list of devices available on the site.

**Implementation Details:**
- **Dynamic Listing:** This script retrieves the list of devices from a JSON file (or a database for soon to come implementations) and dynamically generates the HTML needed to display each device. It loops through the device data and creates a visual representation of each device on the page.
- **Interactivity:** As of this implementation, the only interaction allowed is to click on a device row to be redirected to the `informacion-dispositivo.js` with an `id` as parameter on the link.
- **Optimization Consideration:** To enhance performance, especially when dealing with a large number of devices, consider implementing lazy loading for images and pagination for the device list.

---

#### Subsection 1.4.4: Información Dispositivos

[Back to JS Folder](#subsection-14-js-folder)

The `informacion-dispositivo.js` file is responsible for displaying detailed information about a single device and allowing users to interact with that specific device's data.

**Implementation Details:**
- **Device Details:** When a user clicks on a device from the list on `ver-dispositivos.js`, this script retrieves detailed information about that device and displays it on this page. The details include specifications, images, user comments, and any other relevant information.
- **User Interaction:** Users can leave comments, rate the device, or ask questions, all of which are managed by this script. It also handles the display and validation of user inputs to ensure quality content. Comments are not stored so far, since it seems js cannot modify `.json` files.

---

### Subsection 1.5: JSON Folder

[Back to Section 1](#section-1-folder-structure)

The JSON folder contains data files that populate content dynamically on the website, including device information and user comments.

**Files:**
- `devices.json`: Stores information about the devices listed on the site.

**Consideration:** Organize JSON files systematically for better data management and possibly separate large JSON files into smaller ones for specific use cases. Probably going to handle with a back-end program/application.

---

## Section 2: Project Overview

[Back to Index](#index)

This section provides an overview of the project, including its purpose and key features. Each key feature is explored in detail to explain its implementation.

### Sub-Index

- [Purpose of the Project](#subsection-21-purpose-of-the-project)
- [Key Features](#subsection-22-key-features)
  - [Device Listing](#subsection-221-device-listing)
  - [Add Device](#subsection-222-add-device)
  - [Commenting System](#subsection-223-commenting-system)
  - [Form Validation](#subsection-224-form-validation)
  - [Input Field Management](#subsection-225-input-field-management)

---

### Subsection 2.1: Purpose of the Project

[Back to Section 2](#section-2-project-overview)

The project aims to create a platform where users can view, add, and manage devices available for donation or exchange. The platform offers a user-friendly interface with detailed device information and a commenting system to facilitate interaction.

---

### Subsection 2.2: Key Features

[Back to Section 2](#section-2-project-overview)

The key features of the project include the ability to list devices, add new devices, comment on devices, validate user input, and manage form input fields effectively.

#### Subsection 2.2.1: Device Listing

[Back to Key Features](#subsection-22-key-features)

The device listing feature displays all available devices, allowing users to view details, images, and comments associated with each device. 

**Implementation Details:**
- The device listing is generated dynamically using data from `devices.json`.
- JavaScript is used to create and insert HTML elements based on the JSON data.

---

#### Subsection 2.2.2: Add Device

[Back to Key Features](#subsection-22-key-features)

The add device feature allows users to contribute new devices to the platform. A form is provided where users can input device details, upload images, and submit the information. More than one device can be added with each form.

**Implementation Details:**
- The form includes fields for the device name, description, condition, image upload and others, including user info.
- JavaScript handles form validation and submission, ensuring that all required fields are filled out correctly.
- The idea is that upon submission, the new device data is added to `devices.json`.

**Why This is Optimal:**
- The validation process ensures data integrity and prevents incomplete or incorrect submissions.
- The use of JavaScript for handling submissions allows for immediate feedback and error handling.

---

#### Subsection 2.2.3: Commenting System

[Back to Key Features](#subsection-22-key-features)

The commenting system enables users to leave feedback about individual devices. Each device's page has a section where comments are displayed and can be added.

**Implementation Details:**
- Comments are stored in `devices.json` as a variable of each device. linking to specific devices using unique IDs is within considerations.
- The commenting system includes basic validation to prevent empty comments or invalid name lengths.

---

#### Subsection 2.2.4: Form Validation

[Back to Key Features](#subsection-22-key-features)

Form validation is implemented across the platform to ensure that all user inputs are correct and complete before submission.

**Implementation Details:**
- JavaScript is used to check for required fields, validate email addresses, and ensure that uploaded files meet the specified criteria.
- Custom error messages are displayed inline with the relevant form fields.
- Many validations use regular expressions.
- Custom error messages guide users in correcting their inputs, ensuring that all submissions meet the required standards.

---

#### Subsection 2.2.5: Input Field Management

[Back to Key Features](#subsection-22-key-features)

Input field management refers to the handling of dynamic form fields, such as adding or removing file input fields based on user interactions.

**Implementation Details:**
- JavaScript is used to dynamically add and remove input fields, ensuring that the form adapts to the user's needs.

---

### Subsection 2.3: Future Improvements

[Back to Section 2](#section-2-project-overview)

As explained, the main improvements rely on a better file structure.

---

## Section 3: Technical Details

[Back to Index](#index)

This section provides an overview of the project, including its purpose and key features. Each key feature is explored in detail to explain its implementation and optimality.

### Sub-Index

- [Subsection 3.0: Summary](#subsection-30-summary)
- [Subsection 3.1: Frontend Framework](#subsection-31-frontend-framework)

---

### Subsection 3.0: Summary

[Back to Section 3](#section-3-technical-details)

- The `index.html` page has only 2 navigation buttons for the main pages. There's also a title and name. Might be edited later on.
- `agregar-donacion.html` implements the basic elements plus some scripts that help with user interaction. No validations here other than for guide reasons. Real validations are done with `agregar-donacion.js`.
  - Navigations is limited to going mack to the index page.
  - `agregar-donacion.js` is the main script for the form. It handles the validations for the form fields.
    - Name validation requires from 3 to 80 chars as per requested.
    - Mail validation follows the provided limits and regex.
    - Phone validation requires a 9 digit number that starts by 2 or 9.
    - Region and Comuna require a non empty value, which is used for non selectable options. This because value is assigned as a number for easier indexing.
    - Type and state validation require the value to be an element of their respective list of posibilities.
    - Years of use require a value within 1 and 99.
    - Image validation follows provided structure, adapted for this implementation.
  - For deciding when to submit, state variables are implemented, for example, deciding if the form should be submited or not.
  - There's a `dispCount` variable for handling ids.
  - Many processess are automated, for example:
    - Error messages are generated via `removeMessages(holder_list_id)` and `addMessage(holder_list_id, message)`.
    - New device inputs are handled via `agregarOpcionesDispositivo()` function, which creates all needed html elements and appends them as childs to the `contenedor-dispositivos` container. Initial device input section hartyped on `agregar-donacion.html`.
    - Select elements are created via lists handed to a function that creates and appends such elements.
    - Each validation is held separately, and then evaluated on a shared validation function.
    - The form won't allow sobmiting it if any mandatory field is missing, if none, a request box is unhidden allowing for confirmation for form submit. Each button there calls for a specific function that modifies a state variable regarding form submit.
- `ver-dispositivos.html` features a table with the required columns and follows the image size requirements. Each row representing a device acts as a hyperlink to the `informacion-dispositivo.html`.
  - Body of the table serves as container.
- `informacion-dispositivo.html` displays all info related to a certain id, referencing `devices.json` where all devices are stored for now.
  - Container system used here as well for displaying device info.
  - Should there be an error, the page will let know of it.
- `devices.json` is a JSON file containing all the devices. It's used to populate the table in `ver-dispositivos.html` and to get the device info in `informacion-dispositivo.html`.
- All .html files have their respective .js and .css files, each stored by their filetype.
- `ver-dispositivos.js` contains two button function definitions and a function in charge of retrieving information from `devices.json` as a list and displaying required info in format by adding a formatted string to table body innerHTML.
- `informacion-dispositivo.js` has a function in charge of retrieving the desired id from the URL and also all devices on `devices.json`, loading the data of the matching device on screen. This by working with innerHTML property.
  - There are also validations for comments, one of which validates the name length and other for a non-empty comment.
  - There's also a function for adding comments to the device, which is called when the comment button is pressed.
  - `toggleImageSize(image)` is included as well, managing classList elements for resizing. Also an added functionality for darkening background when expanding the image. Scrolling disabled by `no-scroll` class name on the respective CSS.
- CSS stylesheets are somewhat messy because of repetition, leading to discrepancies between elements, such as coloring and backgrounds, but they do well enough for now, may change later on.

---


## Homework 2

This homework was mainly a refactor of the code, since many things I had done on the first iteration were sub-optimal and not really compatible with the back end part of the app.
I decided to copy the verifications from the frontend to the backend, obviously adapted as needed.
The main problems I had were regarding javascript syntax i guess, and Jinja as well, the bugs were pretty annoying and to fix them one had to either re-write the code (which I did) or spend hours looking for a bad key on a dictionary, to which I can also relate.
I used github to make the changing code process a bit more easy.
css is mostly a copy of the previous one, except for the fact that I decided to implement a navbar, so some stuff got messy, might fix some day.
I hope my efforts now serve a greater purpose for the next HW.
File handling was not that hard, provided one understands how to use them, most of the errors I had were because of that as well, having bad implementations as a base for the project can become a huge problem, hard to clean and debug.
I also implemented a retrieve.py for utils that allowed for form handling, though for time's sake I did not invest too much time on it.
The rest is pretty much the same.

## Homework 3

For the comments, well, they were implemented on HW2, so besides modifying a value for minimum content length, nothing really changed.

For this homework, charts were implemented. The base template was slightly modified so that the two added charts could be accessed from the navbar. For the charts, one is a column chart and the other is a pie chart, both using slightly different chart definitions, which are basicaly tha axis and data format. The fetching was also different between the two, slightly, differing on formating. The queries for each are very similar. Another query for transforming from comuna ids to their names was added.

`ver_dispositivos.js` was slightly modified so that navigation buttons showed up when needed only.

`app.py` now implements functions for chart rendering and chart data retrieval.

No `.css` was created, the existing ones are more than enough.