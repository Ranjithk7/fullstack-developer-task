import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  link: text("link").notNull(),
  snippet: text("snippet"),
  category: text("category").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});