import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core"; // Add serial and varchar here

export const CarListing = pgTable('carListing', {
    id: serial('id').primaryKey(), // Define the serial column for id
    listingTitle: varchar('listingTitle'),
    tagline: varchar('tagline'),
    originalPrice: varchar('originalPrice'),
    sellingPrice: varchar('sellingPrice').notNull(),
    category: varchar('category').notNull(),
    condition: varchar('condition').notNull(),
    make: varchar('make').notNull(),
    model: varchar('model').notNull(),
    year: varchar('year').notNull(),
    driveType: varchar('driveType').notNull(),
    transmission: varchar('transmission').notNull(),
    fuelType: varchar('fuelType').notNull(),
    mileage: varchar('mileage').notNull(),
    engineSize: varchar('engineSize'),
    cylinder: varchar('cylinder'),
    color: varchar('color').notNull(),
    door: varchar('door').notNull(),
    offerType: varchar('offerType'),
    vin: varchar('vin'),
    listingDescription: varchar('listingDescription').notNull(),
		features:json('features'),
		createdBy: varchar('createdBy').notNull(),
		userName: varchar('userName').notNull().default('Lagat'),
		userImageUrl: varchar('userImageUrl').default('https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ybzFYRTJoRTBlam52aEZ3NTFzekZlS3VWdzYifQ'),
		postedOn: varchar('postedOn')
});


export const CarImages=pgTable('carImages',{
	id: serial('id').primaryKey(),
  imageUrl: varchar('imageUrl').notNull(),
	carListingId:integer('carListingId').notNull().references(()=>CarListing.id)

});