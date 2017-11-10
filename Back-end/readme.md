# :neutral_face: RESTful API

An example RESTful API built on top of Lumen 5.2.

## Features

- RESTful routing
- Models with proper relationships
- Controllers/Models etc with proper separation of concerns
- JWT Authentication
- RESTful errors

## Routes List:

### Comments

| Method     | URI                               | Action                                                  |
|------------|-----------------------------------|---------------------------------------------------------|
| `POST`     | `comments`                        | `App\Http\Controllers\CommentsController@createComment` |
| `GET/HEAD` | `comments`                        | `App\Http\Controllers\CommentsController@getComments`   |
| `GET/HEAD` | `comments/{id}`                   | `App\Http\Controllers\CommentsController@getComment`    |
| `DELETE`   | `comments/{id}`                   | `App\Http\Controllers\CommentsController@deleteComment` |
| `PUT`      | `comments/{id}`                   | `App\Http\Controllers\CommentsController@updateComment` |

### Posts

| Method     | URI                               | Action                                                  |
|------------|-----------------------------------|---------------------------------------------------------|
| `POST`     | `posts`                           | `App\Http\Controllers\PostsController@createPost`       |
| `GET/HEAD` | `posts`                           | `App\Http\Controllers\PostsController@getPosts`         |
| `PUT`      | `posts/{id}`                      | `App\Http\Controllers\PostsController@updatePost`       |
| `GET/HEAD` | `posts/{id}`                      | `App\Http\Controllers\PostsController@getPost`          |
| `DELETE`   | `posts/{id}`                      | `App\Http\Controllers\PostsController@deletePost`       |

### Users

| Method     | URI                               | Action                                                  |
|------------|-----------------------------------|---------------------------------------------------------|
| `GET/HEAD` | `users`                           | `App\Http\Controllers\UsersController@getUsers`         |
| `POST`     | `users`                           | `App\Http\Controllers\UsersController@createUser`       |
| `PUT`      | `users/{id}`                      | `App\Http\Controllers\UsersController@updateUser`       |
| `GET/HEAD` | `users/{id}`                      | `App\Http\Controllers\UsersController@getUser`          |
| `DELETE`   | `users/{id}`                      | `App\Http\Controllers\UsersController@deleteUser`       |
| `GET/HEAD` | `users/{id}/comments`             | `App\Http\Controllers\UsersController@getUserComments`  |
| `GET/HEAD` | `users/{id}/comments/{commentId}` | `App\Http\Controllers\UsersController@getUserComment`   |
| `GET/HEAD` | `users/{id}/posts`                | `App\Http\Controllers\UsersController@getUserPosts`     |
| `GET/HEAD` | `users/{id}/posts/{postId}`       | `App\Http\Controllers\UsersController@getUserPost`      |

