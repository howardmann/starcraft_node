
exports.seed = function(knex, Promise) {
    return Promise.all([
      // Inserts seed entries
      knex('heroes').insert({id: 1, name: 'Jim Raynor', health: 100, attack: 200, description: "Jim Raynor is a former terran marshal turned rebel, who has became one of the major figures in the Koprulu sector through his work to bring down the Confederacy and, later, in the struggle against the Confederacy's successor, the Dominion. Raynor is one of the few terrans to engage in a long-term alliance with the protoss.", race_id: 1}),
      knex('heroes').insert({id: 2, name: 'Zeratul', health: 100, attack: 200, description: 'Zeratul was a revered Nerazim mystic. During the Great War, Zeratul allied with the Khalai Tassadar, despite his hatred for the Conclave that once banished his forbears. The Dark Templar personally slew the cerebrate Zasz, but in turn accidentally gave the Overmind the location of Aiur.Zeratul was manipulated by Sarah Kerrigan during the Brood War into killing the Second Overmind and Raszagal, the Dark Templar Matriarch.', race_id: 2}),
      knex('heroes').insert({id: 3, name: 'Sarah Kerrigan', health: 100, attack: 200, description: "Sarah Louise Kerrigan was a psychic terran female. She began her career as a Confederate ghost and later became the second-in-command of the Sons of Korhal. Following Arcturus Mengsk's betrayal, she was captured and infested by the Zerg Swarm, ultimately becoming the self-proclaimed Queen of Blades (a.k.a. the Zerg Queen) and leader of the Swarm.", race_id: 1})
    ]);
};
