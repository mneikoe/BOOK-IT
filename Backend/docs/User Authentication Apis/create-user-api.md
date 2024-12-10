User API Documentation

## Create User Endpoint

Creates a new user in the system.

### Endpoint Details

- **Function**: `createUser`
- **Type**: Asynchronous
- **Method**: POST

### Request Parameters

| Parameter | Type   | Required | Description             |
| --------- | ------ | -------- | ----------------------- |
| firstname | string | Yes      | User's first name       |
| lastname  | string | No       | User's last name        |
| email     | string | Yes      | User's email address    |
| password  | string | Yes      | User's account password |

### Request Body Example

```json
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "securepassword123"
}

Copy

Insert at cursor
Response
Returns the created user object.

Data Storage
Uses MongoDB (mongoose) as the database

Stores full name as a nested object:

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  }
}


Insert at cursor
Error Handling
Throws an error if any required fields are missing:

firstname

email

password

Implementation Notes
The function is asynchronous and returns a Promise

Password should be properly hashed before storage (current implementation doesn't include hashing)

Email uniqueness should be validated (consider adding this validation)


This markdown file provides a clean, well-structured documentation that:
1. Clearly describes the API endpoint
2. Lists all parameters with their requirements
3. Shows example usage
4. Includes implementation details
5. Provides error handling information
6. Adds helpful implementation notes

The markdown format allows for easy reading both in text editors and when rendered on documentation platforms.
```
