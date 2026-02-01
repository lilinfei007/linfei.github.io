import { Award, Factory, FlaskConical, Truck, Users, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const advantages = [
  {
    icon: FlaskConical,
    title: '科研实力',
    description: '拥有国家级研发中心，50+专业研发人员，持续创新产品配方',
  },
  {
    icon: Factory,
    title: '生产能力',
    description: '6条现代化生产线，年产能超100万吨，满足大规模供应需求',
  },
  {
    icon: Award,
    title: '品质保障',
    description: 'ISO9001认证，严格品控体系，每批次产品可追溯',
  },
  {
    icon: Truck,
    title: '物流配送',
    description: '全国30+省市配送网络，快速响应，及时送达',
  },
  {
    icon: Users,
    title: '技术服务',
    description: '专业农技团队，免费提供施肥指导和技术支持',
  },
  {
    icon: Shield,
    title: '售后保障',
    description: '7×24小时客服支持，问题快速响应处理',
  },
]

export function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            企业优势
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            为什么选择<span className="text-gradient">绿丰农业</span>
          </h2>
          <div className="divider-gradient mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            凭借雄厚的技术实力和完善的服务体系，绿丰农业已成为众多农户的信赖之选
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={cn(
                "group relative bg-card rounded-2xl p-8 border border-border/50 transition-all duration-300",
                "hover:border-primary/30 hover:shadow-card-hover"
              )}
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <advantage.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 bg-hero-gradient rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100+', label: '专利技术' },
              { number: '50+', label: '研发人员' },
              { number: '99%', label: '客户满意度' },
              { number: '24h', label: '响应时间' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
