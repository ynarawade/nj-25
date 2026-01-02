import LandingHeader from "@/components/Landing/Header";
import HowItWorksCard from "@/components/Landing/How_It_Works_Card";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  IconArrowNarrowRight,
  IconChecklist,
  IconMoneybag,
  IconSettings,
  IconShieldPlus,
  IconSpeakerphone,
  IconUser,
  IconWallet,
} from "@tabler/icons-react";

function Landing() {
  return (
    <>
      <LandingHeader />

      <main className="mx-auto max-w-7xl px-4 py-24 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Collaborate with Brands.
            <br />
            Get Paid Transparently.
          </h1>

          <p className="max-w-xl text-muted-foreground text-base leading-relaxed">
            A single platform to manage campaigns, approvals, submissions, and
            payouts — without DMs, negotiations, or spreadsheets.
          </p>

          <Button size="lg" className="rounded-full px-8">
            <span>Start collaborating</span>
            <IconArrowNarrowRight />
          </Button>
        </section>

        {/* How It Works */}
        <section>
          <Card className="border-none shadow-none">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-medium">
                How It Works
              </CardTitle>
            </CardHeader>

            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <HowItWorksCard
                icon={<IconSpeakerphone size={40} />}
                title="Create or Apply"
                desc="Brands create campaigns. Creators apply with their rates and details."
              />

              <HowItWorksCard
                icon={<IconShieldPlus size={40} />}
                title="Get Approved"
                desc="Applications are reviewed and approved with clear terms."
              />

              <HowItWorksCard
                icon={<IconChecklist size={40} />}
                title="Submit Your Work"
                desc="Creators submit completed work for review and feedback."
              />

              <HowItWorksCard
                icon={<IconMoneybag size={40} />}
                title="Get Paid"
                desc="Approved work is credited directly to the creator’s wallet."
              />
            </CardContent>
          </Card>
        </section>
        {/* Problems and Solutions */}
        <section className="grid gap-y-14 sm:flex  justify-around ">
          {/* Problem */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">The Problem</h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>• Scattered DMs and email threads</li>
              <li>• Unclear deliverables and approvals</li>
              <li>• Manual tracking with spreadsheets</li>
              <li>• Payment delays and follow-ups</li>
            </ul>
          </div>
          {/* Solution */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">The NJ25 Solution</h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>• Structured campaigns and applications</li>
              <li>• Clear approval and submission workflow</li>
              <li>• Wallet-based payouts with transparency</li>
              <li>• Admin oversight for trust and disputes</li>
            </ul>
          </div>
        </section>
        <section className="space-y-10 text-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              One Platform. Multiple Roles.
            </h2>

            <p className="max-w-xl mx-auto text-sm text-muted-foreground">
              NJ25 allows users to create campaigns as a brand and apply as a
              creator using a single account, profile, and wallet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6 space-y-2 ">
              <IconUser className="mx-auto" size={40} />
              <h4 className="font-medium">Unified Account</h4>
              <p className="text-sm text-muted-foreground">
                Create campaigns or apply to them without switching accounts.
              </p>
            </div>

            <div className="rounded-2xl border p-6 space-y-2">
              <IconWallet className="mx-auto" size={40} />
              <h4 className="font-medium">Single Wallet</h4>
              <p className="text-sm text-muted-foreground">
                Track earnings, credits, and withdrawals in one place.
              </p>
            </div>

            <div className="rounded-2xl border p-6 space-y-2">
              <IconSettings className="mx-auto" size={40} />
              <h4 className="font-medium">Full Control</h4>
              <p className="text-sm text-muted-foreground">
                Manage campaigns, submissions, and payments transparently.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Landing;
