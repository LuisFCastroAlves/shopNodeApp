# BE Project briefing

## Project Overview:

The aim of this project is to develop a full-stack web application for an online store. The application will include both frontend and backend components, with a particular focus on the backend development.
The web store will allow users to browse products, add them to a shopping cart, and complete the purchase process.

## Key features

### Product Catalog:

Develop a product catalog where users can view available products, along with details such as name, description, price, and images.

### Shopping Cart:

Implement a shopping cart feature that allows users to add products, update quantities, and remove items before proceeding to checkout. The shopping cart should be stored in a database so the users can pick it up and continue their purchase later.

### Checkout Process:

Develop a mock checkout process that guides users through entering shipping and payment information, and completing the purchase. No payment methods are needed the only payment method available can be “Payment on delivery”

### Order Management:

Create functionality for users to view their order history and track the status of their orders.

## Bonus features

### User Authentication:

Implement user authentication functionality to allow users to create accounts, login, and logout.

### Admin Panel:

Implement an admin panel where authorised users can manage products, orders, and user accounts. Admins should be able to add, edit, and delete products, view and manage orders, and manage user accounts.

## Technology Stack:

### Backend:

- REST API with JSON payload
  - Laravel or Node/Express
- Database
  - MySQL or MongoDB

### Frontend:

- React

## Inspiration:

- [Fake Store API](https://fakestoreapi.com)

## Considerations:

- Higher focus on the BE, the FE should not be completely neglected but the BE is the star this time
- You are allowed (and even encouraged) to ask your classmates for help or help them
- You can ask the teacher for support at any time

## Submission:

Submission deadline is on the `31st of June` To submit the project, send us an email with the following information:

- Project:
  - Link to your project’s Github repository or repositories
- Send it to Helder

# Accounts

## User

```
{
	"email": "helder@example.com",
	"password": "123456789",
	"name": "Helder"
}
Token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjgxMjA3NDQ0NGNiYjk1ZTAzMjY0NjQiLCJlbWFpbCI6ImhlbGRlckBleGFtcGxlLmNvbSIsImlhdCI6MTcxOTczODY0OSwiZXhwIjoxNzIyMzMwNjQ5fQ.UfNsvNI6TbKK3uED9upXude54NEWDnbPJs-hr10Hey0
```

## Admin

```
{
	"email": "helderAdmin@example.com",
	"password": "123456789",
	"name": "Helder"
}
Token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjgxMjE2OTQ0NGNiYjk1ZTAzMjY0NjYiLCJlbWFpbCI6ImhlbGRlckFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE5NzM4NzYyLCJleHAiOjE3MjIzMzA3NjJ9.6QFpDS5hZsIsfyNxF7vtTryk8ti_tZ2NslRnt7xn4Tw
```

# ROUTES

## Auth:

- Public

  - User Register | [POST] - { /user/register }

    ```
      Body JSON
      {
        "email": "md_example@example.com",
        "password": "123456789",
        "name": "MD Example"
      }

      Res JSON
      {
        "status": "OK",
        "message": "User created",
        "user": {
          "acknowledged": true,
          "insertedId": "6679a5ad34d16079429376bb"
        }
      }
    ```

  - User Log In | [POST] - { /user/login }

    ```
      Body JSON
      {
        "email": "md_example@example.com",
        "password": "123456789"
      }

      Res JSON
      {
        "status": "Ok",
        "message": "User logged in",
        "token": "..."
      }
    ```

  - User Name Update | [PUT] - { /user/update/name}

    ```
      Require User token in header

      Body JSON
      {
        "name": "MD Example Update"
      }

      Res JSON
      {
        "status": "OK",
        "message": "Username Updated",
        "user": {
          "acknowledged": true,
          "modifiedCount": 1,
          "upsertedId": null,
          "upsertedCount": 0,
          "matchedCount": 1
        }
      }
    ```

  - User Email Update | [PUT] - { /user/update/email }

    ```
      Require User token in header

      Body JSON
      {
        "email": "md_example_update@example.com"
      }

      Res JSON
      {
        "status": "OK",
        "message": "Email Updated",
        "user": {
          "acknowledged": true,
          "modifiedCount": 1,
          "upsertedId": null,
          "upsertedCount": 0,
          "matchedCount": 1
        }
      }
    ```

  - User Password Update | [PUT] - { /user/update/password }

    ```
      Require User token in header

      Body JSON
      {
        "password": "1234567890"
      }

      Res JSON
      {
        "status": "OK",
        "message": "Password Updated",
        "user": {
          "acknowledged": true,
          "modifiedCount": 1,
          "upsertedId": null,
          "upsertedCount": 0,
          "matchedCount": 1
        }
      }
    ```

- Private

  - User Delete By ID | [DELETE] - { /admin/user/remove/:id }

    ```
      Require Admin token in header

      Res JSON
      {
        "status": "Deleted",
        "message": "User deleted",
        "user": {
          "acknowledged": true,
          "deletedCount": 1
        }
      }
    ```

  - User Name Update By ID | [PUT] - { /admin/user/update/name/:id }

    ```
      Require Admin token in header

      Body JSON
      {
        "name": "MD Example Update By Admin"
      }

      Res JSON
      {
        "status": "OK",
        "message": "Username Updated",
        "user": {
          "acknowledged": true,
          "modifiedCount": 1,
          "upsertedId": null,
          "upsertedCount": 0,
          "matchedCount": 1
        }
      }
    ```

  - User Email Update By ID | [PUT] - { /admin/user/update/email/:id }

    ```
      Require Admin token in header

      Body JSON
      {
        "email": "md_example_updated_by_admin@example.com"
      }

      Res JSON
      {
        "status": "OK",
        "message": "Email Updated",
        "user": {
          "acknowledged": true,
          "modifiedCount": 1,
          "upsertedId": null,
          "upsertedCount": 0,
          "matchedCount": 1
        }
      }
    ```

  - User Password Update | [PUT] - { /admin/user/update/password/:id }

    ```
      Require Admin token in header

      Body JSON
      {
        "password": "1234567890-admin"
      }

      Res JSON
      {
        "status": "OK",
        "message": "Password Updated",
        "user": {
          "acknowledged": true,
          "modifiedCount": 1,
          "upsertedId": null,
          "upsertedCount": 0,
          "matchedCount": 1
        }
      }
    ```

  - Admin Register | [POST] - { /admin/register }

    ```
      Require Admin token in header

      Body JSON
      {
        "email": "md_example_admin@example.com",
        "password": "123456789",
        "name": "MD Example Admin"
      }

      Res JSON
      {
        "status": "OK",
        "message": "Admin created",
        "admin": {
          "acknowledged": true,
          "insertedId": "6679b0dd34d16079429376bd"
        }
      }
    ```

  - Admin Log In | [POST] - { /admin/login }

    ```
      Body JSON
      {
        "email": "md_example_admin@example.com",
        "password": "123456789"
      }

      Res JSON
      {
        "status": "Ok",
        "message": "Admin logged in",
        "token": "..."
      }
    ```

  - Admin Delete By ID | [DELETE] - { /admin/remove:id }

    ```
      Require Admin  token in header

      Res JSON
      {
        "status": "Deleted",
        "message": "Admin deleted",
        "admin": {
          "acknowledged": true,
          "deletedCount": 1
        }
      }
    ```

  - Admin Name Update | [PUT] - { /admin/update/name }

    ```
      Require Admin  token in header

      Body JSON
      {
        "name": "MD Example Admin Update"
      }

      Res JSON
      {
        "status": "OK",
        "message": "Admin Name Updated",
        "admin": {
          "acknowledged": true,
          "modifiedCount": 1,
          "upsertedId": null,
          "upsertedCount": 0,
          "matchedCount": 1
        }
      }
    ```

  - Admin Email Update | [PUT] - { /admin/update/email }

    ```
      Require Admin  token in header

      Body JSON
      {
        "email": "md_example_admin_update@example.com"
      }

      Res JSON
      {
        "status": "OK",
        "message": "Email Updated",
        "admin": {
          "acknowledged": true,
          "modifiedCount": 1,
          "upsertedId": null,
          "upsertedCount": 0,
          "matchedCount": 1
        }
      }
    ```

  - Admin Password Update | [PUT] - { /admin/update/password }

    ```
      Require Admin  token in header

      Body JSON
      {
        "password": "123456789-update"
      }

      Res JSON
      {
        "status": "OK",
        "message": "Password Updated",
        "admin": {
          "acknowledged": true,
          "modifiedCount": 1,
          "upsertedId": null,
          "upsertedCount": 0,
          "matchedCount": 1
        }
      }
    ```

## Products:

- Public

  - Get All Products | [GET] - { /products/all }

  - Get Product By ID | [GET] - { /products/:id }

- Private:

  - Get All Products | [GET] - { /admin/products/all }

  - Get Product By ID | [GET] - { /admin/products/:id }
  - Add Product | [POST] - { /admin/products/add }

    ```
      Require Admin token in header

      Body JSON
      {
        "product_name": "Agricola Grillos Cantores Corinto Flor",
        "description": {
          "alc_vol": "12.5",
          "location": "Guarilihue, Itata"
        },
        "price": "24",
        "discount": "0",
        "image_url": "https://d2j6dbq0eux0bg.cloudfront.net/images/20661212/3636883593.png",
        status: "stock"
      }

      Res JSON
      {
        "acknowledged": true,
        "insertedId": "6679b7b734d16079429376be"
      }
    ```

  - Update Product By ID | [PUT] - { /admin/products/update/:id }

    ```
      Require Admin token in header

      Body JSON
      {
        "price": "21",
        "discount": "10"
      }

      Res JSON
      {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
      }
    ```

  - Delete Product By ID | [PUT] - { /admin/products/remove/:id }

    ```
      Require Admin token in header

      Res JSON
      {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
      }
    ```

## Cart:

- Public:

  - Get Cart | [GET] - { /cart }

    ```
      Require User token in header
    ```

  - Add Product To Cart | [PUT] - { /cart/add }

    ```
      Require User token in header

      Body JSON
      {
        "product_id_ref": "664e16475bf80806d8c82971",
          "quantity": 3
      }

      Res JSON
      {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
      }
    ```

  - Update Product Quantity | [PUT] - { /cart/update/quantity }

    ```
      Require User token in header

      Body JSON
      {
        "product_id_ref": "664e16475bf80806d8c82971",
          "quantity": 3
      }

      Res JSON
      {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
      }
    ```

  - Remove Product From Cart | [PUT] - { /cart/remove }

    ```
      Require User token in header

      Body JSON
      {
        "product_id_ref": "664e16475bf80806d8c82971",
          "quantity": 3
      }

      Res JSON
      {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
      }
    ```

## Order:

- Public:

  - Create Order | [POST] - { /order/create }

    ```
      Require User token in header

      Body JSON
      {
        "payment_method": "Cash",
        "address": "Infantado, Loures, Lisboa, Portugal"
      }

      Res JSON
      {
        "acknowledged": true,
        "insertedId": "6679bfb09e6e4926249f807c"
      }
    ```

  - Get Orders | [GET] - { /order/all }

    ```
      Require User token in header

      Res JSON
      [
        {
          "_id": "6679c11d9e6e4926249f807d",
          "user_id_ref": "6679a5ad34d16079429376bb",
          "payment_method": "Cash",
          "payment_price": "50",
          "status": "pending",
          "address": "Infantado, Loures, Lisboa, Portugal",
          "array_products": [
            {
              "product": {
                "_id": "664e16475bf80806d8c82971",
                "product_name": "Prisma Pinot Noir Rosé",
                "description": {
                  "alc_vol": "13",
                  "location": "Casablanca, Itata, and Maule"
                },
                "price": 17,
                "discount": 0,
                "image_url": "https://132373155.cdn6.editmysite.com/uploads/1/3/2/3/132373155/s778301575987528839_p33_i1_w2560.jpeg?width=2400&optimize=medium"
              },
              "quantity": 2
            }
          ]
        },
        {
          "_id": "6679c1b19e6e4926249f807f",
          "user_id_ref": "6679a5ad34d16079429376bb",
          "payment_method": "Cash",
          "payment_price": "142",
          "status": "pending",
          "address": "Infantado, Loures, Lisboa, Portugal",
          "array_products": [
            {
              "product": {
                "_id": "6652231f2031e51a6c062475",
                "product_name": "Viño Do Porto",
                "description": {
                  "alc_vol": "11",
                  "location": "Porto, Portugal"
                },
                "price": 25,
                "discount": 0,
                "image_url": "https://www.winespiritus.com/5767-large_default/porto-ferreira-tawny-vino-oporto.jpg"
              },
              "quantity": 5
            },
            {
              "product": {
                "_id": "664e16475bf80806d8c82971",
                "product_name": "Prisma Pinot Noir Rosé",
                "description": {
                  "alc_vol": "13",
                  "location": "Casablanca, Itata, and Maule"
                },
                "price": 17,
                "discount": 0,
                "image_url": "https://132373155.cdn6.editmysite.com/uploads/1/3/2/3/132373155/s778301575987528839_p33_i1_w2560.jpeg?width=2400&optimize=medium"
              },
              "quantity": 2
            }
          ]
        }
      ]
    ```

  - Get Order By Id | [GET] - { /order/:id }

    ```
      Require User token in header

      Res JSON
      {
        "_id": "6679c1b19e6e4926249f807f",
        "user_id_ref": "6679a5ad34d16079429376bb",
        "payment_method": "Cash",
        "payment_price": "142",
        "status": "pending",
        "address": "Infantado, Loures, Lisboa, Portugal",
        "array_products": [
          {
            "product": {
              "_id": "6652231f2031e51a6c062475",
              "product_name": "Viño Do Porto",
              "description": {
                "alc_vol": "11",
                "location": "Porto, Portugal"
              },
              "price": 25,
              "discount": 0,
              "image_url": "https://www.winespiritus.com/5767-large_default/porto-ferreira-tawny-vino-oporto.jpg"
            },
            "quantity": 5
          },
          {
            "product": {
              "_id": "664e16475bf80806d8c82971",
              "product_name": "Prisma Pinot Noir Rosé",
              "description": {
                "alc_vol": "13",
                "location": "Casablanca, Itata, and Maule"
              },
              "price": 17,
              "discount": 0,
              "image_url": "https://132373155.cdn6.editmysite.com/uploads/1/3/2/3/132373155/s778301575987528839_p33_i1_w2560.jpeg?width=2400&optimize=medium"
            },
            "quantity": 2
          }
        ]
      }
    ```

- Private:

  - Get All Orders | [GET] - { admin/order/all }

    ```
      Require Admin token in header

      Res JSON
      [
        "_id": "66564330212ec787f85cfcaf",
        "user_id_ref": "664e18135bf80806d8c82976",
        "payment_method": "Pago en entrega",
        "payment_price": 180,
        "status": "Received",
        "address": "Infantado, Loures, PT",
        "array_products": [
          {
            "product": {
              "_id": "664e16475bf80806d8c82971",
              "product_name": "Prisma Pinot Noir Rosé",
              "description": {
                "alc_vol": "13%",
                "location": "Casablanca, Itata, and Maule"
              },
              "price": 17,
              "discount": 0,
              "image_url": "https://132373155.cdn6.editmysite.com/uploads/1/3/2/3/132373155/s778301575987528839_p33_i1_w2560.jpeg?width=2400&optimize=medium"
            },
            "quantity": 2
          },
          {
            "product": {
              "_id": "6652231f2031e51a6c062475",
              "product_name": "Viño Do Porto",
              "description": {
                "alc_vol": "11%",
                "location": "Porto, Portugal"
              },
              "price": 25,
              "discount": 0,
              "image_url": "https://www.winespiritus.com/5767-large_default/porto-ferreira-tawny-vino-oporto.jpg"
            },
            "quantity": 3
          }
        ]
      ]
    ```

  - Get Order By User ID | [GET] - { admin/order/user/:id }

    ```
      Require Admin token in header
    ```

  - Get Order By ID | [GET] - { admin/order/:id }

    ```
      Require Admin token in header
    ```

  - Update Order Status By ID | [PUT] - { admin/order/update/:id }

    ```
      Require User token in header

      Body JSON
      {
        "status": "Delivered"
      }

      Res JSON
      {
        "acknowledged": true,
        "insertedId": "6679bfb09e6e4926249f807c"
      }
    ```

  - Delete Order By Id | [DELETE] - { admin/order/delete/:id }

    ```
      Require User token in header

      Res JSON
      {
        "acknowledged": true,
        "deletedCount": 1
      }
    ```
