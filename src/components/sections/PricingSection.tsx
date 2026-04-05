import Link from 'next/link'
import { PRICING_TIERS } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import {
  Card,
  Header,
  Plan,
  PlanName,
  Badge,
  Price,
  MainPrice,
  Description,
  Body,
  List,
  ListItem,
} from '@/components/ui/pricing-card'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-label="Project-based pricing"
      className="bg-bg border-t border-b border-border-light py-[9.6rem]"
    >
      <div className="mx-auto max-w-[125.4rem] px-[1.6rem] lg:px-[4.8rem]">
        <SectionHeader
          align="center"
          heading="Transparent Project-Based Pricing"
          label="Pricing"
          description="Every engagement starts with a discovery call and a detailed estimate."
        />

        <div className="mt-[6.4rem] grid grid-cols-1 md:grid-cols-3 gap-[2.4rem]">
          {PRICING_TIERS.map((tier) => (
            <Card key={tier.id} className={tier.badge ? 'ring-2 ring-orange-cta' : ''}>
              <Header>
                <Plan>
                  <PlanName>{tier.name}</PlanName>
                  {tier.badge && <Badge>{tier.badge}</Badge>}
                </Plan>
                <Price>
                  <MainPrice>{tier.price}</MainPrice>
                </Price>
                <Description>{tier.description}</Description>
              </Header>
              <Body>
                <List>
                  {tier.features.map((feature) => (
                    <ListItem key={feature}>
                      <Check
                        className="shrink-0 mt-0.5 text-orange-cta"
                        size={14}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </ListItem>
                  ))}
                </List>
                <div className="pt-4">
                  <Link href={tier.ctaHref}>
                    <Button
                      variant={tier.badge ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </div>
              </Body>
            </Card>
          ))}
        </div>

        {/* Mono footnote */}
        <p
          className="mt-[2.4rem] text-center text-[1.2rem] text-muted"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          // All projects start with a free discovery call. No obligations.
        </p>
      </div>
    </section>
  )
}
