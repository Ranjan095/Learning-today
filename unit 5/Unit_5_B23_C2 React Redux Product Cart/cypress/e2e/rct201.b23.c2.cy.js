import data from "../../submissionData.json";
const { default: axios } = require("axios");
const getAppReducer = (win) => win.store.getState();

// const data = [
//   {
//     submission_link: "http://localhost:3001",
//     id: "manish-local",
//     json_server_link: "http://localhost:8080",
//   },
// ];

const databaseData = [
  {
    id: 1,
    name: "Product 1",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 10,
    cartQuantity: 0,
  },
  {
    id: 2,
    name: "Product 2",
    category: "Cosmetics",
    image:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 15,
    cartQuantity: 0,
  },
  {
    id: 3,
    name: "Product 3",
    category: "Cosmetics",
    image:
      "https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 15,
    cartQuantity: 0,
  },
  {
    id: 4,
    name: "Product 4",
    category: "Cosmetics",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 23,
    cartQuantity: 0,
  },
  {
    id: 5,
    name: "Product 5",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 17,
    cartQuantity: 0,
  },
  {
    id: 6,
    name: "Product 6",
    category: "Cosmetics",
    image:
      "https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 18,
    cartQuantity: 0,
  },
  {
    id: 7,
    name: "Product 7",
    category: "Electronics",
    price: 102,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    cartQuantity: 0,
  },
  {
    id: 8,
    name: "Product 8",
    category: "Shoes",
    price: 100,
    image:
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",
    cartQuantity: 0,
  },
  {
    id: 9,
    name: "Product 9",
    category: "Electronics",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    cartQuantity: 0,
  },
  {
    id: 10,
    name: "Product 10",
    category: "Cosmetics",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1531895861208-8504b98fe814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    cartQuantity: 0,
  },
];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Evaluation RCT-201-B23-C2", () => {
    let acc_score = 1;

    beforeEach(() => {
      cy.visit(url);

      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    afterEach(() => {
      acc_score = Number(acc_score.toFixed(2));
    });

    //Read - 2 marks
    it("Check for initial Redux structure", () => {
      cy.window().then(getAppReducer).should("deep.equal", {
        products: [],
        isLoading: false,
        isError: false,
      });
    });

    it("Check if the number of cards displayed is 10 with Product Card", () => {
      cy.intercept("GET", "**/products").as("products");
      cy.visit(url);
      cy.wait("@products");
      cy.then(() => {
        acc_score += 0.5;
      });
      cy.get("[data-cy^=product-card-name]").should("have.length", 10);
      cy.then(() => {
        acc_score += 0.5;
      });
    });

    it("Check if the Card component contains all the required information", () => {
      databaseData.forEach((singleProduct) => {
        cy.get(`[data-cy='product-card-${singleProduct.id}']`).within(() => {
          cy.get("[data-cy=product-card-name]").contains(singleProduct.name);
          cy.get("[data-cy=product-card-category]").contains(
            singleProduct.category
          );
          cy.get("[data-cy=product-card-price]").contains(singleProduct.price);
          cy.get("[data-cy=product-card-image]")
            .should("have.attr", "src")
            .should("include", singleProduct.image);
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    // Add Product functionality - 2 marks
    it("Should redirect/navigate the user to the Add page when the button on the navbar is clicked", () => {
      cy.get("[data-cy=add-product-navbar-button]").click();
      cy.url().should("eq", `${url}add`);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should be able to add title, category, imageURL, and price for the product", () => {
      cy.get("[data-cy=add-product-navbar-button]").click();
      cy.url().should("eq", `${url}add`);
      cy.get("[data-cy=add-product-title]").type("Testing Product 1");
      cy.get("[data-cy=add-product-category]").select("Electronics");
      cy.get("[data-cy=add-product-image]").type(
        "https://via.placeholder.com/800"
      );
      cy.get("[data-cy=add-product-price]").clear().type("267");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should make a POST request, with all the product data in the correct format inside the payload, and redirects the user to the Homepage, where the newly added product is in the UI", () => {
      cy.intercept("POST", "**/products", {
        name: "Testing Product 1",
        category: "Electronics",
        image:
          "https://images.pexels.com/photos/11022596/pexels-photo-11022596.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        price: 267,
        cartQuantity: 0,
      }).as("postRequest");

      cy.get("[data-cy=add-product-navbar-button]").click();
      cy.url().should("eq", `${url}add`);
      cy.get("[data-cy=add-product-title]").type("Testing Product 1");
      cy.get("[data-cy=add-product-category]").select("Electronics");
      cy.get("[data-cy=add-product-image]").type(
        "https://images.pexels.com/photos/11022596/pexels-photo-11022596.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
      );
      cy.get("[data-cy=add-product-price]").clear().type("267");
      cy.get("[data-cy=add-product-button]").click();
      cy.wait("@postRequest").its("request.body").should("deep.equal", {
        name: "Testing Product 1",
        price: "267",
        image:
          "https://images.pexels.com/photos/11022596/pexels-photo-11022596.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        category: "Electronics",
        cartQuantity: 0,
      });

      cy.then(() => {
        acc_score += 2.0;
      });

      cy.url().should("eq", `${url}`);
      cy.get("[data-cy=product-card-name]").should(($div) => {
        const text = $div.text();
        expect(text).to.include("Testing Product 1");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    //Cart Count Functionality - 3 marks
    it("should be able to add the product quantity, in the ProductCart component", () => {
      cy.intercept("PATCH", "**/products/2", (req, res) => {
        expect(req.body).to.include({ cartQuantity: 1 });
        req.reply({
          body: {
            id: 2,
            name: "Product 2",
            category: "Cosmetics",
            image:
              "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            price: 15,
            cartQuantity: 1,
          },
        });
      }).as("patchRequest");

      cy.get("[data-cy=product-card-2]").within(() => {
        cy.get("[data-cy=add-to-cart]").click();
      });

      cy.wait("@patchRequest");
      cy.get("[data-cy=product-card-2]").within(() => {
        cy.get("[data-cy=product-quantity]").should("have.text", 1);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("should be able to reduce the product quantity, in the ProductCart component", () => {
      cy.intercept("PATCH", "**/products/3", (req, res) => {
        expect(req.body).to.include({ cartQuantity: 2 });
        req.reply({
          body: {
            id: 3,
            name: "Product 3",
            category: "Cosmetics",
            image:
              "https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            price: 15,
            cartQuantity: 2,
          },
        });
      }).as("patchRequest");
      cy.get("[data-cy=product-card-3]").within(() => {
        cy.get("[data-cy=remove-from-cart]").click();
      });
      cy.wait("@patchRequest");
      cy.get("[data-cy=product-card-3]").within(() => {
        cy.get("[data-cy=product-quantity]").should("have.text", 2);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("the count on the navbar should increase on adding different products", () => {
      cy.intercept("PATCH", "**/products/1", {
        id: 1,
        name: "Product 1",
        category: "Electronics",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 10,
        cartQuantity: 1,
      }).as("patchRequest1");
      cy.intercept("PATCH", "**/products/5", {
        id: 5,
        name: "Product 5",
        category: "Electronics",
        image:
          "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        price: 17,
        cartQuantity: 1,
      }).as("patchRequest5");
      cy.get("[data-cy=product-card-1]").within(() => {
        cy.get("[data-cy=add-to-cart]").click();
        cy.wait("@patchRequest1");
      });
      cy.get("[data-cy=product-card-5]").within(() => {
        cy.get("[data-cy=add-to-cart]").click();
        cy.wait("@patchRequest5");
      });

      cy.get("[data-cy=navbar-cart-count]").should("have.text", 3);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("should show only the products that have some quantity in the cart page", () => {
      cy.get("[data-cy=cart-image-link]").click();
      cy.url().should("eq", `${url}cart`);
      cy.get("[data-cy=product-card-name]").should(($div) => {
        const text = $div.text();
        expect(text).to.not.include("Product 7");
        expect(text).to.include("Product 3");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    //Delete Functionality - 2 marks
    it("Should make a DELETE Api request when the user clicks on the Delete button on the Product card. The data should be removed from the db.json file, and it should be removed from the UI as well", () => {
      cy.intercept("DELETE", "**/products/3", (req, res) => {
        req.reply({ body: {} });
      }).as("deleteRequest");
      cy.get("[data-cy=product-card-3]").within(() => {
        cy.get("[data-cy=delete-button]").click();
      });
      cy.wait("@deleteRequest");
      cy.then(() => {
        acc_score += 1;
      });
      cy.url().should("eq", `${url}`);
      cy.get("[data-cy=product-card-name]").should(($div) => {
        const text = $div.text();
        expect(text).to.not.include("Product 3");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`Generate Score`, async () => {
      console.log(`Final Score:`, acc_score);
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});
