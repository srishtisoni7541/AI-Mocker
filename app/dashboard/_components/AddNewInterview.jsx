"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import generateInterviewQuestions from "@/utils/Gemini";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";


const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState(""); // Default to empty string
  const [jobDescription, setJobDescription] = useState(""); // Default to empty string
  const [jobExperience, setJobExperience] = useState(""); // Default to empty string
  const [loading, setLoading] = useState(false); // Default to false
  const {user} = useUser();
  const router = useRouter();

  const OnSubmit = async (e) => {
    e.preventDefault();
    if (!jobPosition || !jobDescription || !jobExperience) {
      alert("Please fill in all the fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await generateInterviewQuestions({
        jobRole: jobPosition,
        techStack: jobDescription,
        experience: jobExperience,
      });
      console.log(res);
    
      const result= await db.insert(MockInterview).values({
        mockId:uuidv4(),
        jsonMockRes:res,
        jobDescription,
        jobExperience,
        jobPosition,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD-MM-yyyy')
      }).returning({mockId:MockInterview.mockId})
      if(result){
        setOpenDialog(false);
        router.push(`/dashboard/interview/${result[0]?.mockId}`);
      }
      console.log(result);
    } catch (error) {
      console.error("Error generating interview questions:", error);
      alert("Failed to generate interview questions.");
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="mx-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={OnSubmit}>
                <div>
                  <h2>
                    Add details about your job position/role, job description, and years of experience
                  </h2>
                  <div className="mt-5 my-2">
                    <label>Job Role/Job Position</label>
                    <Input
                      className="mt-2"
                      placeholder="Ex. Full Stack Developer"
                      required
                      value={jobPosition} // Controlled input
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>

                  <div className="mt-5 my-2">
                    <label>Job Description/Tech Stack</label>
                    <Textarea
                      className="mt-2"
                      placeholder="Ex. React, Angular, Next, Node etc."
                      required
                      value={jobDescription} // Controlled input
                      onChange={(event) => setJobDescription(event.target.value)}
                    />
                  </div>
                  <div className="mt-5 my-2">
                    <label>Years of Experience</label>
                    <Input
                      className="mt-2"
                      placeholder="Ex. 5"
                      type="number"
                      required
                      max="30"
                      value={jobExperience} // Controlled input
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-6 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button disabled={loading} type="submit">
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" /> Generating
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
