/\*\*

- GET /profile
- Retrieves the authenticated captain's profile information
-
- Required Headers:
- {
- Authorization: "Bearer <jwt_token>" // JWT token received from login
- }
-
- Example Request:
- GET /captain/profile
- Headers:
- {
- "Authorization": "Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
- }
-
- Successful Response (200 OK):
- {
- "success": true,
- "message": "Profile retrieved successfully",
- "data": {
-     "captain": {
-       "id": "c123456789",
-       "email": "john.doe@example.com",
-       "fullname": {
-         "firstname": "John"
-       },
-       "vehicle": {
-         "color": "Black",
-         "plate": "ABC123",
-         "capacity": 4,
-         "vehicleType": "car"
-       },
-       "stats": {
-         "totalTrips": 150,
-         "rating": 4.8,
-         "completionRate": "95%"
-       },
-       "status": "active",
-       "accountCreated": "2023-12-01T08:00:00.000Z",
-       "lastLogin": "2024-01-20T10:30:00.000Z"
-     }
- }
- }
-
- Error Responses:
-
- 1.  Missing Token (401 Unauthorized):
- {
- "success": false,
- "message": "Authentication token is required",
- "error": "NO_TOKEN"
- }
-
- 2.  Invalid Token (401 Unauthorized):
- {
- "success": false,
- "message": "Invalid or expired token",
- "error": "INVALID_TOKEN"
- }
-
- 3.  Account Not Found (404 Not Found):
- {
- "success": false,
- "message": "Captain profile not found",
- "error": "PROFILE_NOT_FOUND"
- }
-
- 4.  Account Suspended (403 Forbidden):
- {
- "success": false,
- "message": "Account is currently suspended",
- "error": "ACCOUNT_SUSPENDED"
- }
-
- 5.  Server Error (500 Internal Server Error):
- {
- "success": false,
- "message": "Internal server error",
- "error": "SERVER_ERROR"
- }
-
- Authentication:
- - Requires valid JWT token in Authorization header
- - Token must be prefixed with "Bearer "
- - Token is validated using authMiddleware.authCaptain
-
- Security Features:
- - Implements rate limiting
- - Validates token expiration
- - Checks account status
-
- Rate Limiting:
- - Maximum 60 requests per minute per authenticated captain
-
- Cache Control:
- - Response may be cached for up to 5 minutes
- - Cache is invalidated on profile updates
-
- Handler: captainController.getCaptainProfile
- Middleware: authMiddleware.authCaptain
-
- @route GET /profile
- @authentication Required
- @middleware authMiddleware.authCaptain
- @controller captainController.getCaptainProfile
  \*/
