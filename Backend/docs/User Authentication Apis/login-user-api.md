## Login User Endpoint

Authenticates a user and provides an access token.

### Endpoint Details

- **Function**: `loginUser`
- **Type**: Asynchronous
- **Method**: POST

### Request Parameters

| Parameter | Type   | Required | Description          |
| --------- | ------ | -------- | -------------------- |
| email     | string | Yes      | User's email address |
| password  | string | Yes      | User's password      |

### Request Body Example

```json
{
    "email": "john.doe@example.com",
    "password": "securepassword123"
}

Copy

Insert at cursor
Response
Returns a JSON object containing:

Authentication token

User details

Success Response Example
{
    "token": "jwt_token_string_here",
    "user": {
        "_id": "user_id",
        "email": "john.doe@example.com",
        "firstname": "John",
        "lastname": "Doe"
        // other user details
    }
}

Copy

Insert at cursor
Error Responses
Invalid Credentials (Status Code: 401)

{{
    "message": "Invalid email or password"
}

Copy

Insert at cursor
User Not Found (Status Code: 401)

{
   {
    "message": "User not found bcz invalid email or password"
}

Copy

Insert at cursor
Validation Error (Status Code: 400)

{
   {
    "errors": [
        {
            "field": "email",
            "message": "Invalid email format"
        }
        // other validation errors
    ]
}

Copy

Insert at cursor
Security Features
Password comparison using secure methods

JWT token generation for authenticated sessions

Password is not included in the response

Implementation Notes
Uses express-validator for input validation

Implements JWT for authentication

Performs secure password comparison

Returns user details along with authentication token

Password field is explicitly selected from database for comparison

Authentication Flow
Validates request body

Checks if user exists in database

Compares provided password with stored hash

Generates JWT token upon successful authentication

Returns token and user details


This documentation provides:
1. Clear endpoint specifications
2. Request/response formats
3. Error scenarios and their responses
4. Security considerations
5. Implementation details
6. Authentication flow explanation


```
