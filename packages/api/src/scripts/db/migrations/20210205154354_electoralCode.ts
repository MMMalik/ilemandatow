import * as Knex from "knex";

const districts = [
  {
    district: 1,
    name: "Legnica",
    totalSeats: 12,
  },
  {
    district: 2,
    name: "Wałbrzych",
    totalSeats: 8,
  },
  {
    district: 3,
    name: "Wrocław",
    totalSeats: 14,
  },
  {
    district: 4,
    name: "Bydgoszcz",
    totalSeats: 12,
  },
  {
    district: 5,
    name: "Toruń",
    totalSeats: 13,
  },
  {
    district: 6,
    name: "Lublin",
    totalSeats: 15,
  },
  {
    district: 7,
    name: "Chełm",
    totalSeats: 12,
  },
  {
    district: 8,
    name: "Zielona Góra",
    totalSeats: 12,
  },
  {
    district: 9,
    name: "Łódź",
    totalSeats: 10,
  },
  {
    district: 10,
    name: "Piotrków Trybunalski",
    totalSeats: 9,
  },
  {
    district: 11,
    name: "Sieradz",
    totalSeats: 12,
  },
  {
    district: 12,
    name: "Kraków",
    totalSeats: 8,
  },
  {
    district: 13,
    name: "Kraków",
    totalSeats: 14,
  },
  {
    district: 14,
    name: "Nowy Sącz",
    totalSeats: 10,
  },
  {
    district: 15,
    name: "Tarnów",
    totalSeats: 9,
  },
  {
    district: 16,
    name: "Płock",
    totalSeats: 10,
  },
  {
    district: 17,
    name: "Radom",
    totalSeats: 9,
  },
  {
    district: 18,
    name: "Siedlce",
    totalSeats: 12,
  },
  {
    district: 19,
    name: "Warszawa",
    totalSeats: 20,
  },
  {
    district: 20,
    name: "Warszawa",
    totalSeats: 12,
  },
  {
    district: 21,
    name: "Opole",
    totalSeats: 12,
  },
  {
    district: 22,
    name: "Krosno",
    totalSeats: 11,
  },
  {
    district: 23,
    name: "Rzeszów",
    totalSeats: 15,
  },
  {
    district: 24,
    name: "Białystok",
    totalSeats: 14,
  },
  {
    district: 25,
    name: "Gdańsk",
    totalSeats: 12,
  },
  {
    district: 26,
    name: "Słupsk",
    totalSeats: 14,
  },
  {
    district: 27,
    name: "Bielsko-biała",
    totalSeats: 9,
  },
  {
    district: 28,
    name: "Częstochowa",
    totalSeats: 7,
  },
  {
    district: 29,
    name: "Katowice",
    totalSeats: 9,
  },
  {
    district: 30,
    name: "Bielsko-biała",
    totalSeats: 9,
  },
  {
    district: 31,
    name: "Katowice",
    totalSeats: 12,
  },
  {
    district: 32,
    name: "Katowice",
    totalSeats: 9,
  },
  {
    district: 33,
    name: "Kielce",
    totalSeats: 16,
  },
  {
    district: 34,
    name: "Elbląg",
    totalSeats: 8,
  },
  {
    district: 35,
    name: "Olsztyn",
    totalSeats: 10,
  },
  {
    district: 36,
    name: "Kalisz",
    totalSeats: 12,
  },
  {
    district: 37,
    name: "Konin",
    totalSeats: 9,
  },
  {
    district: 38,
    name: "Piła",
    totalSeats: 9,
  },
  {
    district: 39,
    name: "Poznań",
    totalSeats: 10,
  },
  {
    district: 40,
    name: "Koszalin",
    totalSeats: 8,
  },
  {
    district: 41,
    name: "Szczecin",
    totalSeats: 12,
  },
];

export async function up(knex: Knex): Promise<void> {
  const hasElectoralDistrictTable = await knex.schema.hasTable(
    "ElectoralDistrict"
  );

  if (!hasElectoralDistrictTable) {
    await knex.schema.createTable("ElectoralDistrict", (table) => {
      table.uuid("id").unique();
      table.integer("district").unique();
      table.text("name");
      table.integer("totalSeats");
    });
  }

  const hasElectoralCodeTable = await knex.schema.hasTable("ElectoralCode");

  if (!hasElectoralCodeTable) {
    await knex.schema.createTable("ElectoralCode", (table) => {
      table.uuid("id").unique();
      table.timestamp("inEffectSince");
      table.timestamp("inEffectTo");
      table.float("threshold");
      table.integer("totalSeats");
      table.text("method");
    });
  }

  const hasRelTable = await knex.schema.hasTable(
    "ElectoralCode_districts_many"
  );

  if (!hasRelTable) {
    await knex.schema.createTable("ElectoralCode_districts_many", (table) => {
      table.uuid("ElectoralCode_left_id");
      table.uuid("ElectoralDistrict_right_id");
      table
        .foreign("ElectoralCode_left_id")
        .references("id")
        .inTable("ElectoralCode");
      table
        .foreign("ElectoralDistrict_right_id")
        .references("id")
        .inTable("ElectoralDistrict");
    });
  }

  const [code]: any[] = await knex("ElectoralCode")
    .returning("*")
    .insert([
      {
        id: knex.raw("gen_random_uuid()"),
        inEffectSince: new Date("2011-01-04T23:00:00.000Z"),
        inEffectTo: null,
        threshold: 5.0,
        totalSeats: 460,
        method: "dhondt",
      },
    ]);

  const insertedDistricts: any[] = await knex("ElectoralDistrict")
    .returning("*")
    .insert(
      districts.map(({ district, name, totalSeats }) => {
        return {
          id: knex.raw("gen_random_uuid()"),
          district,
          name,
          totalSeats,
        };
      })
    );

  await knex("ElectoralCode_districts_many").insert(
    insertedDistricts.map(({ id }) => {
      return {
        ElectoralCode_left_id: code.id,
        ElectoralDistrict_right_id: id,
      };
    })
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("ElectoralCode_districts_many");
  await knex.schema.dropTableIfExists("ElectoralDistrict");
  await knex.schema.dropTableIfExists("ElectoralCode");
}
