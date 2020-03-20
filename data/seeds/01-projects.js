exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "project name here",
          project_completed: false,
          project_description: "the project description"
        },
        {
          project_name: "another project name here",
          project_completed: false,
          project_description: "another the project description"
        }
      ]);
    });
};
