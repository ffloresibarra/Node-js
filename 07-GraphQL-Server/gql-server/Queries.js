query getCourseWithFragments ($ courseID1: Int !, $ courseID2: Int!) { 
      course1: course (id: $ courseID1) { 
             ... courseFields 
      }, 
      course2: course (id: $ courseID2) { 
            ... courseFields 
      } 
} 
fragment courseFields en el curso { 
  título 
  autor 
  descripción 
  tema 
  url 
}


query getCourseWithFragments($courseID1: Int!, $courseID2: Int!) {
      course1: course(id: $courseID1) {
             ...courseFields
      },
      course2: course(id: $courseID2) {
            ...courseFields
      } 
}
fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
//////
mutation updateCourseTopic($id: Int!, $topic: String!) {
      updateCourseTopic(id: $id, topic: $topic) {
        ... courseFields
      }
    }

/////////////////////////////////////////////////////////////////////////////
Variables

{ 
    "courseID": 1 
}
///////
{
      "id": 1,
      "topic": "JavaScript"
    }