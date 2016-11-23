
exports.seed = function(knex, Promise) {
  return Promise.all([
    // Inserts seed entries
    knex('planets').insert({id: 1, name: 'korhal', description: "Korhal IV (often simply refered to as Korhal) is the fourth planet in the Korhal system. During the four years since the establishment of the Terran Dominion, a large portion of the planet has developed into an ecumenopolis", race_id: 1}),
    knex('planets').insert({id: 2, name: 'aiur', description: "Aiur is the protoss homeworld, located in a star system with a single yellow star and possessing a single moon not unlike Luna. It is at least the third of the system's terrestrial planets, if not further out. A great psionic matrix emanated from Aiur. Protoss structures and units, to a lesser extent, drew their energy from it. A nexus provided a link to this matrix, but pylons were needed to actually tap into the energy required to provide psionic energy to new colonies.Aiur possesses great, almost spiritual significance to all protoss.", race_id: 2}),
    knex('planets').insert({id: 3, name: 'char', description: "It is an inhospitable volcanic planet with thick ash covering most of its surface and tainting its acrid atmosphere. The hazardous environment is further intensified by extremely high levels of cosmic radiation from its volatile pairing of binary stars. Char's elliptical orbit means whole regions of its sunward face can become molten seas during a close approach, with temporary islands forming in them due to rapid cooling as the planet swings away to the frozen outer reaches of the system.", race_id: 3})
  ]);
};
