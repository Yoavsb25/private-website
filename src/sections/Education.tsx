import { Section } from '@/components/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {education} from '@/data/education'

// --- small helpers -----------------------------------------------------------
function Logo({ src, alt }: { src?: string; alt: string }) {
  if (!src) return null
  return (
    <div className="flex h-14 w-32 items-center justify-center overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="max-h-[75%] max-w-[75%] object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}


function PillList({ items }: { items?: string[] }) {
  if (!items?.length) return null
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((it) => (
        <Badge key={it} variant="outline">
          {it}
        </Badge>
      ))}
    </div>
  )
}

function BulletList({ items }: { items?: string[] }) {
  if (!items?.length) return null
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  )
}

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