import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { location } from "./location";

export const locationLog = sqliteTable("locationLog", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  startedAt: integer("started_at").notNull(),
  endedAt: integer("ended_at").notNull(),
  lat: real("lat").notNull(),
  long: real("long").notNull(),
  locationId: integer().notNull().references(() => location.id),
  userId: integer("user_id").notNull().references(() => user.id),
  createdAt: integer().notNull().$default(() => Date.now()),
  updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
