exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "task description",
          notes: "the task notes",
          completed: false
        },
        {
          id: 7,
          description: "another task description",
          notes: "another the task notes",
          completed: false
        }
      ]);
    });
};
