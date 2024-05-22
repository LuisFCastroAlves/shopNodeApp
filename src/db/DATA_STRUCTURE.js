
const users = {
    "email": "",
    "hash": "",
    "name": "",
    "role": "",
    "cart_id_ref": ""
}

const products_list = {
    "product_name": "",
    "description": {
        "alc_vol": "",
        "location": "",
    },
    "price": "",
    "discount": "",
    "image_url": ""
}

const cart = {
    "user_id_ref": "",
    "array_products": [
        {
            "product_id_ref": "",
            "quantity": ""
        }
    ]
}

const orders = {
    "user_id_ref": "",
    "status": "",
    "array_products": [
        {
            "product_info": {
                "product_name": "",
                "description": {
                    "alc_vol": "",
                    "type": "",
                    "location": "",
                },
                "price": "",
                "image_url": ""
            },
            "quantity": ""
        }
    ]
}

// Aggregation "SearchUserDetailsByOrderID"
/*
[{
    $match: {
      _id: ObjectId("664e1ad15bf80806d8c8297c")
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "user_id_ref",
      foreignField: "_id",
      as: "user_details"
    }
  },
  {
    $unwind: {
      path: "$user_details",
      preserveNullAndEmptyArrays: true
    }
  }]
*/


// Aggregation "Cart_LookUpToGetProductDetail"
/*[{
    $match: {
      "user_id_ref": ObjectId("664e18135bf80806d8c82976")
    }
  },
  {
    $unwind: {
      path: "$array_products",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $lookup: {
      from: "products_list",
      localField: "array_products.product_id_ref",
      foreignField: "_id",
      as: "array_products.product_details"
    }
  },
  {
    $unwind: {
      path: "$array_products.product_details",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $group: {
      _id: "$_id",
      user_id_ref: { $first: "$user_id_ref" },
      array_products: {
        $push: {
          product_id_ref:
            "$array_products.product_id_ref",
          quantity: "$array_products.quantity",
          product_details:
            "$array_products.product_details"
        }
      }
    }
  }]*/