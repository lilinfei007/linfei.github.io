import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    content: '湖北省武汉市黄陂区蔡家榨镇兴崛大道27号附9号',
  },
  {
    icon: Phone,
    title: '联系电话',
    content: '400-816-0061',
  },
  {
    icon: Mail,
    title: 'QQ咨询',
    content: '450505620',
  },
  {
    icon: Clock,
    title: '工作时间',
    content: '周一至周六 8:00 - 18:00',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 section-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            联系我们
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            与我们<span className="text-gradient">取得联系</span>
          </h2>
          <div className="divider-gradient mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            如有任何问题或合作意向，欢迎随时与我们联系，专业团队将竭诚为您服务
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border/50 card-hover text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-card rounded-2xl overflow-hidden border border-border/50 h-80">
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary/40 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">湖北省武汉市黄陂区蔡家榨镇兴崛大道27号附9号</p>
              <p className="text-muted-foreground/60 text-sm mt-2">点击查看地图导航</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
