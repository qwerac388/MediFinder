# MediFinder

## Overview

MediFinder is a React-based web application designed to help users in finding 24-hour emergency rooms, specialist services, and general medical services in nearby Hong Kong public hospitals. Our platform provides real-time geolocation services to ensure you can quickly find the nearest medical assistance.

## Features

- **24-Hour Emergency Room Locator**: Search for emergency rooms that are open around the clock in proximity to your location.
  ![24-Hour Emergency Room Locator Page Preview](/Image1a1.png)
- **Specialist Services Information**: Get information about specialist outpatient clinic schedules and waiting times near you.
  ![Specialist Services Information Page Preview](/Image2a2.png)
- **General Medical Services**: Locate general health services based on your current geographical position.
  ![General Medical Services Page Preview](/Image3a2.png)

## Error Handling

- **Page Not Found**: In case a user navigates to an unknown route, our `PageNotFound` component provides a user-friendly message, guiding them back to the functional parts of the application.
  ![PageNotFound Preview](/PageNotFound1.png)
- **Location Permissions**: If a user declines to share their geolocation, the application will display a custom error message prompting them to allow location access to utilize geolocation services fully.
  ![ErrorMsg Preview](/ErrorMsg1.png)

## Usage

Visit MediFinder at [https://qwerac388.github.io/MediFinder/](#) to start finding healthcare services near you. Navigate through the different sections using the menu. The search bar can be utilized to quickly locate specific hospitals. Interactive maps provide a visual guide to hospital locations and information.

## Built With

- **React** : The web framework used.
- **Material-UI** : For UI components.
- **react-router-dom**: For routing.
- **react-slick** : For carousel components.
