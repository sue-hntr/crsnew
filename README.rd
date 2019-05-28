
CRS is an independent student project created for the UPENN Coding Bootcamp. I chose to work independently to explore my interest in UX design for a real-life client and also to gain better understanding of React, Redux and Express routing.

This is a prototype app for a non-profit I call Consumer Registration for Services (CRS) -- the actual client chose to remain anonymous due to copyright issues. CRS provides financial and legal counseling about housing: renting, purchasing, declaring bankruptcy, fighting foreclosure. CRS wants to play an integral part of the financial stabilization of neighborhoods in the City of Philadelphia and its surrounding communities.

The CRS Counselors provide services to Consumers free of charge —consumers just need to provide them with financial information and documents. Usually a single Counselor stays with the Consumer until the Consumer’s issue is resolved.

Currently, NCWS is a paper-only office. There is no database other than basic contact information for counselors to reference. Also consumer intake is a burdensome and time-consuming consuming process for counselors who have to enter information into Google Forms. The CRS Google Forms system outputs consumer information in a format that CRS can use to both advise clients and process billing to Federal and State resources.

Prior to the Google Forms system, CRS clocked their new consumer intake at approximately 2 hours. Google Forms has improved that to approximately 30 minutes. I hope to reduce the burden on the Counselors and Administrative staff even further by encouraging Consumers to enter much of their information and make an appointment online while still creating a secure and trustworthy full stack app.


This version of the app contains a full React/Redux Express/Node Mongo login/authentification process. Later versions will contain:

 -- Consumers will be able to request an appointment through the CRS database after login.

 -- Consumers will recieve automatic email notification of account and appointment creation.

 -- Consumers will complete a "tutorial" of the importance of email signature verification. 

 -- CRS staff will have their own portal to view appointment requests and assign counselors to consumers.

 -- Hardware improvements to the UX system will include electronic signature pads to save paper and effort.


NPMs include: 
    AUTHENTICATION AND VALIDATION 
    "bcrypt":  for user authentification and encrypting passwords
    "is-empty": check to make sure user has entered something in the input field
    "jwt-decode": a small browser library that helps decoding JWTs token which are Base64Url encoded
    "jsonwebtoken": creates JSON WEB TOKENs to check authentification across React components
    "passport": Passport authenticates and provides hooks for controlling what occurs when authentication succeeds or fails.
    "passport-jwt": authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.
    "validator": A library of string validators and sanitizers. Useful for controlling front-end validations in React.

    BACKEND
    "body-parser" to handle JSON
    "connect-mongo" for Mongoose DB connection
    "express" server
    "mongoose": to connect express to MongoDB
    "dotenv": loads environment variables (i.e. API keys) from a .env file into process.env.
    
    FRONT-END and STATE 
    "bootstrap": front-end UI library
    "classnames": A simple JavaScript utility for conditionally joining classNames together.
    "react-bootstrap": absolutelly necessary if using react with a db AND bootstrap
    "react-redux": communicate between react and redux
    "react-router-dom": DOM bindings for React Router.
    "redux": a predictable state container for JavaScript apps to easily communicate between react components
    "redux-thunk": Redux Thunk middleware allows you to write action creators that return a function instead of an action
