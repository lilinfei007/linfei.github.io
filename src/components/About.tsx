import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const highlights = [
  '20余年专注化肥研发生产',
  '拥有国家级研发中心和实验室',
  '产品通过ISO9001质量认证',
  '覆盖全国30+省市销售网络',
]

const milestones = [
  { year: '2003', event: '公司成立，开启化肥研发之路' },
  { year: '2008', event: '建成首条自动化生产线' },
  { year: '2015', event: '获得国家高新技术企业认定' },
  { year: '2020', event: '年产能突破100万吨' },
  { year: '2024', event: '智慧农业数字化转型' },
]

export function About() {
  return (
    <section id="about" className="py-24 section-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              关于我们
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              专注品质
              <br />
              <span className="text-gradient">服务三农</span>
            </h2>
            <div className="divider-gradient mb-8" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              绿丰农业科技有限公司成立于2003年，是一家集化肥研发、生产、销售为一体的现代化农业科技企业。
              公司秉承"科技兴农、绿色发展"的理念，致力于为中国农业提供优质、高效、环保的肥料产品。
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              经过二十余年的发展，公司已建成多条现代化生产线，年产能超过100万吨，
              产品远销全国30多个省市，服务超过100万农户，成为行业领先的化肥生产企业。
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg">
              了解更多
            </Button>
          </div>

          {/* Right Content - Timeline */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-8">发展历程</h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-harvest" />
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-6 group">
                      {/* Dot */}
                      <div className="relative">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <div className="w-3 h-3 rounded-full bg-primary" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <span className="text-primary font-bold text-lg">{milestone.year}</span>
                        <p className="text-muted-foreground mt-1">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-harvest/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
