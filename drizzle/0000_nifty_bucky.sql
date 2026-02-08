CREATE TABLE "Chat" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"owner_id" text NOT NULL,
	"messages" jsonb NOT NULL,
	"created_at" timestamp (3) DEFAULT now() NOT NULL
);
