
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('MockInterview',{
    id:serial('id').primaryKey(),
    jsonMockRes:text('jsonMockRes').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDescription:varchar('jobDescription').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
    mockId:varchar('mockId').notNull(),
})


export const UserAnswer = pgTable('UserAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockIdRef').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns') ,
    feedBack:text('feedBack'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAT')

})