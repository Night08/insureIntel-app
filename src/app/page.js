"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Result from "@/components/result/Result";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10">
      <div>
        <h2 className="text-4xl font-bold text-center pb-16">
          Smart Defense Against Insurance Fraud
        </h2>
        {/* <p className="text-lg mt-4">
          InsureIntel is a platform that uses AI to detect and prevent insurance fraud.
        </p> */}
        <div className="p-10 bg-slate-200 rounded-xl">
          <p className="pb-4 text-xl font-semibold">
            Fill out the details of the claim to detect its legitimacy
          </p>
          <div className="flex justify-between space-x-8 my-6">
            <div className="flex flex-col space-y-1 w-1/2">
              <label for='gender' className="font-medium text-base">Gender</label>{" "}
              <Input id='gender' name='gender' placeholder="Enter gender" />
            </div>
            <div className="flex flex-col space-y-1 w-1/2">
              <label for='location' className="font-medium text-base">Location</label>{" "}
              <Input id='location' name='location' placeholder="Enter location" />
            </div>
          </div>
          <div className="flex justify-between space-x-8 my-6">
            <div className="flex flex-col space-y-1 w-1/2">
              <label for='employer' className="font-medium text-base">Employer Name</label>{" "}
              <Input id='employer' name='employer' placeholder="Enter employer name" />{" "}
            </div>
            <div className="flex flex-col space-y-1 w-1/2">
              <label for='relationship' className="font-medium text-base">Relationship</label>{" "}
              <Input id='relationship' name='relationship' placeholder="Enter relationship" />{" "}
            </div> 
          </div>
          <div className="flex justify-between space-x-8 my-6">
            <div className="flex flex-col space-y-1 w-1/2">
              <label for='patient_suffix' className="font-medium text-base">Patient's Suffix</label>{" "}
              <Input id='patient_suffix' name='patient_suffix' placeholder="Enter patient's suffix" />{" "}
            </div>
            <div className="flex flex-col space-y-1 w-1/2">
              <label for='cause' className="font-medium text-base">Cause</label>{" "}
              <Input id='cause' name='cause' placeholder="Enter cause" />{" "}
            </div>
          </div>
          
          <div className="flex justify-between space-x-8 my-6">
            <div className="flex flex-col space-y-1 w-1/2">
              <label for='membership_period' className="font-medium text-base">Membership Period</label>{" "}
              <Input id='membership_period' name='membership_period' placeholder="Enter membership period" />
            </div>
            <div className="flex flex-col space-y-1 w-1/2">
              <label for='number_of_claims' className="font-medium text-base">Number of Claims</label>{" "}
              <Input id='number_of_claims' name='number_of_claims' placeholder="Enter number of claims" />
            </div>
          </div>
          <div className="flex justify-between space-x-8 my-6">
            <div className="flex flex-col space-y-1 w-1/2">
              <label for='number_of_dependants' className="font-medium text-base">Number of Dependants</label>{" "}
              <Input id='number_of_dependants' name='number_of_dependants' placeholder="Enter number of dependants" />
            </div>
            <div className="flex flex-col space-y-1 w-1/2">
              <label for='patient_age' className="font-medium text-base">Patient's Age</label>{" "}
              <Input id='patient_age' name='patient_age' placeholder="Enter patient's age" />
            </div>
          </div>
          <div className="flex space-x-8 my-6">
            <div className="flex flex-col space-y-1 w-full">
              <label for='fee_charged' className="font-medium text-base">Fee Charged</label>{" "}
              <Input id='fee_charged' name='fee_charged' placeholder="Enter fee charged" />
            </div>
          </div>

        </div>
       
        <div className="flex space-x-4 my-8 items-center justify-center">
          <Button className="w-2/4 text-lg font-medium rounded-full">
            Check
          </Button>
        </div>
      </div>

      {/* result  */}
      <div className="container my-10 w-[94%]">
        <Result />
      </div>
    </main>
  );
}
