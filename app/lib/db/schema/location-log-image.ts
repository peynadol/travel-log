import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { locationLog } from "./location-log";

export const locationLogImage = sqliteTable("locationLogImage", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  key: text("key").notNull(),
  locationLogId: integer().notNull().references(() => locationLog.id),
  userId: integer("user_id").notNull().references(() => user.id),
  createdAt: integer().notNull().$default(() => Date.now()),
  updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
