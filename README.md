- Create Task API
- Endpoint : POST /api/v1/tasks  
```json
{
"name": "coding",
"completed": true
}
```
- Get All Task API
- Endpoint : GET /api/v1/tasks  
```json
{
  "data":[
    {
        "name": "coding",
        "completed": true
    },
    {
        "name": "sleep",
        "completed": false
    }
  ]
}
```
- Get By Id Task API
- Endpoint : GET /api/v1/tasks/:id  
response : 
```json
{
"id":"1213131323",
"name": "coding",
"completed": true
}
```
- Update Task API
- Endpoint : PUT /api/v1/tasks/:id
response : 
```json
{
"id":"1213131323",
"name": "coding",
"completed": true
}
```
- Delete Task API
- Endpoint : DELETE /api/v1/tasks/:id 
response: 
```json
{
"id":"1213131323",
"name": "coding",
"completed": true
}
```