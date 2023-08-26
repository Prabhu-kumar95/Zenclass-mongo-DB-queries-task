// inserting documents inside the users collection
db.users.insertMany([
    {
      "user_id": 1,
      "user_name": "Vimal",
      "email": "Vimal@gmail.com",
      "mentor_id": 1,
      "mentor_name":"Divya",
    },
    {
      "user_id": 2,
      "user_name": "Ramya",
      "email": "Ramya@gmail.com",
      "mentor_id": 1,
      "mentor_name":"Divya",
    },
    {
      "user_id": 3,
      "user_name": "Viji",
      "email": "Viji@gmail.com",
      "mentor_id": 1,
      "mentor_name":"Divya",
    },
    {
      "user_id": 4,
      "user_name": "Sarvan",
      "email": "Sarvan@gmail.com",
      "mentor_id": 2,
      "mentor_name":"Raja",
    },
    {
      "user_id": 5,
      "user_name": "Hari",
      "email": "Hari@gmail.com",
      "mentor_id": 2,
      "mentor_name":"Raja",
    },
  ]);
// inserting documents inside the codekata collection
  db.codekata.insertMany([
    {
      "user_id": 1,
      "user_name": "Vimal",
      "Total_problems": 30,
      "no_of_problems_solved": 28,
    },
    {
      "user_id": 2,
      "user_name": "Vimal",
      "Total_problems": 30,
      "no_of_problems_solved": 25,
    },
    {
      "user_id": 3,
      "user_name": "Vimal",
      "Total_problems": 30,
      "no_of_problems_solved": 18,
    },
    {
      "user_id": 4,
      "user_name": "Vimal",
      "Total_problems": 30,
      "no_of_problems_solved": 21,
    },
    {
      "user_id": 5,
      "user_name": "Vimal",
      "Total_problems": 30,
      "no_of_problems_solved": 12,
    },
  ]);


// inserting documents inside the attendance collection
  db.attendance.insertMany([
    {
        "user-id": 1,
         "user_name": "Vimal",
          "month": "october", 
          "absent": "01-oct-2020",
    },
    {
        "user-id": 2,
         "user_name": "Ramya",
          "month": "october",
           "absent": "06-oct-2020",
    },
    {
        "user-id": 3,
         "user_name": "Viji",
          "month": "october", 
          "absent": "24-oct-2020",
    },
    {
        "user-id": 4,
         "user_name": "Sarvan",
          "month": "october",
           "absent": "21-oct-2020",
    },
    {
        "user-id": 5,
         "user_name": "Hari",
          "month": "october",
           "absent": "16-oct-2020",
    },
  ]);
  
// inserting documents inside the topics collection
  db.topics.insertMany([
    {
      "topic_id": 1,
      "topic": "HTML",
      "topic_date":"01-oct-2020" ,
    },
    {
      "topic_id": 2,
      "topic": "CSS",
      "topic_date":"06-oct-2020",
    },
    {
      "topic_id": 3,
      "topic": "Javascript",
      "topic_date":"24-oct-2020",
    },
    {
      "topic_id": 4,
      "topic": "React",
      "topic_date": "21-oct-2020",
    },
    {
      "topic_id": 5,
      "topic": "NodeJs",
      "topic_date":"16-oct-2020",
    },
  ]);
  
// inserting documents inside the tasks collection
  db.tasks.insertMany([
    {
        "task_id": 1,
         "user-id": 1,
         "user_name": "Vimal",
          "task": "HTML task",
           "task_due_date": "28-oct-2020",
            "submitted": true,
    },
    {
        "task_id": 2,
         "user-id": 2,
         "user_name": "Ramya",
          "task": "CSS task",
           "task_due_date": "28-oct-2020",
            "submitted": true,
    },
    {
        "task_id": 3,
         "user-id": 3,
         "user_name": "Viji",
          "task": "Javascript task",
           "task_due_date": "28-oct-2020",
            "submitted": false,
    },
    {
        "task_id": 4,
         "user-id": 4,
         "user_name": "Sarvan",
          "task": "React task",
           "task_due_date": "28-oct-2020",
            "submitted": false,
    },
    {
        "task_id": 5,
         "user-id": 5,
         "user_name": "Hari",
          "task": "Nodejs task",
           "task_due_date": "28-oct-2020",
            "submitted": false,
    },
  ]);
// inserting documents inside the companydrives collection
  db.company_drives.insertMany([
    {"user-id": 1,
     "user_name": "Vimal",
      "drive_date": "16-oct-2020",
       "company_name": "Google", 
    },
    {
        "user-id": 1,
         "user_name": "Ramya",
          "drive_date": "16-oct-2020",
           "company_name": "Wallmart", 
    },
    {
        "user-id": 1,
         "user_name": "Viji",
          "drive_date": "16-oct-2020",
           "company_name": "Amazon", 
    },
    {
        "user-id": 1,
         "user_name": "Sarvan",
          "drive_date": "16-oct-2020",
           "company_name": "Netflix", 
    },
    {
        "user-id": 1,
         "user_name": "Hari",
          "drive_date": "16-oct-2020",
           "company_name": "Flipkart", 
    },
  ]);
  
// inserting documents inside the mentors collection
  db.mentors.insertMany([
    {
        "mentor-id": 1,
         "mentor_name": "Divya",
          "mentor_email": "Divya@gmail.com",
           "mentees_count": 20,
    },
    {
        "mentor-id": 2,
         "mentor_name": "Raja",
          "mentor_email": "Raja@gmail.com",
           "mentees_count": 18,
    },
    {
        "mentor-id": 3,
         "mentor_name": "mohan",
          "mentor_email": "mohan@gmail.com",
           "mentees_count": 10,
    },
    {
        "mentor-id": 4,
         "mentor_name": "Mounica",
          "mentor_email": "Mounica@gmail.com",
           "mentees_count": 11,
    },
    {
        "mentor-id": 5,
         "mentor_name": "Steve",
          "mentor_email": "Steve@gmail.com",
           "mentees_count": 5,
    },
  ]);