# 📰 News App

A responsive News Application built with **React.js**, where users can browse news by category, search for specific news, and view complete articles using data fetched from the **NewsAPI**.

This project was created as a practical learning project to understand how APIs, React components, Context API, Axios, loading states, search functionality, and Tailwind CSS work together in a real-world application.

---

## 🚀 Features

* 📰 Fetch latest news using **NewsAPI**
* 🔎 Search news by keyword
* 📂 Browse news by different categories
* ⚡ API requests using **Axios**
* ⏳ Loading skeleton/loader while fetching data
* 📱 Responsive UI
* 🎨 UI designed using **Tailwind CSS**
* 🧩 Reusable React components
* 🌐 Open complete news articles from the original source
* 🔐 API key managed using environment variables
* 📦 Centralized news state using **Context API**

---

## 🛠️ Technologies Used

* React.js
* JavaScript
* Tailwind CSS
* Axios
* Context API
* NewsAPI
* Vite
* HTML
* CSS

---

## 📡 API Integration

For fetching news, this project uses **NewsAPI**.

The API helped me understand how to:

* Make API requests from a React application
* Work with API endpoints
* Pass query parameters
* Handle API responses
* Handle loading states
* Handle API errors
* Display dynamic API data in React
* Use an API key through environment variables

### API Request Example

```js
axios.get(
  `https://newsapi.org/v2/everything?q=india&apiKey=${apiKey}`
)
```

The API provides news information such as:

* Title
* Description
* Image
* Author
* Published date
* Source
* Article URL

> **Note:** NewsAPI's free/development plan has request limitations. The exact limits can vary by plan, so check the current NewsAPI documentation before relying on a specific daily request count.

---

## ⚛️ React Concepts Practiced

While building this project, I practiced several React concepts in a practical way.

### Components

The UI was divided into reusable components such as:

```text
Navbar
Category
News
Card
Loader
Wrapper
```

This helped me understand how a larger React UI can be broken into smaller reusable parts.

---

### Context API

I used **Context API** to manage and share news-related state between components.

Instead of passing news data through multiple levels of props, the news state and fetching function can be accessed through the context.

Conceptually:

```text
News Provider
      ↓
  News State
      ↓
 ┌────┼────┐
 ↓    ↓    ↓
News Card Category
```

---

### Axios

Axios was used for API communication.

Through this project I learned:

* GET requests
* Passing API parameters
* Handling responses
* Using async/await
* Working with API data inside React

---

### Loading State

I implemented a loader/skeleton UI to improve the user experience while news data is being fetched.

Instead of showing an empty screen:

```text
Loading...
```

the application displays a skeleton-style loading interface.

---

### Search Functionality

I implemented a search feature that allows users to search for news using a keyword.

For example:

```text
India
Technology
React
AI
Sports
```

The entered search term is used to request relevant news from the API.

---

## 🎨 UI Development

The UI was developed using **Tailwind CSS**.

While working on the UI, I practiced:

* Flexbox
* Grid
* Spacing
* Responsive layouts
* Cards
* Sticky elements
* Borders and shadows
* Typography
* Responsive design
* Utility classes

I also experimented with creating a more polished and modern news-card design rather than using a basic card layout.

---

## 📚 What I Learned From This Project

This project was mainly built for practical learning. Some of the important things I learned were:

### 1. Working With APIs

I learned how a frontend application communicates with an external API and uses the returned data to dynamically generate UI.

### 2. Understanding API Data

Instead of working only with static JSON, I learned how to inspect API responses and use properties such as:

```js
title
description
urlToImage
author
publishedAt
url
```

inside React components.

### 3. State Management

I got practical experience managing application state and sharing state between components using Context API.

### 4. Reusable Components

I learned that instead of writing the same UI repeatedly, common UI elements can be converted into reusable components.

### 5. Handling Loading States

I learned that API-based applications need proper loading states because data does not arrive immediately.

### 6. Search & Dynamic Data

I learned how user input can be connected with API requests to create a dynamic search experience.

### 7. Environment Variables

I learned how API keys can be stored separately from the main source code using environment variables.

Example:

```env
VITE_NEWSAPI_KEY=your_api_key
```

### 8. Building a Real React Application

Most importantly, this project helped me understand how different React concepts work together in an actual application instead of learning each concept separately.

---

## 🧠 Concepts Practiced

```text
React
 ├── Components
 ├── Props
 ├── State
 ├── Context API
 ├── Conditional Rendering
 ├── List Rendering
 ├── Event Handling
 └── Hooks

API
 ├── REST API
 ├── Axios
 ├── GET Requests
 ├── Query Parameters
 ├── API Response Handling
 └── Error/Loading Handling

UI
 ├── Tailwind CSS
 ├── Responsive Design
 ├── Cards
 ├── Skeleton Loader
 └── Component-based UI
```

---

## 🔧 Installation & Setup

Clone the repository:

```bash
git clone <your-repository-url>
```

Go to the project directory:

```bash
cd news-app
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_NEWSAPI_KEY=your_newsapi_key
```

Start the development server:

```bash
npm run dev
```

---

## 🔐 Environment Variables

The API key is stored in a `.env` file and should not be committed to Git.

`.gitignore`:

```gitignore
.env
```

---

## 📌 Future Improvements

Some features that can be added in the future:

* Pagination
* Infinite scrolling
* Dark/light mode
* Better error handling
* Save/bookmark articles
* News source filtering
* More advanced search filters
* Authentication
* Backend integration
* Database for saved articles

---

## 🎯 Purpose of the Project

The main purpose of this project was to move from learning React concepts theoretically to **implementing them in a real-world project**.

While building this application, I learned how to connect React with an external API, manage application data, create reusable components, handle loading states, implement search functionality, and build a responsive UI using Tailwind CSS.
