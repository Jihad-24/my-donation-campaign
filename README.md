# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Added at least 3 Project features

# 1.Routing with React Router:
The code makes use of the React Router library to set up client-side routing. It defines various routes within the router object. These routes are associated with specific components, such as MainLayout, Home, Donation, Statistics, and Card. The RouterProvider wraps the application and provides routing functionality. This allows users to navigate between different parts of the application without requiring a full page reload.
# Filtering and Displaying Data:
The Home component is responsible for displaying data. It loads data from an external source using the fetch function, from a JSON file. The loaded data is stored in the cards state using the useLoaderData hook from React Router. Users can also filter this data by category using the handleSearchFilter function. When a category is input, it filters the cards and displays them. The filtered data is stored in the searchCategory state and passed to the Cards component. This feature allows users to search and filter the displayed cards based on a category.
# Layout Composition:
The application uses a layout structure where the main layout, MainLayout, wraps around the various content components. This layout includes a navigation bar (NavBar) and the content with the current route using the Outlet component. This approach keeps the navigation consistent across different parts of the application and provides a structured way to organize the user interface.