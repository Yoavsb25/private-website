//src/sections/Education.tsx
import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {education} from '@/data/education'
import { Logo, BulletList, PillList } from '@/helpers/helpers'

// --- main component ----------------------------------------------------------
export function Education() {
  return (
    <Section id="education" className="bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Education</h2>

        <div className="space-y-6">
          {education.map((item, idx) => (
            <Card key={idx} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="grid items-start gap-4 sm:grid-cols-[auto,1fr,auto]">
                  <Logo src={item.logoUrl} alt={`${item.institution} logo`} />

                  <div className="min-w-0">
                    <CardTitle className="truncate">{item.degree}</CardTitle>
                    <CardDescription className="truncate">{item.institution}</CardDescription>
                  </div>

                  <div className="text-right">
                    {item.period && (
                      <CardDescription className="text-xs">{item.period}</CardDescription>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Details & Activities */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    {item.details?.length ? (
                      <>
                        <h4 className="mb-2 text-sm font-semibold text-foreground/80">Highlights</h4>
                        <BulletList items={item.details} />
                      </>
                    ) : null}

                    {item.activities?.length ? (
                      <>
                        <h4 className="mb-2 mt-4 text-sm font-semibold text-foreground/80">Activities</h4>
                        <BulletList items={item.activities} />
                      </>
                    ) : null}
                  </div>

                  <div>
                    {item.grades?.length ? (
                      <>
                        <h4 className="mb-2 text-sm font-semibold text-foreground/80">Grades</h4>
                        <BulletList items={item.grades} />
                      </>
                    ) : null}

                    {item.majors?.length ? (
                      <>
                        <h4 className="mb-2 mt-4 text-sm font-semibold text-foreground/80">Majors</h4>
                        <PillList items={item.majors} />
                      </>
                    ) : null}
                  </div>
                </div>

                {/* Tech context (only for relevant entries) */}
                {(item.programmingLanguages?.length || item.developmentTools?.length) && (
                  <div>
                    {item.programmingLanguages?.length ? (
                      <>
                        <h4 className="mb-2 text-sm font-semibold text-foreground/80">Programming Languages</h4>
                        <PillList items={item.programmingLanguages} />
                      </>
                    ) : null}

                    {item.developmentTools?.length ? (
                      <>
                        <h4 className="mb-2 mt-4 text-sm font-semibold text-foreground/80">Tools & Frameworks</h4>
                        <PillList items={item.developmentTools} />
                      </>
                    ) : null}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}