/\*\*

- @api {get} /api/user/logout Logout User
- @apiName LogoutUser
- @apiGroup User Authentication
-
- @apiHeader {String} Authorization Bearer token required for authentication
- @apiHeaderExample {json} Header-Example:
-     {
-       "Authorization": "Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
-     }
-
- @apiSuccess {Boolean} success Indicates if the logout was successful
- @apiSuccess {String} message Success message
-
- @apiSuccessExample {json} Success-Response:
-     HTTP/1.1 200 OK
-     {
-       "success": true,
-       "message": "Successfully logged out"
-     }
-
- @apiError Unauthorized Invalid or missing authentication token
- @apiErrorExample {json} Error-Response:
-     HTTP/1.1 401 Unauthorized
-     {
-       "success": false,
-       "message": "Authentication required"
-     }
-
- @apiDescription This endpoint allows authenticated users to logout from the system.
- The endpoint invalidates the current session/token.
- Authentication middleware (authMiddleware.authUser) is required.
-
- @apiPermission Authenticated User
-
- @apiVersion 1.0.0
  \*/

Copy

Insert at cursor
This documentation follows the apiDoc format and includes:

The HTTP method (GET) and endpoint path

API name and group for organizational purposes

Required headers (Authorization token)

Success response format and example

Error response format and example

Description of the endpoint's functionality

Permission requirements

API version

The documentation clearly shows that:

The endpoint requires authentication via a Bearer token

It's a GET request

The successful response will include a success flag and message

Possible error scenarios are documented

The middleware requirement is mentioned
