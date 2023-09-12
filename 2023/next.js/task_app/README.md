<!-- @format -->

# API for Users

1. get all users ---GET---> api/users
2. create new user ---POST---> api/users/signup
3. Login user ---POST---> api/users/login
4. update users ---PATCH---> api/users/[userId]
5. get user by Id ---GET---> api/users/[userId]
6. delete user by Id ---DELETE---> api/users/[userId]
7. get tasks by userId --GET---> api/users/[userId]/tasks

# Tasks

# schema for task:-

1. title
2. description
3. status
4. createdAt
5. userId

# API for task

1. get all tasks ---GET---> api/task
2. create a new task ---POST---> api/task
3. update task ---PATCH---> api/task[taskId]
4. get task by id ---GET---> api/task[taskId]
5. delete task by id ---DELETE---> api/task[taskId]
