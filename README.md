# MediFinder

## Preview

![Preview of the Currency Converter Chrome Extension](/Image1a1.png)
![Preview of the Currency Converter Chrome Extension](/Image2a2.png)
![Preview of the Currency Converter Chrome Extension](/Image3a2.png)

## Overview

MediFinder is a React-based web application designed to help users in finding 24-hour emergency rooms, specialist services, and general medical services in nearby Hong Kong public hospitals. Our platform provides real-time geolocation services to ensure you can quickly find the nearest medical assistance.

## Features

- **Geolocation Services**: Detect your current location to find the closest emergency room and specialist services available.
- **24-Hour Emergency Room Locator**: Search for emergency rooms that are open around the clock in proximity to your location.
- **Specialist Services Information**: Get information about specialist outpatient clinic schedules and waiting times near you.
- **General Medical Services**: Locate general health services based on your current geographical position.
- **Urgent Hotlines**: Quick access to emergency contact numbers with the functionality to call directly from the app.
- **Search Functionality**: Integrated search to quickly filter and find relevant healthcare services.
- **Interactive Maps**: Visualize the location of hospitals on an easy-to-navigate map. Provided with alternative buttons to open the location in Google Maps and Apple Maps.

## Mobile Version Specials

- **HKTaxi App Integration**: Introduced a special floating icon on the A&E wait time page. This allows users to download the HKTaxi App and book a taxi with ease, ensuring quick and convenient transportation to the hospital.

- **HA Go App Integration**: Guided mobile experience with prompts to download the HA Go app, allowing users to make reservations for specialist and general medical services right from their smartphone.

## Error Handling

- **Page Not Found**: In case a user navigates to an unknown route, our `PageNotFound` component provides a user-friendly message, guiding them back to the functional parts of the application.
- **Location Permissions**: If a user declines to share their geolocation, the application will display a custom error message prompting them to allow location access to utilize geolocation services fully.

## Usage

Visit MediFinder at [https://qwerac388.github.io/MediFinder/](#) to start finding healthcare services near you. Navigate through the different sections using the menu. The search bar can be utilized to quickly locate specific hospitals. Interactive maps provide a visual guide to hospital locations and information.

## Built With

React - The web framework used.
Material-UI - For UI components.
react-router-dom - For routing.
react-slick - For carousel components.
