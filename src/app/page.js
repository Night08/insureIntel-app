import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10">
      <div>
        <h2 className="text-3xl font-semibold">
          Smart Defense Against Insurance Fraud
        </h2>
        {/* <p className="text-lg mt-4">
          InsureIntel is a platform that uses AI to detect and prevent insurance fraud.
        </p> */}
        <p className="py-10 text-lg">
          Fill details to detect and prevent insaurance fraud
        </p>
        <div className="flex space-x-4 my-6">
          <Input placeholder="Claim Id" />
          <Input placeholder="Provider ID" />
          <Input placeholder="Diagnosis Code" />
          <Input placeholder="Procedure Code" />
        </div>
        <div className="flex space-x-4 my-6">
          <Input placeholder="Patient Age" />
          <Input placeholder="Patient Gender" />
          <Input placeholder="Claim Amount" />
        </div>
        <div className="flex space-x-4 my-6 items-center justify-center">
          <Button className="w-2/4">Check</Button>
        </div>
      </div>
    </main>
  );
}
