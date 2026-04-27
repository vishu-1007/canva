CREATE TABLE IF NOT EXISTS "templates" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"json" text NOT NULL,
	"width" integer NOT NULL,
	"height" integer NOT NULL,
	"thumbnailUrl" text NOT NULL,
	"isPro" boolean DEFAULT false
);
