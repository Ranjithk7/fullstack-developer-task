CREATE TABLE "articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"link" text NOT NULL,
	"snippet" text,
	"category" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
