import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";

export const location = sqliteTable("location", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  lat: real("lat").notNull(),
  long: real("long").notNull(),
  userId: integer("user_id").notNull().references(() => user.id),
  createdAt: integer().notNull().$default(() => Date.now()),
  updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
