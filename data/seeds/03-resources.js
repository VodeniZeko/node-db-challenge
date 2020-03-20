exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "Lambda Student",
          resource_description: "a soon to be hired developer"
        },
        {
          id: 2,
          resource_name: "MacBook Pro #1",
          resource_description: "an overly expensive laptop computer"
        },
        {
          id: 3,
          resource_name: "MacBosdfsdfdsok Pro #1",
          resource_description: "an overly expensdfdsfdssive laptop computer"
        },
        {
          id: 4,
          resource_name: "MacBos564646456446454sdfsdfdsok Pro #1",
          resource_description:
            "an ov645645645654646erly expensdfdsfdssive laptop computer"
        }
      ]);
    });
};
