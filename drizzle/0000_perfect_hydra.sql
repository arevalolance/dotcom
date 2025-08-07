CREATE TABLE "guestbook_entries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"grid_index" integer NOT NULL,
	"message" text NOT NULL,
	"color" varchar(7) NOT NULL,
	"name" varchar(100) DEFAULT 'Anonymous' NOT NULL,
	"drawing_url" text,
	"drawing_commands" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "guestbook_entries_grid_index_unique" UNIQUE("grid_index")
);
