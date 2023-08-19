# CS465_Full_Stack
Full Stack Application using the MEAN approach

Architecture
•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
•	Why did the backend use a NoSQL MongoDB database?

In the creation of our application, we employed a multitude of different technologies. Express was used to set up routing and handle API calls, enabling the frontend to display the latest updates on the website. HTML was used to create webpages for customer display, with handlebar templates used to enhance code modularity and deployment speed. JavaScript played a crucial role in bridging the frontend and backend of the application, facilitating user requests, and dynamically updating data without necessitating a full page reload. MongoDB, known for its flexibility and scalability, became a pivotal choice for our database needs. Most notably, its flexibility allowed us to efficiently store data in JSON format, which proved essential as the nature of the data varied across different trips.
 
Functionality
•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is a format designed for ease of human readability and comprehension, while also being simple for computers to parse and interpret. This makes it an excellent choice for exchanging data between the frontend and backend.
As previously mentioned, the use of handlebar templates in our frontend became essential for maximizing code modularity. We simply incorporated the header and footer templates into each site page, as they remained consistent regardless of the content being displayed.

Testing
•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

In testing this application, I employed the Postman application to assess both endpoints and security. Additionally, I utilized a web browser to evaluate the frontend by launching the application on my local server.
The methods used on both the frontend and backend refer to the functions and operations performed within the application. For endpoint testing with Postman, we specified the URL we intended to access and the type of request, such as GET or POST. We also attached a bearer token for authentication purposes, allowing us to make the desired changes effectively. The security aspect would block any other user unless authenticated from editing or adding trips.

Reflection
•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has provided me better overall view of the entire application development process. I can now confidently create customer-facing applications and understand the data sources and storage mechanisms involved. Moreover, I've acquired valuable insights into testing APIs to ensure their correctness and reliability. This newfound knowledge enhances my marketability as it demonstrates my ability to identify areas for improvement in application development, showcasing my commitment to delivering high-quality solutions.
