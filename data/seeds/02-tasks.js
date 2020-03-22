exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          project_id: 1,
          task_description: "task description",
          task_notes: "the task notes",
          task_completed: false
        },
        {
          id: 7,
          project_id: 2,
          task_description: "another task description",
          task_notes: "another the task notes",
          task_completed: false
        }
      ]);
    });
};
