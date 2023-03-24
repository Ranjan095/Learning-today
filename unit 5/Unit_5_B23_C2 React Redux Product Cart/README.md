### Problem Statement

Create the following application: Products Dashboard using the boilerplate provided in the zip file

## Maximum Marks - 14

```
✅ able to submit the application - 1 mark (minimum score)
✅ Should make a GET request to show 10 Products in the UI - 1 mark
✅ Should have all the details in the Card component - 1 mark
✅ Should redirect to Add page, when the button on Navbar is clicked - 1 mark
✅ Should be able to fill the data in the AddProduct page - 1 mark
✅ Should be able to make a POST request to add the data - 2 mark
✅ The user should be re-directed to homepage, after adding the Product, and it should be visible in the UI - 1
✅ Should be able to make a PATCH request, and Update the Redux store, to increase the count in the Product Card - 1 mark
✅ Should be able to make a PATCH request, and Update the Redux store, to decrease the count in the Product Card - 1 mark
✅ The count on the navbar should also reflect the count, on adding different products - 1 mark
✅ The cart page should only show the products that have some cartQuantity value - 1 mark
✅ Should be able to make a DELETE request, and remove it from the redux store - 1 mark
✅ Should navigate the user to the ProductsPage after Deleting the data and the product should be removed from the UI as well - 1 mark
```

 ### Note : submitting just boilerplate code will give you testfailed error as the store is connected ,You need to connect the redux store.
### Getting Started:

Unzip the rct201.b23.c2-redux boilerplate file, and COPY the contents in your folder.
Run the following commands

- npm install
- npm start
- npm run server -> to start the json-server

##### NOTE:

1. Libraries needs to be installed by yourself
2. Make sure that the json-server is up and running at port 8080
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
4. You need to restart the react server once the env file is updated
5. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url
6. Using Redux-thunk is mandatory.

### Component Structure:

- App
  - Navbar
  - MainRoutes
    - Path: /, Page: Homepage
      - Productpage (renders ProductCard component)
    - Path: /add, Page: AddProduct
    - Path: /cart, Page: CartPage

### Redux

- action.js
- actionTypes.js
- reducer.js
- store.js

### JSON Data:

db.json file is included in the boilerplate zip file and here db.json , with the initial products data (Do Not Override/Modify this data format)

### Steps:

1. The User should be able to,

   - make a requests to ‘http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}’
   - fetch the data from db.json file and store it in redux store
   - display the data in a Productpage file (inside Homepage) - from the redux store, when the React application loads on the homepage.

2. On clicking the Add Product button on the Navbar component, a new page should open up on the path (/add)

   - The AddProduct page has all the UI elements already present. The user should be able to add all the details for the product like title, image URL, category, etc.
   - On clicking the 'Add' button, the POST API request must be made, with the product payload, and it should reflect on the db.json file.
   - The data should be modified in the Redux store as well, after the POST request is successful.
   - After successfully adding the data, the user should be navigated to the homepage UI, where he can see the updated data.

3. On clicking the Delete button on the table row, the DELETE API request should be made, and the particular product should be removed from the db.json file

   - The data should be removed from the Redux store as well, after the DELETE API request
   - The deleted product should be removed from the UI as well.

4. On clicking the "+" button, and "-" button on the ProductCard component, the cartQuantity of that product should increase and decrease respectively.

   - Make a PATCH API request, with the increased count in the payload on clicking the "+" button. The data should reflect in the db.json file as well. Same for "-" button, with with decreased count.
   - The cartQuantity data of that product should be updated in the Redux store as well.
   - The cartQuantity of a product should not exceed more than 3 or less than 0 (the default cartQuantity of each product is 0)
   - The number on the cart icon, on the navbar, should reflect, the products, which has atleast 1 cartQuantity.

5. The Cart page, should show only those products, which have atleast 1 cartQuantity.
   - You should reuse the ProductCard component for this.

### Screenshots

- ![Imgur](https://i.imgur.com/CGda0Hn.png)
- ![Imgur](https://i.imgur.com/plTZpcR.png)
- ![Imgur](https://i.imgur.com/jzDnE2N.png)

### General Instructions:

- Do not remove data-cy=’xxx’ from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
- You need to submit Github Link as well as Netlify/Vercel Link on Course Platform
- Ensure that the GitHub link is correct. Share the link from where the package.json exists

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding
- So we request you to read the problem carefully and debug before itself.
