define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/create",
    "title": "Create a product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategory",
            "description": "<p>subCategory of the product passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detailsHtml",
            "description": "<p>detailsHtml of the product passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specification",
            "description": "<p>specification of the product passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inStock",
            "description": "<p>inStock true or false for product passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warranty",
            "description": "<p>warranty of the product passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "addToCart",
            "description": "<p>addToCart true or false for product passed as body parameter by default it will be set to false</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\"err\": false,\n    \"message\": \"success\",\n    \"status\": 200,\n    \"data\": {\n        \"inStock\": true,\n        \"warranty\": \"n/a\",\n        \"addToCart\": true,\n        \"_id\": \"5b27f21e6786a5273c58fe3e\",\n        \"warrenty\": \"1 year warrenty from seller\",\n        \"id\": \"Hkw7zOrbQ\",\n        \"name\": \"one plus 6T\",\n        \"category\": \"Electronics\",\n        \"subCategory\": \"mobiles\",\n        \"price\": 30000,\n        \"detailsHtml\": \"Avaliable only on amazon, best camera phone money can buy\",\n        \"specification\": \"20mp primary camera, the best at half the price\",\n        \"__v\": 0\n        \t\t}\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error while searching\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mainRoute.js",
    "groupTitle": "create",
    "name": "PostApiV1Create"
  },
  {
    "type": "post",
    "url": "/api/v1/:id/delete",
    "title": "delete a product",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the product passed as url parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\"err\": false,\n    \"message\": \"success\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"n\": 1\n\n        \t\t}\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error while searching\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mainRoute.js",
    "groupTitle": "delete",
    "name": "PostApiV1IdDelete"
  },
  {
    "type": "get",
    "url": "/api/v1/view/all/products",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"err\": false,\n    \"message\": \"success\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"inStock\": true,\n            \"warrenty\": \"1 year warrenty from seller\",\n            \"addToCart\": true,\n            \"id\": \"Hkw7zOrbQ\",\n            \"name\": \"one plus 6T\",\n            \"category\": \"Electronics\",\n            \"subCategory\": \"mobiles\",\n            \"price\": 30000,\n            \"detailsHtml\": \"Avaliable only on amazon, best camera phone money can buy\",\n            \"specification\": \"20mp primary camera, the best at half the price\",\n            \"warranty\": \"n/a\"\n    \t\t\t\t}\n\t    \t\t]\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error while searching\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mainRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1ViewAllProducts"
  },
  {
    "type": "get",
    "url": "/api/v1/view/category/:category",
    "title": "Get all products in a category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"err\": false,\n    \"message\": \"success\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"inStock\": true,\n            \"warrenty\": \"1 year warrenty from seller\",\n            \"addToCart\": true,\n            \"id\": \"Hkw7zOrbQ\",\n            \"name\": \"one plus 6T\",\n            \"category\": \"Electronics\",\n            \"subCategory\": \"mobiles\",\n            \"price\": 30000,\n            \"detailsHtml\": \"Avaliable only on amazon, best camera phone money can buy\",\n            \"specification\": \"20mp primary camera, the best at half the price\",\n            \"warranty\": \"n/a\"\n    \t\t\t\t}\n\t    \t\t]\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error while searching\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mainRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1ViewCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/view/:id",
    "title": "Get a single product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"err\": false,\n    \"message\": \"success\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"inStock\": true,\n            \"warrenty\": \"1 year warrenty from seller\",\n            \"addToCart\": true,\n            \"id\": \"Hkw7zOrbQ\",\n            \"name\": \"one plus 6T\",\n            \"category\": \"Electronics\",\n            \"subCategory\": \"mobiles\",\n            \"price\": 30000,\n            \"detailsHtml\": \"Avaliable only on amazon, best camera phone money can buy\",\n            \"specification\": \"20mp primary camera, the best at half the price\",\n            \"warranty\": \"n/a\"\n    \t\t\t\t}\n\t    \t\t]\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error while searching\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mainRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1ViewId"
  },
  {
    "type": "get",
    "url": "/api/v1/view/subCategory/:subCategory",
    "title": "Get all products in a sub category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategory",
            "description": "<p>The subCategory should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"err\": false,\n    \"message\": \"success\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"inStock\": true,\n            \"warrenty\": \"1 year warrenty from seller\",\n            \"addToCart\": true,\n            \"id\": \"Hkw7zOrbQ\",\n            \"name\": \"one plus 6T\",\n            \"category\": \"Electronics\",\n            \"subCategory\": \"mobiles\",\n            \"price\": 30000,\n            \"detailsHtml\": \"Avaliable only on amazon, best camera phone money can buy\",\n            \"specification\": \"20mp primary camera, the best at half the price\",\n            \"warranty\": \"n/a\"\n    \t\t\t\t}\n\t    \t\t]\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error while searching\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mainRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1ViewSubcategorySubcategory"
  },
  {
    "type": "post",
    "url": "/api/v1/view/cart/",
    "title": "View contents of the cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\"err\": false,\n    \"message\": \"success\",\n    \"status\": 200,\n    \"data\": {\n        \"inStock\": true,\n        \"warranty\": \"n/a\",\n        \"addToCart\": true,\n        \"_id\": \"5b27f21e6786a5273c58fe3e\",\n        \"warrenty\": \"1 year warrenty from seller\",\n        \"id\": \"Hkw7zOrbQ\",\n        \"name\": \"one plus 6T\",\n        \"category\": \"Electronics\",\n        \"subCategory\": \"mobiles\",\n        \"price\": 30000,\n        \"detailsHtml\": \"Avaliable only on amazon, best camera phone money can buy\",\n        \"specification\": \"20mp primary camera, the best at half the price\",\n        \"__v\": 0\n        \t\t}\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error while searching\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mainRoute.js",
    "groupTitle": "read",
    "name": "PostApiV1ViewCart"
  },
  {
    "type": "put",
    "url": "/api/v1/addToCart/:id",
    "title": "Add the product to cart",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the product should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\"err\": false,\n    \"message\": \"Successfully added product to cart\",\n    \"status\": 200,\n    \"data\": {\n        \"inStock\": true,\n        \"warranty\": \"n/a\",\n        \"addToCart\": true,\n        \"_id\": \"5b27f21e6786a5273c58fe3e\",\n        \"warrenty\": \"1 year warrenty from seller\",\n        \"id\": \"Hkw7zOrbQ\",\n        \"name\": \"one plus 6T\",\n        \"category\": \"Electronics\",\n        \"subCategory\": \"mobiles\",\n        \"price\": 30000,\n        \"detailsHtml\": \"Avaliable only on amazon, best camera phone money can buy\",\n        \"specification\": \"20mp primary camera, the best at half the price\",\n        \"__v\": 0\n        \t\t}\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error while searching\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mainRoute.js",
    "groupTitle": "update",
    "name": "PutApiV1AddtocartId"
  },
  {
    "type": "put",
    "url": "/api/v1/:id/update",
    "title": "modify a product",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the product passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>to be modified passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\"err\": false,\n    \"message\": \"success\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"nModified\": 1,\n        \"n\": 1\n    \t\t}\n\t    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error while searching\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mainRoute.js",
    "groupTitle": "update",
    "name": "PutApiV1IdUpdate"
  }
] });
