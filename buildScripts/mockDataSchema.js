var schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 5,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName",
            "minimum": 5            
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName",
            "minimum": 5            
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          },
          "avatar": {
            "type": "image",
            "faker": "avatar"
          }
        },
        "required": ["id", "type", "firstName", "lastName", "email", "avatar"]
      }
    },
    "posts": {
      "type": "array",
      "minItems": 5,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "title": {
            "type": "string",
            "faker": "name.firstName",
            "minimum": 5            
          },
          "body": {
            "type": "string",
            "faker": "name.lastName",
            "minimum": 5            
          },
          "author": {
            "type": "string",
            "faker": "name.findName"
          },
          "avatar": {
            "type": "image",
            "faker": "image.imageUrl"
          }          
        },
        "required": ["id", "title", "body", "author", "avatar"]
      }
    },
    "comments": {
      "type": "array",
      "minItems": 5,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "username": {
            "type": "string",
            "faker": "name.findName",
            "minimum": 5            
          },
          "body": {
            "type": "string",
            "faker": "lorem.paragraph",
            "minimum": 5            
          },
          "avatar": {
            "type": "image",
            "faker": "image.imageUrl"
          }
        },
        "required": ["id", "username", "body", "avatar"]
      }
    }        
  },
  "required": ["users", "posts", "comments"]
};

module.exports = schema;
