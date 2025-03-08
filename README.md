# Olive Bootcamp Website

This is the landing page for the Olive Bootcamp, a 6-week program helping Palestinian entrepreneurs go from idea to MVP.

## Setup and Deployment

### Prerequisites
- Node.js and npm installed
- Formspree CLI (for form handling)

### Local Development
1. Clone this repository
2. Open `index.html` in your web browser to view the site locally

### Form Handling with Formspree
This site uses Formspree for handling form submissions using the JSON configuration approach. The form settings are managed through the `formspree.json` file.

The form named "applicationForm" is configured to:
- Send notifications to george@olivestartups.org
- Include the subject "New Application for Olive Bootcamp"
- Redirect users to the thanks.html page after submission
- Protected from spam with a honeypot field

### Customizing the Form
To change the form configuration:

1. Edit the `formspree.json` file
2. Deploy the updated configuration:
   ```
   formspree deploy
   ```

### Form Configuration
The form uses the data-form attribute which references the form name in formspree.json:
```html
<form id="apply-form" data-form="applicationForm">
```

### Redirects
After form submission, users will be redirected to the `thanks.html` page as specified in the `redirectTo` field in formspree.json.

## Website Structure
- `/index.html` - Main landing page
- `/thanks.html` - Thank you page after form submission
- `/css/` - Stylesheet directory
- `/js/` - JavaScript directory
- `/images/` - Image assets

## Contact
For questions or updates, contact [george@olivestartups.org](mailto:george@olivestartups.org).