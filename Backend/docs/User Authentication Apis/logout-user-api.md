/\*\*

- @api {get} /users/logout Logout User
- @apiName LogoutUser
- @apiGroup Authentication
- @apiVersion 1.0.0
-
- @apiDescription Logs out the currently authenticated user by invalidating their session.
- Requires a valid authentication token to access this endpoint.
-
- @apiHeader {String} Authorization Bearer token for user authentication
- @apiHeaderExample {json} Header-Example:
- {
-     "Authorization": "Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
- }
-
- @apiSuccess (200) {Boolean} success Indicates successful logout
- @apiSuccess (200) {String} message Confirmation message of successful logout
-
- @apiSuccessExample {json} Success-Response:
- HTTP/1.1 200 OK
- {
-     "success": true,
-     "message": "User logged out successfully"
- }
-
- @apiError (401) Unauthorized Missing or invalid authentication token
- @apiErrorExample {json} Unauthorized-Error:
- HTTP/1.1 401 Unauthorized
- {
-     "success": false,
-     "message": "Authentication token is required"
- }
-
- @apiError (403) Forbidden Invalid or expired authentication token
- @apiErrorExample {json} Forbidden-Error:
- HTTP/1.1 403 Forbidden
- {
-     "success": false,
-     "message": "Invalid or expired token"
- }
-
- @apiSampleRequest /users/logout
-
- @apiPermission Authenticated User
-
- @apiNote This endpoint requires the authMiddleware.authUser middleware for authentication verification
  \*/

Copy

Insert at cursor
This documentation includes:

Basic Information:

HTTP Method: GET

Endpoint: /users/logout

Group: Authentication

Version information

Authentication Requirements:

Bearer token requirement

Header example showing the token format

Success Response:

200 OK status code

Response body structure

Example of successful response

Error Responses:

401 Unauthorized error (missing token)

403 Forbidden error (invalid token)

Example error responses

Additional Information:

Permission requirements

Middleware usage note

Description of the endpoint's purpose

This documentation follows standard API documentation practices and provides all necessary information for developers to implement and use the logout endpoint correctly.
